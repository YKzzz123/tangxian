# 寻仙唐迹 - 唐代游仙诗仙人意象数字人文馆

一个展示唐代游仙诗中仙人意象的数字人文网站项目，包含数字展厅、仙镜图谱、仙卷创作等功能。

## 📁 项目结构

```
trys/
├── 📄 前端页面
│   ├── index.html              # 首页
│   ├── exhibition_all.html     # 数字展厅（全部）
│   ├── exhibition_chu.html     # 数字展厅（初唐）
│   ├── exhibition_sheng.html   # 数字展厅（盛唐）
│   ├── exhibition_wan.html     # 数字展厅（晚唐）
│   ├── exhibition_zhong.html   # 数字展厅（中唐）
│   ├── immortals.html          # 仙镜图谱
│   ├── create.html             # 仙卷创作
│   └── us.html                 # 关于我们
│
├── 🎨 静态资源
│   ├── images/                 # 图片资源
│   │   ├── immortals/          # 仙人图片（100+张）
│   │   ├── members/            # 团队成员照片
│   │   ├── index_bg.jpg        # 首页背景图
│   │   └── index_*.png         # 首页功能图标
│   │
│   └── json/                   # JSON数据文件
│       ├── 全部仙人.json
│       ├── 個性鮮明的天界眾仙.json
│       ├── 凡人成仙者.json
│       ├── 女性.json
│       ├── 男性.json
│       └── 類型化仙人.json
│
├── 💾 数据库文件
│   └── database/
│       ├── 仙人意象汇总/       # CSV格式的仙人数据
│       │   ├── all_immortals.csv
│       │   ├── chu_immortals.csv
│       │   ├── sheng_immortals.csv
│       │   ├── wan_immortals.csv
│       │   └── zhong_immortals.csv
│       │
│       ├── 全唐诗/             # 全唐诗数据（900个JSON文件）
│       │   └── [900个JSON文件]
│       │
│       └── 全唐诗中的游仙诗/   # 游仙诗数据
│           ├── all.json
│           ├── chu_updated.json
│           ├── sheng_updated.json
│           ├── wan_updated.json
│           └── zhong_updated.json
│
├── ⚙️ 后端服务
│   ├── app_flask.py            # Flask服务器主文件
│   └── requirements_flask.txt  # Python依赖配置
│
├── 🧩 组件文件
│   └── components.js           # 公共组件（导航栏、页脚、样式、Tailwind配置等）
│
├── 📚 文档
│   ├── README.md               # 项目说明（本文件）
│   ├── README_API.md           # API配置指南
│   ├── MIGRATION_TO_FLASK.md   # Flask迁移方案
│   ├── FLASK_IMPLEMENTATION_PLAN.md  # Flask实现计划
│   └── MIGRATION_SUMMARY.md    # 迁移总结
│
└── 🔧 配置文件
    ├── .gitignore              # Git忽略文件配置
    └── .env                    # 环境变量（需自行创建，不提交到Git）
```


## 📖 功能模块

### 1. 首页 (index.html)
- 项目介绍
- 功能导航
- 视觉展示

### 2. 数字展厅 (exhibition_*.html)
- 按朝代分类展示游仙诗
- 支持初唐、盛唐、中唐、晚唐四个时期
- 交互式诗歌浏览

### 3. 仙镜图谱 (immortals.html)
- 仙人形象展示
- 仙人分类浏览
- 详细信息查看

### 4. 仙卷创作 (create.html)
- AI辅助诗歌创作
- 基于DeepSeek API生成五言绝句
- 可选配豆包API生成配图

### 5. 关于我们 (us.html)
- 项目介绍
- 团队成员

## 🛠️ 技术栈

### 前端
- **HTML5** + **CSS3**
- **Tailwind CSS** - 样式框架（配置统一在 `components.js` 中管理）
- **Font Awesome** - 图标库
- **原生JavaScript** - 交互逻辑
- **ECharts.js** - 数据可视化（数字展厅页面）
- **Leaflet** - 地图可视化（GIS分析功能）

### 后端
- **Python** - 运行环境
- **Flask** - Web框架
- **Flask-CORS** - 跨域支持
- **python-dotenv** - 环境变量管理

### 外部API
- **DeepSeek API** - AI诗歌生成
- **豆包API** - AI图像生成（可选）

## 🔄 技术架构

### 前端架构

项目采用组件化设计，公共组件统一管理：

- **components.js** - 核心组件文件，包含：
  - 导航栏组件（`navbarComponent`）
  - 页脚组件（`footerComponent`）
  - 背景效果组件（`backgroundComponent`）
  - 公共样式组件（`styleComponent`）
  - Tailwind 配置（`initTailwindConfig()`）
  - 主题切换功能（支持默认、暗色、护眼三种模式）
  - 页面初始化函数（`initPage()`）

- **统一配置管理**：
  - Tailwind 自定义主题配置统一在 `components.js` 中
  - 所有页面共享相同的样式和组件
  - 修改配置只需更新 `components.js` 一处

### 后端架构

项目使用 Flask 作为后端框架，支持以下功能：

- ✅ **AI诗歌生成** - 使用DeepSeek API生成五言绝句
- ✅ **AI图像生成** - 使用豆包API生成仙境配图
- ⏳ **GIS功能** - 使用Folium展示仙人地理位置（开发中）
- ⏳ **词汇共现分析** - 使用jieba和networkx进行文本分析（开发中）

## 🔒 安全注意事项

1. **API Key安全**
   - 永远不要将 `.env` 文件提交到Git仓库
   - 定期轮换API Key

2. **CORS配置**
   - 修改 `app_flask.py` 中的CORS配置

3. **文件权限**
   - 确保敏感文件权限设置正确
   - 限制对数据库文件的直接访问

## 🚀 快速开始

### API端点

- `POST /api/deepseek-poem` - 生成诗句
- `POST /api/doubao-image` - 生成图片
- `GET /api/health` - 健康检查

详细API文档请参考 [README_API.md](./README_API.md)

## 🎨 主题定制

项目支持三种主题模式：

1. **默认模式** - 浅色背景，适合日常浏览
2. **暗色模式** - 深色背景，适合夜间使用
3. **护眼模式** - 暖色调背景，减少视觉疲劳

主题切换功能已集成到导航栏，用户选择会自动保存到本地存储。


## 🐛 常见问题

### 端口被占用
修改 `.env` 文件中的 `PORT` 值，或使用其他可用端口。

### API调用失败
1. 检查 `.env` 文件中的API Key是否正确
2. 确认网络连接正常
3. 查看服务器日志获取详细错误信息
4. 访问 `/api/health` 检查配置状态

### 图片无法加载
1. 检查图片路径是否正确
2. 确认图片文件存在
3. 检查文件权限

### Tailwind 配置不生效
1. 确保 `components.js` 在 Tailwind CSS 加载之后引入
2. 检查浏览器控制台是否有错误
3. 确认 `initTailwindConfig()` 函数已执行

## 📄 许可证

MIT License


