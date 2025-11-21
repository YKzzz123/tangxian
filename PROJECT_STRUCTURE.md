# 项目结构详细说明

本文档详细说明"寻仙唐迹"项目的文件结构和各目录用途。

## 📂 目录结构

```
trys/
│
├── 📄 HTML页面文件
│   ├── index.html              # 首页 - 项目介绍和导航入口
│   ├── exhibition_all.html     # 数字展厅 - 全部游仙诗展示
│   ├── exhibition_chu.html     # 数字展厅 - 初唐时期
│   ├── exhibition_sheng.html   # 数字展厅 - 盛唐时期
│   ├── exhibition_wan.html     # 数字展厅 - 晚唐时期
│   ├── exhibition_zhong.html   # 数字展厅 - 中唐时期
│   ├── immortals.html          # 仙镜图谱 - 仙人形象展示
│   ├── create.html             # 仙卷创作 - AI辅助创作页面
│   └── us.html                 # 关于我们 - 项目介绍和团队
│
├── 🎨 静态资源目录
│   ├── images/                 # 图片资源目录
│   │   ├── immortals/          # 仙人图片（100+张）
│   │   │   ├── *.jpg           # 各仙人形象图片
│   │   │   └── index_bg.png    # 仙人图谱背景图
│   │   ├── members/            # 团队成员照片（7张）
│   │   ├── index_bg.jpg        # 首页背景图
│   │   ├── index_仙卷创作.png  # 功能图标
│   │   ├── index_仙境图谱.png  # 功能图标
│   │   └── index_数字展厅.png  # 功能图标
│   │
│   └── json/                   # JSON数据文件目录
│       ├── 全部仙人.json       # 所有仙人数据
│       ├── 個性鮮明的天界眾仙.json
│       ├── 凡人成仙者.json
│       ├── 女性.json           # 女性仙人数据
│       ├── 男性.json           # 男性仙人数据
│       └── 類型化仙人.json
│
├── 💾 数据库目录
│   └── database/
│       ├── 仙人意象汇总/       # CSV格式的仙人数据
│       │   ├── all_immortals.csv      # 全部仙人
│       │   ├── chu_immortals.csv      # 初唐时期
│       │   ├── sheng_immortals.csv    # 盛唐时期
│       │   ├── wan_immortals.csv      # 晚唐时期
│       │   └── zhong_immortals.csv    # 中唐时期
│       │
│       ├── 全唐诗/             # 全唐诗数据（900个JSON文件）
│       │   └── [900个JSON文件] # 每个文件包含一首诗的数据
│       │
│       └── 全唐诗中的游仙诗/   # 筛选出的游仙诗数据
│           ├── all.json        # 全部游仙诗
│           ├── chu_updated.json    # 初唐游仙诗
│           ├── sheng_updated.json  # 盛唐游仙诗
│           ├── wan_updated.json    # 晚唐游仙诗
│           └── zhong_updated.json  # 中唐游仙诗
│
├── ⚙️ 后端服务文件
│   ├── app_flask.py            # Flask服务器主文件
│   │   ├── DeepSeek API代理    # /api/deepseek-poem
│   │   ├── 豆包API代理         # /api/doubao-image
│   │   ├── 健康检查端点        # /api/health
│   │   └── 新功能API端点       # /api/assistant, /api/gis, /api/analysis
│   │
│   └── requirements_flask.txt  # Python依赖配置
│       ├── Flask核心           # Flask, Flask-CORS
│       ├── HTTP请求            # requests
│       └── 新功能依赖          # langchain, folium, jieba等（可选）
│
├── 🧩 组件和工具文件
│   ├── components.js           # 公共组件
│   │   ├── 导航栏组件          # navbarComponent
│   │   ├── 样式组件            # styleComponent
│   │   └── 其他公共组件
│   │
│   └── [其他工具文件]
│
├── 📚 文档文件
│   ├── README.md               # 项目主说明文档
│   ├── README_API.md           # API配置详细指南
│   ├── MIGRATION_TO_FLASK.md   # Flask迁移方案
│   ├── FLASK_IMPLEMENTATION_PLAN.md  # Flask实现计划
│   ├── MIGRATION_SUMMARY.md    # 迁移总结
│   └── PROJECT_STRUCTURE.md    # 本文件 - 项目结构说明
│
└── 🔧 配置文件
    └── .gitignore              # Git忽略文件配置
        ├── .env文件
        ├── 日志文件
        └── IDE配置
```

## 📝 文件说明

### 前端页面

| 文件 | 说明 | 主要功能 |
|------|------|----------|
| `index.html` | 首页 | 项目介绍、功能导航、视觉展示 |
| `exhibition_*.html` | 数字展厅 | 按朝代展示游仙诗，支持浏览和搜索 |
| `immortals.html` | 仙镜图谱 | 展示仙人形象，支持分类浏览 |
| `create.html` | 仙卷创作 | AI辅助创作五言绝句，可选配图 |
| `us.html` | 关于我们 | 项目介绍、团队成员信息 |

### 静态资源

#### images/ 目录
- **immortals/**: 包含100+张仙人形象图片，用于仙镜图谱展示
- **members/**: 团队成员照片
- **index_*.png/jpg**: 首页使用的背景图和功能图标

#### json/ 目录
- 包含各种分类的仙人数据JSON文件

### 数据库文件

#### database/ 目录
- **仙人意象汇总/**: CSV格式的仙人数据，按朝代分类
- **全唐诗/**: 完整的全唐诗数据，共900个JSON文件
- **全唐诗中的游仙诗/**: 筛选出的游仙诗数据，按朝代分类

### 后端服务

#### app_flask.py
Flask服务器，提供以下功能：
- 静态文件服务
- DeepSeek API代理（生成诗句）
- 豆包API代理（生成图片）
- 健康检查端点
- CORS支持
- 新功能API端点（RAG、GIS、共现分析）

#### requirements_flask.txt
Python依赖和配置：
- **Flask核心**: Flask, Flask-CORS, python-dotenv
- **HTTP请求**: requests
- **新功能依赖**: langchain, folium, jieba等（可选）

### 组件文件

#### components.js
包含可复用的前端组件：
- 导航栏组件
- 样式组件
- 主题切换功能
- 其他公共UI组件

## 🔄 数据流

```
用户访问
    ↓
HTML页面 (index.html等)
    ↓
加载静态资源 (images/, json/)
    ↓
调用后端API (app_flask.py)
    ↓
DeepSeek/豆包API
    ↓
返回结果给前端
```

## 📦 依赖关系

### 前端依赖（CDN）
- Tailwind CSS - 样式框架
- Font Awesome - 图标库
- Google Fonts - 中文字体

### 后端依赖（pip）
- Flask - Web框架
- Flask-CORS - 跨域支持
- python-dotenv - 环境变量管理
- requests - HTTP请求库

## 🗂️ 文件大小参考

- **HTML文件**: 每个约 10-50 KB
- **图片文件**: 每张约 50-500 KB（总计约 50-100 MB）
- **JSON数据**: 每个文件约 1-10 MB
- **数据库文件**: 总计约 100-500 MB（包含900个JSON文件）

## 🔍 查找文件指南

### 查找特定功能
- **首页相关**: `index.html`, `images/index_*.png`
- **展厅相关**: `exhibition_*.html`, `database/全唐诗中的游仙诗/`
- **仙人相关**: `immortals.html`, `images/immortals/`, `json/*.json`
- **创作相关**: `create.html`, `app_flask.py` (API端点)
- **API相关**: `app_flask.py`, `README_API.md`

### 修改样式
- 全局样式: `components.js` (styleComponent)
- 页面样式: 各HTML文件中的 `<style>` 标签或Tailwind类

### 添加新功能
1. 创建新的HTML页面
2. 在 `components.js` 中添加组件（如需要）
3. 在 `app_flask.py` 中添加API端点（如需要）
4. 更新导航栏链接

## ⚠️ 注意事项

1. **不要删除的文件**:
   - `database/` 目录（包含所有数据）
   - `images/` 目录（包含所有图片资源）
   - `app_flask.py`（后端服务必需）
   - `requirements_flask.txt`（依赖配置必需）

2. **需要配置的文件**:
   - `.env`（环境变量，需自行创建）

3. **Git忽略的文件**:
   - `.env`（包含敏感信息）
   - 日志文件

4. **大文件处理**:
   - `database/全唐诗/` 包含900个文件，可能较大
   - 考虑使用Git LFS或单独管理

---

**最后更新**: 2024年

