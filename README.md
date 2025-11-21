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
│   └── components.js           # 公共组件（导航栏、样式等）
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

## 🚀 快速开始

### 环境要求

- **Python**: >= 3.8
- **pip**: Python包管理器

### 安装步骤

1. **克隆项目**（如果使用Git）
   ```bash
   git clone <repository-url>
   cd trys
   ```

2. **安装Python依赖**
   ```bash
   pip install -r requirements_flask.txt
   ```

3. **配置环境变量**
   
   在项目根目录创建 `.env` 文件：
   ```env
   # DeepSeek API配置（用于生成诗句）
   DEEPSEEK_API_KEY=sk-your-actual-api-key-here
   
   # 豆包API配置（用于生成图片，可选）
   DOUBAO_API_KEY=your-doubao-api-key-here
   DOUBAO_API_URL=https://ark.cn-beijing.volces.com/api/v3/images/generations
   DOUBAO_MODEL=doubao-seedream-4-0-250828
   DOUBAO_AUTH_METHOD=bearer
   
   # 服务器配置
   PORT=3000
   ```

   > 📝 **获取API Key**：
   > - DeepSeek API: https://platform.deepseek.com/
   > - 豆包API: https://www.volcengine.com/
   > 
   > 详细配置说明请参考 [README_API.md](./README_API.md)

4. **启动Flask服务器**
   ```bash
   # 开发模式
   python app_flask.py
   
   # 或使用Flask CLI
   flask run --port 3000
   ```

5. **访问网站**
   
   打开浏览器访问：`http://localhost:3000`

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
- **Tailwind CSS** - 样式框架
- **Font Awesome** - 图标库
- **原生JavaScript** - 交互逻辑

### 后端
- **Python** - 运行环境
- **Flask** - Web框架
- **Flask-CORS** - 跨域支持
- **python-dotenv** - 环境变量管理

### 外部API
- **DeepSeek API** - AI诗歌生成
- **豆包API** - AI图像生成（可选）

## 🔄 技术架构

项目使用 Flask 作为后端框架，支持以下功能：

- ✅ **AI诗歌生成** - 使用DeepSeek API生成五言绝句
- ✅ **AI图像生成** - 使用豆包API生成仙境配图
- ⏳ **RAG增强搜索** - 使用LangChain和向量数据库（开发中）
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

## 📝 开发说明

### 添加新页面

1. 在根目录创建新的HTML文件
2. 在 `components.js` 中引入导航栏组件
3. 更新导航栏链接

### 修改样式

项目使用Tailwind CSS，可以在HTML文件中直接使用Tailwind类名，或在 `<script>` 标签中配置自定义主题。

### API端点

- `POST /api/deepseek-poem` - 生成诗句
- `POST /api/doubao-image` - 生成图片
- `GET /api/health` - 健康检查

详细API文档请参考 [README_API.md](./README_API.md)

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

## 📄 许可证

MIT License

## 👥 贡献

欢迎提交Issue和Pull Request！

## 📞 联系方式

如有问题，请查看 [README_API.md](./README_API.md) 或提交Issue。

---

**祝使用愉快！** 🎉

