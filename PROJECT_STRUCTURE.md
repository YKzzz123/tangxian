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
│   ├── exhibition_zhong.html   # 数字展厅 - 中唐时期
│   ├── exhibition_wan.html     # 数字展厅 - 晚唐时期
│   ├── immortals.html          # 仙人图谱 - 仙人形象展示
│   ├── create.html             # 仙卷创作 - AI辅助创作页面
│   ├── us.html                 # 关于我们 - 项目介绍和团队
│   └── references.html         # 资源引用说明 - 数据集和参考文献
│
├── 🎨 静态资源目录
│   ├── images/                 # 图片资源目录
│   │   ├── immortals/          # 仙人图片（100+张）
│   │   │   ├── *.jpg           # 各仙人形象图片
│   │   │   └── index_bg.png    # 仙人图谱背景图
│   │   ├── members/            # 团队成员照片（7张）
│   │   ├── map/                # 地图相关图片
│   │   │   ├── ancient_map.jpg # 古代地图
│   │   │   ├── core_mount.png  # 核心山脉
│   │   │   ├── dao_mount.png   # 道教山脉
│   │   │   ├── green_mount.png # 绿色山脉
│   │   │   ├── sea.png         # 海洋
│   │   │   └── sky.png         # 天空
│   │   ├── index_bg.jpg        # 首页背景图
│   │   ├── index_仙卷创作.png  # 功能图标
│   │   ├── index_仙境图谱.png  # 功能图标
│   │   ├── index_数字展厅.png  # 功能图标
│   │   └── logo.png            # 网站Logo
│   │
│   └── json/                   # JSON数据文件目录
│       ├── 全部仙人.json       # 所有仙人数据
│       ├── 個性鮮明的天界眾仙.json
│       ├── 凡人成仙者.json
│       ├── 女性.json           # 女性仙人数据
│       ├── 男性.json           # 男性仙人数据
│       ├── 類型化仙人.json
│       └── map.json            # 地图数据
│
├── 💾 数据库目录
│   └── database/
│       ├── 仙人意象汇总/       # CSV格式的仙人数据
│       │   ├── all_immortals.csv      # 全部仙人
│       │   ├── chu_immortals.csv      # 初唐时期
│       │   ├── sheng_immortals.csv    # 盛唐时期
│       │   ├── zhong_immortals.csv    # 中唐时期
│       │   └── wan_immortals.csv      # 晚唐时期
│       │
│       └── 全唐诗中的游仙诗/   # 筛选出的游仙诗数据
│           ├── all.json        # 全部游仙诗
│           ├── chu_updated.json    # 初唐游仙诗
│           ├── sheng_updated.json  # 盛唐游仙诗
│           ├── zhong_updated.json  # 中唐游仙诗
│           └── wan_updated.json    # 晚唐游仙诗
│
├── ⚙️ 后端服务文件
│   ├── app_flask.py            # Flask服务器主文件
│   │   ├── DeepSeek API代理    # /api/deepseek-poem
│   │   ├── 豆包API代理         # /api/doubao-image
│   │   ├── 健康检查端点        # /api/health
│   │   ├── 静态文件服务        # 所有HTML和静态资源
│   │   └── CORS配置            # 跨域资源共享
│   │
│   └── requirements_flask.txt  # Python依赖配置
│       ├── Flask核心           # Flask, Flask-CORS
│       ├── HTTP请求            # requests
│       ├── 环境变量管理        # python-dotenv
│       └── 新功能依赖          # 可选（已注释）
│
├── 🧩 组件和工具文件
│   └── components.js           # 公共组件和配置
│       ├── 导航栏组件          # navbarComponent
│       ├── 页脚组件            # footerComponent
│       ├── 背景效果组件        # backgroundComponent
│       ├── 样式组件            # styleComponent
│       ├── Tailwind配置        # initTailwindConfig()
│       ├── 主题切换功能        # 默认/暗色/护眼模式
│       ├── 国际化系统          # i18n翻译系统
│       └── 页面初始化          # initPage()
│
├── 📚 文档文件
│   ├── README.md               # 项目主说明文档
│   └── PROJECT_STRUCTURE.md    # 本文件 - 项目结构说明
│
└── 🔧 配置文件
    ├── .gitignore              # Git忽略文件配置
    │   ├── .env文件
    │   ├── 日志文件
    │   └── IDE配置
    └── .env                    # 环境变量（需自行创建）
        ├── API密钥配置
        ├── 服务器配置
        └── 其他环境变量
```

## 📝 文件说明

### 前端页面

| 文件 | 说明 | 主要功能 |
|------|------|----------|
| `index.html` | 首页 | 项目介绍、功能导航、视觉展示、统计数据 |
| `exhibition_*.html` | 数字展厅 | 按朝代展示游仙诗，支持浏览、搜索、数据可视化 |
| `immortals.html` | 仙人图谱 | 展示100+仙人形象，支持分类浏览、详细信息查看 |
| `create.html` | 仙卷创作 | AI辅助创作五言绝句，可选配图，个性化测试 |
| `us.html` | 关于我们 | 项目介绍、团队成员信息、联系方式 |
| `references.html` | 资源引用说明 | 数据集说明、参考文献、图像资源引用、版权声明 |

### 静态资源

#### images/ 目录

- **immortals/**: 包含100+张仙人形象图片，用于仙人图谱展示
  - 格式：JPG/PNG
  - 命名：使用拼音或英文名称
  - 用途：仙人详情页展示

- **members/**: 团队成员照片
  - 格式：JPG
  - 数量：7张
  - 用途：关于我们页面

- **map/**: 地图相关图片资源
  - `ancient_map.jpg` - 古代地图底图
  - `core_mount.png` - 核心山脉图标
  - `dao_mount.png` - 道教山脉图标
  - `green_mount.png` - 绿色山脉图标
  - `sea.png` - 海洋图标
  - `sky.png` - 天空图标
  - 用途：GIS地图功能（开发中）

- **其他图片**:
  - `index_bg.jpg` - 首页背景图
  - `index_*.png` - 首页功能图标
  - `logo.png` - 网站Logo

#### json/ 目录

包含各种分类的仙人数据JSON文件：
- `全部仙人.json` - 所有仙人数据
- `個性鮮明的天界眾仙.json` - 个性鲜明的天界众仙
- `凡人成仙者.json` - 凡人成仙者数据
- `女性.json` - 女性仙人数据
- `男性.json` - 男性仙人数据
- `類型化仙人.json` - 类型化仙人数据
- `map.json` - 地图位置数据

### 数据库文件

#### database/ 目录

- **仙人意象汇总/**: CSV格式的仙人数据，按朝代分类
  - 包含5个CSV文件，分别对应全部、初唐、盛唐、中唐、晚唐
  - 字段包括：仙人名称、出现次数、相关诗句等

- **全唐诗中的游仙诗/**: 筛选出的游仙诗数据，按朝代分类
  - 包含5个JSON文件
  - 每个文件包含该时期的游仙诗数据
  - 数据格式：JSON数组，每首诗包含标题、作者、内容等信息

### 后端服务

#### app_flask.py

Flask服务器，提供以下功能：

**API端点**：
- `POST /api/deepseek-poem` - DeepSeek API代理，生成五言绝句
  - 请求体：`{ "prompt": "描述" }`
  - 返回：生成的诗句和元数据

- `POST /api/doubao-image` - 豆包API代理，生成仙境配图
  - 请求体：`{ "prompt": "描述" }`
  - 返回：base64编码的图片或图片URL

- `GET /api/health` - 健康检查端点
  - 返回：服务状态、API配置状态

**静态文件服务**：
- 提供所有HTML页面的访问
- 提供静态资源（images、json等）的访问
- 支持SPA路由

**配置**：
- CORS跨域支持
- 环境变量加载（.env文件）
- 错误处理
- 日志记录

#### requirements_flask.txt

Python依赖和配置：

**必需依赖**：
- `Flask==3.0.0` - Web框架
- `Flask-CORS==4.0.0` - 跨域支持
- `python-dotenv==1.0.0` - 环境变量管理
- `requests==2.31.0` - HTTP请求库

**可选依赖**（已注释，根据需要启用）：
- RAG相关：langchain, chromadb, sentence-transformers
- 数据库：SQLAlchemy
- GIS相关：folium, geopandas, geopy
- 文本处理：jieba, pandas, numpy, networkx
- 可视化：plotly, matplotlib

### 组件文件

#### components.js

包含可复用的前端组件和配置：

**组件**：
- `navbarComponent` - 导航栏组件
  - 响应式设计（桌面端/移动端）
  - 语言切换按钮
  - 主题切换按钮
  - 移动端菜单

- `footerComponent` - 页脚组件
  - 快速链接
  - 资源引用链接
  - 联系方式
  - 版权信息

- `backgroundComponent` - 背景效果组件
- `styleComponent` - 公共样式组件

**功能**：
- `initTailwindConfig()` - Tailwind CSS自定义配置
  - 自定义颜色主题
  - 自定义字体
  - 响应式断点

- 主题切换系统
  - 默认模式
  - 暗色模式
  - 护眼模式
  - 本地存储保存用户选择

- 国际化系统（i18n）
  - 支持中英文切换
  - 翻译数据管理
  - 动态内容翻译
  - 人名拼音转换

- `initPage(pageName)` - 页面初始化函数
  - 应用主题
  - 应用语言
  - 初始化导航栏状态
  - 绑定事件监听器

## 🔄 数据流

```
用户访问
    ↓
HTML页面 (index.html等)
    ↓
加载静态资源 (images/, json/)
    ↓
加载公共组件 (components.js)
    ↓
调用后端API (app_flask.py)
    ↓
DeepSeek/豆包API
    ↓
返回结果给前端
    ↓
渲染页面内容
```

## 📦 依赖关系

### 前端依赖（CDN）

- **Tailwind CSS** - 样式框架
  - 通过CDN加载
  - 自定义配置在 `components.js` 中

- **Font Awesome** - 图标库
  - 版本：4.7.0
  - 用于导航栏和功能图标

- **Google Fonts** - 中文字体
  - Ma Shan Zheng（书法字体）
  - Noto Serif SC（正文字体）

- **ECharts.js** - 数据可视化
  - 用于数字展厅的数据图表

- **Leaflet** - 地图可视化
  - 用于GIS分析功能

### 后端依赖（pip）

- **Flask** - Web框架
- **Flask-CORS** - 跨域支持
- **python-dotenv** - 环境变量管理
- **requests** - HTTP请求库

## 🔧 环境变量配置

创建 `.env` 文件（参考以下模板）：

```env
# 服务器配置
PORT=3000
NODE_ENV=development

# DeepSeek API配置
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# 豆包API配置
DOUBAO_API_KEY=your_doubao_api_key_here
DOUBAO_API_URL=https://ark.cn-shanghai.volces.com/api/v3/images/generations
DOUBAO_MODEL=doubao-seedream-3-0-t2i-250415
DOUBAO_AUTH_METHOD=bearer
```

## ⚠️ 注意事项

1. **不要删除的文件**:
   - `database/` 目录（包含所有数据）
   - `images/` 目录（包含所有图片资源）
   - `app_flask.py`（后端服务必需）
   - `requirements_flask.txt`（依赖配置必需）
   - `components.js`（前端组件必需）

2. **需要配置的文件**:
   - `.env`（环境变量，需自行创建）
   - 确保API密钥正确配置

3. **Git忽略的文件**:
   - `.env`（包含敏感信息）
   - 日志文件
   - IDE配置文件

4. **开发建议**:
   - 修改样式时，优先更新 `components.js` 中的配置
   - 添加新页面时，使用 `initPage()` 函数初始化
   - API调用使用统一的错误处理
   - 遵循现有的代码风格和命名规范

## 📊 数据统计

- **HTML页面**: 10个
- **仙人图片**: 100+张
- **团队成员照片**: 7张
- **JSON数据文件**: 7个
- **CSV数据文件**: 5个
- **游仙诗数据文件**: 5个

---

**最后更新**: 2025年1月
