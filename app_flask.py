"""
Flask应用主文件
寻仙唐迹 - 后端服务
"""
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
import os
import sys

# 加载环境变量
load_dotenv()

# 创建Flask应用
app = Flask(__name__, static_folder='.', static_url_path='')

# 配置CORS
CORS(app, resources={
    r"/api/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# 配置
app.config['JSON_AS_ASCII'] = False  # 支持中文JSON
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB最大请求大小

# ==================== 现有API功能 ====================

@app.route('/api/deepseek-poem', methods=['POST'])
def deepseek_poem():
    """DeepSeek API - 生成五言绝句"""
    try:
        data = request.get_json()
        prompt = data.get('prompt')
        
        if not prompt:
            return jsonify({
                'success': False,
                'message': '缺少 prompt 参数'
            }), 400
        
        api_key = os.getenv('DEEPSEEK_API_KEY')
        if not api_key:
            return jsonify({
                'success': False,
                'message': '服务器配置错误：DeepSeek API Key 未设置'
            }), 500
        
        # 调用DeepSeek API
        import requests
        
        response = requests.post(
            'https://api.deepseek.com/v1/chat/completions',
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {api_key}'
            },
            json={
                'model': 'deepseek-chat',
                'messages': [
                    {
                        'role': 'system',
                        'content': '你是一位精通唐代诗歌的专家，擅长创作五言绝句。你的任务是严格按照要求创作符合格律的五言绝句，每句五个字，共四句。直接输出诗句，不要添加任何说明或注释。'
                    },
                    {
                        'role': 'user',
                        'content': prompt
                    }
                ],
                'temperature': 0.7,
                'max_tokens': 200
            },
            timeout=30
        )
        
        if response.status_code != 200:
            error_data = response.json() if response.headers.get('content-type') == 'application/json' else {}
            return jsonify({
                'success': False,
                'message': f'DeepSeek API 调用失败: {response.status_text}',
                'details': error_data
            }), response.status_code
        
        result = response.json()
        poem_text = result.get('choices', [{}])[0].get('message', {}).get('content', '').strip()
        
        if not poem_text:
            return jsonify({
                'success': False,
                'message': 'DeepSeek API 返回的内容为空'
            }), 500
        
        # 处理诗句（与Express版本相同的逻辑）
        import re
        cleaned_poem = re.sub(r'```[^`]*```', '', poem_text)
        cleaned_poem = cleaned_poem.replace('**', '').replace('*', '').strip()
        
        lines = [line.strip() for line in cleaned_poem.split('\n') if line.strip()]
        lines = [line for line in lines if '五言' not in line and '绝句' not in line]
        lines = [line for line in lines if re.search(r'[\u4e00-\u9fa5]', line)]
        
        poem_lines = []
        for line in lines:
            chinese_chars = re.findall(r'[\u4e00-\u9fa5]', line)
            if len(chinese_chars) >= 5:
                poem_lines.append(''.join(chinese_chars[:5]))
        
        if len(poem_lines) < 4:
            all_chars = re.findall(r'[\u4e00-\u9fa5]', cleaned_poem)
            poem_lines = []
            for i in range(0, len(all_chars), 5):
                if len(poem_lines) >= 4:
                    break
                line = ''.join(all_chars[i:i+5])
                if len(line) == 5:
                    poem_lines.append(line)
        
        if len(poem_lines) >= 4:
            return jsonify({
                'success': True,
                'poem': '\n'.join(poem_lines),
                'content': '\n'.join(poem_lines),
                'lines': poem_lines,
                'original': poem_text,
                'usage': result.get('usage', {})
            })
        else:
            return jsonify({
                'success': True,
                'poem': cleaned_poem,
                'content': cleaned_poem,
                'original': poem_text,
                'usage': result.get('usage', {})
            })
            
    except Exception as e:
        app.logger.error(f'生成诗句时出错: {str(e)}', exc_info=True)
        return jsonify({
            'success': False,
            'message': str(e) if os.getenv('NODE_ENV') == 'development' else '服务器内部错误'
        }), 500


@app.route('/api/doubao-image', methods=['POST'])
def doubao_image():
    """豆包生图 API"""
    try:
        data = request.get_json()
        prompt = data.get('prompt')
        
        if not prompt:
            return jsonify({
                'success': False,
                'message': '缺少 prompt 参数'
            }), 400
        
        api_key = os.getenv('DOUBAO_API_KEY')
        if not api_key:
            return jsonify({
                'success': False,
                'message': '服务器配置错误：豆包 API Key 未设置'
            }), 500
        
        import requests
        
        api_url = os.getenv('DOUBAO_API_URL', 'https://ark.cn-shanghai.volces.com/api/v3/images/generations')
        model = os.getenv('DOUBAO_MODEL', 'doubao-seedream-3-0-t2i-250415')
        auth_method = os.getenv('DOUBAO_AUTH_METHOD', 'bearer')
        
        headers = {'Content-Type': 'application/json'}
        if auth_method == 'bearer':
            headers['Authorization'] = f'Bearer {api_key}'
        elif auth_method == 'token':
            headers['Authorization'] = f'Token {api_key}'
        elif auth_method == 'api-key':
            headers['X-API-Key'] = api_key
        
        response = requests.post(
            api_url,
            headers=headers,
            json={
                'model': model,
                'prompt': prompt,
                'size': '1024x1024',
                'n': 1,
                'quality': 'standard',
                'response_format': 'b64_json'
            },
            timeout=60
        )
        
        if response.status_code != 200:
            error_data = response.json() if response.headers.get('content-type') == 'application/json' else {}
            return jsonify({
                'success': False,
                'message': f'豆包生图 API 调用失败: {response.status_code} {response.reason}',
                'details': error_data
            }), response.status_code
        
        result = response.json()
        image_base64 = None
        
        if result.get('data') and isinstance(result['data'], list) and len(result['data']) > 0:
            image_base64 = result['data'][0].get('b64_json') or result['data'][0].get('url')
        elif result.get('b64_json'):
            image_base64 = result['b64_json']
        elif result.get('image'):
            image_base64 = result['image']
        elif result.get('url'):
            return jsonify({
                'success': True,
                'image': None,
                'imageUrl': result['url'],
                'message': '图片生成成功（URL格式）'
            })
        
        if not image_base64:
            return jsonify({
                'success': False,
                'message': '豆包 API 返回的数据格式异常，无法解析图片',
                'rawResponse': result
            }), 500
        
        return jsonify({
            'success': True,
            'image': image_base64,
            'message': '图片生成成功'
        })
        
    except Exception as e:
        app.logger.error(f'生成图像时出错: {str(e)}', exc_info=True)
        return jsonify({
            'success': False,
            'message': str(e) if os.getenv('NODE_ENV') == 'development' else '服务器内部错误'
        }), 500


@app.route('/api/health', methods=['GET'])
def health():
    """健康检查端点"""
    return jsonify({
        'status': 'ok',
        'timestamp': __import__('datetime').datetime.now().isoformat(),
        'deepseekConfigured': bool(os.getenv('DEEPSEEK_API_KEY')),
        'doubaoConfigured': bool(os.getenv('DOUBAO_API_KEY')),
        'doubaoModel': os.getenv('DOUBAO_MODEL', 'doubao-seedream-4-0-250828'),
        'doubaoApiUrl': os.getenv('DOUBAO_API_URL', 'https://ark.cn-shanghai.volces.com/api/v3/images/generations')
    })


# ==================== 新功能API（待实现） ====================

@app.route('/api/assistant/search', methods=['POST'])
def assistant_search():
    """小助手 - 本地数据库搜索"""
    # TODO: 实现本地数据库搜索
    return jsonify({
        'success': False,
        'message': '功能开发中'
    }), 501


@app.route('/api/assistant/rag', methods=['POST'])
def assistant_rag():
    """小助手 - RAG增强搜索"""
    # TODO: 实现RAG功能
    return jsonify({
        'success': False,
        'message': '功能开发中'
    }), 501


@app.route('/api/gis/map', methods=['GET'])
def gis_map():
    """GIS - 生成地图"""
    # TODO: 实现GIS地图生成
    return jsonify({
        'success': False,
        'message': '功能开发中'
    }), 501


@app.route('/api/gis/locations', methods=['GET'])
def gis_locations():
    """GIS - 获取所有位置"""
    # TODO: 实现位置数据获取
    return jsonify({
        'success': False,
        'message': '功能开发中'
    }), 501


@app.route('/api/analysis/cooccurrence', methods=['POST'])
def analysis_cooccurrence():
    """词汇共现分析"""
    # TODO: 实现词汇共现分析
    return jsonify({
        'success': False,
        'message': '功能开发中'
    }), 501


# ==================== 静态文件服务 ====================

@app.route('/')
def index():
    """首页"""
    return send_from_directory('.', 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """静态文件服务"""
    # 排除API路由
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    return send_from_directory('.', path)


# ==================== 错误处理 ====================

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500


# ==================== 启动服务器 ====================

if __name__ == '__main__':
    port = int(os.getenv('PORT', 3000))
    debug = os.getenv('NODE_ENV') == 'development'
    
    print(f'🚀 服务器运行在 http://localhost:{port}')
    print(f'📝 DeepSeek API 端点: http://localhost:{port}/api/deepseek-poem')
    print(f'🎨 豆包生图 API 端点: http://localhost:{port}/api/doubao-image')
    
    if not os.getenv('DEEPSEEK_API_KEY'):
        print('⚠️  警告: DEEPSEEK_API_KEY 未配置')
    if not os.getenv('DOUBAO_API_KEY'):
        print('⚠️  警告: DOUBAO_API_KEY 未配置')
    
    app.run(host='0.0.0.0', port=port, debug=debug)

