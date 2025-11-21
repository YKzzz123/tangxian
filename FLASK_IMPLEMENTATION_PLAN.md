# Flask 实现详细计划

## 📋 项目结构

```
trys/
├── app.py                      # Flask主应用
├── config.py                   # 配置文件
├── requirements.txt            # Python依赖
├── .env                        # 环境变量
├── .gitignore                  # Git忽略文件
│
├── api/                        # API路由模块
│   ├── __init__.py
│   ├── deepseek.py            # DeepSeek API
│   ├── doubao.py              # 豆包API
│   ├── health.py              # 健康检查
│   ├── assistant.py           # 小助手功能
│   ├── gis.py                 # GIS功能
│   └── analysis.py            # 词汇共现分析
│
├── services/                   # 业务逻辑层
│   ├── __init__.py
│   ├── rag_service.py         # RAG服务
│   ├── database_service.py    # 数据库服务
│   ├── gis_service.py         # GIS服务
│   └── analysis_service.py    # 分析服务
│
├── models/                     # 数据模型
│   ├── __init__.py
│   ├── immortal.py            # 仙人模型
│   └── poem.py                # 诗歌模型
│
├── utils/                      # 工具函数
│   ├── __init__.py
│   ├── text_processor.py      # 文本处理
│   └── helpers.py             # 辅助函数
│
├── data/                       # 数据目录
│   ├── chroma_db/             # 向量数据库
│   └── immortal_locations.json # 仙人位置数据
│
├── static/                     # 静态文件（现有）
├── templates/                  # 模板（如需要）
│
└── [现有文件保持不变]
    ├── database/
    ├── images/
    ├── json/
    └── *.html
```

## 🔧 核心功能实现

### 1. 小助手功能（RAG）

#### 数据准备
- 将900个JSON文件中的诗歌文本提取
- 使用sentence-transformers生成向量
- 存储到Chroma向量数据库

#### API端点
- `POST /api/assistant/search` - 本地数据库搜索
- `POST /api/assistant/rag` - RAG增强搜索
- `POST /api/assistant/chat` - 对话式搜索

#### 技术栈
- LangChain：RAG框架
- Chroma：向量数据库
- sentence-transformers：中文嵌入模型
- DeepSeek API：生成回答

### 2. GIS功能

#### 数据准备
- 为仙人数据添加地理位置信息（经纬度）
- 创建`immortal_locations.json`文件
- 支持地名到坐标的转换

#### API端点
- `GET /api/gis/map` - 生成地图HTML
- `GET /api/gis/locations` - 获取所有位置
- `GET /api/gis/immortal/<name>` - 获取特定仙人位置

#### 技术栈
- Folium：地图可视化
- geopy：地理编码
- GeoJSON：地理数据格式

### 3. 词汇共现分析

#### 功能
- 从诗歌文本中提取词汇
- 计算词汇共现频率
- 生成共现网络图
- 支持按朝代、诗人筛选

#### API端点
- `POST /api/analysis/cooccurrence` - 词汇共现分析
- `GET /api/analysis/network` - 获取共现网络数据
- `GET /api/analysis/stats` - 获取统计信息

#### 技术栈
- jieba：中文分词
- networkx：网络分析
- pandas：数据处理
- plotly：可视化

## 📦 依赖管理

### requirements.txt 详细说明

```txt
# Web框架
Flask==3.0.0                    # Flask核心
Flask-CORS==4.0.0               # 跨域支持
python-dotenv==1.0.0            # 环境变量

# HTTP请求
requests==2.31.0                # HTTP库
httpx==0.25.0                   # 异步HTTP（可选）

# RAG相关
langchain==0.1.0                # LangChain核心
langchain-community==0.0.10     # LangChain社区扩展
chromadb==0.4.18                # 向量数据库
sentence-transformers==2.2.2    # 中文嵌入模型

# 数据库
SQLAlchemy==2.0.23              # ORM
sqlite3                         # SQLite（内置）

# GIS相关
folium==0.15.1                  # 地图可视化
geopandas==0.14.1               # 地理数据处理
geopy==2.4.1                    # 地理编码

# 文本处理
jieba==0.42.1                   # 中文分词
pypinyin==0.49.0                # 拼音转换

# 数据分析
pandas==2.1.4                   # 数据处理
numpy==1.26.2                   # 数值计算
networkx==3.2.1                 # 网络分析

# 可视化
plotly==5.18.0                  # 交互式图表
matplotlib==3.8.2               # 静态图表

# 工具库
python-dateutil==2.8.2          # 日期处理
```

## 🚀 运行方式

```bash
# 安装依赖
pip install -r requirements_flask.txt

# 运行开发服务器
python app_flask.py

# 或使用Flask CLI
flask run --port 3000
```

## 📝 数据迁移计划

### 1. 数据库初始化
- 创建SQLite数据库
- 导入CSV数据到数据库
- 建立索引

### 2. 向量数据库初始化
- 读取所有JSON文件
- 提取文本内容
- 生成向量嵌入
- 存储到Chroma

### 3. 地理位置数据
- 收集仙人相关地理位置
- 地理编码转换为坐标
- 创建位置数据文件

## ⚡ 性能优化建议

1. **缓存策略**
   - 使用Redis缓存API响应
   - 缓存地图数据
   - 缓存分析结果

2. **异步处理**
   - 使用Celery处理耗时任务
   - 异步生成向量嵌入

3. **数据库优化**
   - 建立合适的索引
   - 使用连接池

## 🔒 安全考虑

1. **API Key管理**
   - 使用环境变量
   - 不在代码中硬编码

2. **输入验证**
   - 验证所有API输入
   - 防止SQL注入
   - 防止XSS攻击

3. **CORS配置**
   - 根据需要限制允许的域名

## 📊 日志记录

1. **日志记录**
   - 使用Python logging
   - 记录API调用
   - 记录错误信息

## 🎯 下一步行动

1. ✅ 创建Flask项目结构
2. ✅ 迁移现有API功能
3. ⏳ 实现RAG功能
4. ⏳ 实现GIS功能
5. ⏳ 实现词汇共现分析
6. ⏳ 测试和优化

