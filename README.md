# 寻仙唐迹 - 唐代游仙诗仙人意象数字人文馆

一个展示唐代游仙诗中仙人意象的数字人文网站项目，包含数字展厅、仙人图谱、仙卷创作等功能。

## 📁 项目结构

```
trys/
├── 📄 前端页面
│   ├── index.html              # 首页
│   ├── exhibition_all.html     # 数字展厅（全部）
│   ├── exhibition_chu.html     # 数字展厅（初唐）
│   ├── exhibition_sheng.html   # 数字展厅（盛唐）
│   ├── exhibition_zhong.html   # 数字展厅（中唐）
│   ├── exhibition_wan.html     # 数字展厅（晚唐）
│   ├── immortals.html          # 仙人图谱
│   ├── create.html             # 仙卷创作
│   ├── us.html                 # 关于我们
│   └── references.html         # 资源引用说明
│
├── 🎨 静态资源
│   ├── images/                 # 图片资源
│   │   ├── immortals/          # 仙人图片（100+张）
│   │   ├── members/            # 团队成员照片
│   │   ├── map/                # 地图相关图片
│   │   ├── index_bg.jpg        # 首页背景图
│   │   ├── index_*.png         # 首页功能图标
│   │   └── logo.png            # 网站Logo
│   │
│   └── json/                   # JSON数据文件
│       ├── 全部仙人.json
│       ├── 個性鮮明的天界眾仙.json
│       ├── 凡人成仙者.json
│       ├── 女性.json
│       ├── 男性.json
│       ├── 類型化仙人.json
│       └── map.json            # 地图数据
│
├── 💾 数据库文件
│   └── database/
│       ├── 仙人意象汇总/       # CSV格式的仙人数据
│       │   ├── all_immortals.csv
│       │   ├── chu_immortals.csv
│       │   ├── sheng_immortals.csv
│       │   ├── zhong_immortals.csv
│       │   └── wan_immortals.csv
│       │
│       └── 全唐诗中的游仙诗/   # 游仙诗数据
│           ├── all.json
│           ├── chu_updated.json
│           ├── sheng_updated.json
│           ├── zhong_updated.json
│           └── wan_updated.json
│
├── ⚙️ 后端服务
│   ├── app_flask.py            # Flask服务器主文件
│   └── requirements_flask.txt  # Python依赖配置
│
├── 🧩 组件文件
│   └── components.js           # 公共组件（导航栏、页脚、样式、i18n等）
│
├── 📚 文档
│   ├── README.md               # 项目说明（本文件）
│   └── PROJECT_STRUCTURE.md    # 项目结构详细说明
│
└── 🔧 配置文件
    ├── .gitignore              # Git忽略文件配置
    └── .env                    # 环境变量（需自行创建，不提交到Git）
```

## 📖 功能模块

### 1. 首页 (index.html)
- 项目介绍和视觉展示
- 功能导航入口
- 统计数据展示

### 2. 数字展厅 (exhibition_*.html)
- 按朝代分类展示游仙诗
- 支持初唐、盛唐、中唐、晚唐四个时期
- 交互式诗歌浏览和搜索
- 数据可视化展示

### 3. 仙人图谱 (immortals.html)
- 100+ 仙人形象展示
- 仙人分类浏览（男性、女性、类型化等）
- 详细信息查看
- 图片和文字介绍

### 4. 仙卷创作 (create.html)
- AI辅助诗歌创作
- 基于DeepSeek API生成五言绝句
- 可选配豆包API生成仙境配图
- 个性化测试匹配唐代诗人

### 5. 关于我们 (us.html)
- 项目介绍
- 团队成员信息
- 联系方式

### 6. 资源引用说明 (references.html)
- 数据集说明
- 参考文献
- 图像资源引用
- 版权声明

## 🛠️ 技术栈

### 前端
- **HTML5** + **CSS3**
- **Tailwind CSS** - 样式框架（配置统一在 `components.js` 中管理）
- **Font Awesome** - 图标库
- **原生JavaScript** - 交互逻辑
- **ECharts.js** - 数据可视化（数字展厅页面）
- **Leaflet** - 地图可视化（GIS分析功能）

### 后端
- **Python 3.x** - 运行环境
- **Flask** - Web框架
- **Flask-CORS** - 跨域支持
- **python-dotenv** - 环境变量管理
- **requests** - HTTP请求库

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
  - 国际化支持（i18n系统，支持中英文切换）
  - 页面初始化函数（`initPage()`）

- **统一配置管理**：
  - Tailwind 自定义主题配置统一在 `components.js` 中
  - 所有页面共享相同的样式和组件
  - 修改配置只需更新 `components.js` 一处

### 后端架构

项目使用 Flask 作为后端框架，提供以下功能：

- ✅ **AI诗歌生成** - 使用DeepSeek API生成五言绝句
  - 端点：`POST /api/deepseek-poem`
  - 支持自定义prompt
  - 自动处理诗句格式

- ✅ **AI图像生成** - 使用豆包API生成仙境配图
  - 端点：`POST /api/doubao-image`
  - 支持base64和URL格式返回
  - 超时和错误处理

- ✅ **健康检查** - 检查服务状态和配置
  - 端点：`GET /api/health`
  - 显示API配置状态

- ⏳ **GIS功能** - 使用Folium展示仙人地理位置（开发中）
- ⏳ **词汇共现分析** - 使用jieba和networkx进行文本分析（开发中）

## 🚀 快速开始

### 环境要求

- Python 3.7+
- pip

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd trys
   ```

2. **安装Python依赖**
   ```bash
   pip install -r requirements_flask.txt
   ```

3. **配置环境变量**
   
   创建 `.env` 文件（参考 `.env.example`，如果存在）：
   ```env
   # 服务器配置
   PORT=3000
   NODE_ENV=development
   
   # DeepSeek API配置
   DEEPSEEK_API_KEY=your_deepseek_api_key
   
   # 豆包API配置
   DOUBAO_API_KEY=your_doubao_api_key
   DOUBAO_API_URL=https://ark.cn-shanghai.volces.com/api/v3/images/generations
   DOUBAO_MODEL=doubao-seedream-3-0-t2i-250415
   DOUBAO_AUTH_METHOD=bearer
   ```

4. **启动服务器**
   ```bash
   python app_flask.py
   ```

5. **访问网站**
   
   打开浏览器访问：`http://localhost:3000`

### API端点

- `POST /api/deepseek-poem` - 生成诗句
  ```json
  {
    "prompt": "描述你想要的诗歌主题"
  }
  ```

- `POST /api/doubao-image` - 生成图片
  ```json
  {
    "prompt": "描述你想要的图片内容"
  }
  ```

- `GET /api/health` - 健康检查
  - 返回服务状态和配置信息

## 🎨 主题定制

项目支持三种主题模式：

1. **默认模式** - 浅色背景，适合日常浏览
2. **暗色模式** - 深色背景，适合夜间使用
3. **护眼模式** - 暖色调背景，减少视觉疲劳

主题切换功能已集成到导航栏，用户选择会自动保存到本地存储。

## 🌐 国际化支持

项目支持中英文双语切换：

- 所有页面内容支持中英文切换
- 语言设置保存在本地存储
- 切换语言后自动更新页面内容
- 支持动态翻译和拼音转换

## 🔒 安全注意事项

1. **API Key安全**
   - 永远不要将 `.env` 文件提交到Git仓库
   - 定期轮换API Key
   - 使用环境变量管理敏感信息

2. **CORS配置**
   - 生产环境应限制CORS来源
   - 修改 `app_flask.py` 中的CORS配置

3. **文件权限**
   - 确保敏感文件权限设置正确
   - 限制对数据库文件的直接访问

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

### 环境变量未加载
1. 确认 `.env` 文件存在于项目根目录
2. 检查 `.env` 文件格式是否正确
3. 确认 `python-dotenv` 已安装

### Tailwind 配置不生效
1. 确保 `components.js` 在 Tailwind CSS 加载之后引入
2. 检查浏览器控制台是否有错误
3. 确认 `initTailwindConfig()` 函数已执行

## 📄 许可证

MIT License

## 📧 联系方式

- 项目地址：[GitHub Repository]
- 邮箱：zxy812120@163.com
- 机构：中国·香港·香港理工大学

---

**注意**：本项目仅供学术研究与文化传播使用。
