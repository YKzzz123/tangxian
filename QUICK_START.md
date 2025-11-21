# 快速启动指南

## 🚀 启动Flask服务器

### 步骤1：检查Python环境

确保已安装Python 3.8或更高版本：

```bash
python --version

### 步骤2：安装依赖

在项目根目录下运行：

```bash
# 安装基础依赖
pip install -r requirements_flask.txt

### 步骤3：配置环境变量

 `.env` 文件

```env
# DeepSeek API配置（用于生成诗句）
DEEPSEEK_API_KEY=sk-your-actual-api-key-here

# 豆包API配置（用于生成图片，可选）
DOUBAO_API_KEY=your-doubao-api-key-here
DOUBAO_API_URL=https://ark.cn-beijing.volces.com/api/v3/images/generations
DOUBAO_MODEL=
DOUBAO_AUTH_METHOD=bearer

# 服务器配置
PORT=3000
NODE_ENV=development
```

> 📝 **获取API Key**：
> - DeepSeek API: https://platform.deepseek.com/
> - 豆包API: https://www.volcengine.com/

### 步骤4：启动服务器

在项目根目录运行：

```bash
# 方式1：直接运行
python app_flask.py

# 方式2：使用Flask CLI
flask run --port 3000

# 方式3：指定主机和端口
python app_flask.py
```

### 步骤5：访问网站

启动成功后，你会看到类似输出：

```
🚀 服务器运行在 http://localhost:3000
📝 DeepSeek API 端点: http://localhost:3000/api/deepseek-poem
🎨 豆包生图 API 端点: http://localhost:3000/api/doubao-image
```

在浏览器中访问：**http://localhost:3000**

## ✅ 验证服务器运行

### 1. 检查健康状态

访问：`http://localhost:3000/api/health`

应该返回：
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "deepseekConfigured": true,
  "doubaoConfigured": true
}
```

### 2. 测试API端点

- 首页：`http://localhost:3000`
- 健康检查：`http://localhost:3000/api/health`
- DeepSeek API：`POST http://localhost:3000/api/deepseek-poem`
- 豆包API：`POST http://localhost:3000/api/doubao-image`

## 🐛 常见问题

### 问题1：`python: command not found`

**解决方案：**
- Windows: 使用 `py` 或 `python3` 命令
- Linux/Mac: 使用 `python3` 命令
- 或检查Python是否正确安装并添加到PATH

### 问题2：`ModuleNotFoundError: No module named 'flask'`

**解决方案：**
```bash
pip install Flask Flask-CORS python-dotenv requests
```

### 问题3：端口被占用

**解决方案：**
- 修改 `.env` 文件中的 `PORT` 值
- 或关闭占用3000端口的其他程序

### 问题4：API Key未配置

**解决方案：**
- 检查 `.env` 文件是否存在
- 确认API Key已正确填写
- 重启服务器

### 问题5：无法访问网站

**解决方案：**
- 确认服务器已成功启动
- 检查防火墙设置
- 尝试访问 `http://127.0.0.1:3000`

## 📝 下一步

服务器启动成功后，你可以：

1. ✅ 访问首页查看项目
2. ✅ 测试API功能
3. ⏳ 开发新功能（RAG、GIS、共现分析）

详细开发计划请参考：
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)
- [FLASK_IMPLEMENTATION_PLAN.md](./FLASK_IMPLEMENTATION_PLAN.md)

---

