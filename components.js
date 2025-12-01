// 导航栏组件
const navbarComponent = `
<nav id="navbar" class="fixed w-full py-4 px-4 md:px-6 lg:px-8 z-50 transition-all duration-500">
    <div class="container mx-auto flex items-center justify-between max-w-full">
        <a href="index.html" class="flex items-center -ml-4 md:-ml-4 lg:-ml-6 flex-shrink-0">
            <img src="./images/logo.png" alt="寻仙唐迹" class="h-7 md:h-9 lg:h-10 mr-1 md:mr-2 flex-shrink-0">
            <span class="font-calligraphy text-lg md:text-xl lg:text-2xl text-celestial-blue text-shadow-gold lang-title flex-shrink-0" data-i18n="site.title">寻仙唐迹</span>
        </a>
        
        <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-4 md:ml-6 lg:ml-8 flex-1 min-w-0">
            <!-- 桌面导航 -->
            <div class="hidden md:flex space-x-4 lg:space-x-6 items-center nav-links-container">
                <a href="index.html" class="nav-link text-base" data-page="index" data-i18n="nav.home">首页</a>
                <a href="immortals.html" class="nav-link text-base" data-page="immortals" data-i18n="nav.immortals">仙人图谱</a>
                <a href="exhibition_all.html" class="nav-link text-base" data-page="exhibition_all" data-i18n="nav.exhibition">数字展厅</a>
                <a href="create.html" class="nav-link text-base" data-page="create" data-i18n="nav.create">仙卷创作</a>
                <a href="us.html" class="nav-link text-base" data-page="us" data-i18n="nav.about">关于我们</a>
            </div>

            <!-- 桌面端主题切换 -->
            <div class="hidden md:flex theme-toggle-group flex-shrink-0" role="group" aria-label="主题模式切换">
                <button class="theme-toggle-btn" data-theme-toggle="default" type="button" aria-pressed="false">
                    <i class="fa fa-sun-o"></i><span data-i18n="theme.default">默认</span>
                </button>
                <button class="theme-toggle-btn" data-theme-toggle="dark" type="button" aria-pressed="false">
                    <i class="fa fa-moon-o"></i><span data-i18n="theme.dark">暗色</span>
                </button>
                <button class="theme-toggle-btn" data-theme-toggle="eye" type="button" aria-pressed="false">
                    <i class="fa fa-leaf"></i><span data-i18n="theme.eye">护眼</span>
                </button>
            </div>
            
            <!-- 语言切换按钮 -->
            <div class="hidden md:flex ml-1 md:ml-2 flex-shrink-0">
                <button id="langToggleBtn" class="theme-toggle-btn" type="button" aria-label="切换语言">
                    <i class="fa fa-language"></i><span id="langToggleText">EN</span>
                </button>
            </div>
            
            <!-- 移动端菜单按钮 -->
            <button id="menuBtn" class="md:hidden text-celestial-blue text-2xl focus:outline-none" aria-label="展开导航菜单">
                <i class="fa fa-bars"></i>
            </button>
        </div>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div id="mobileMenu" class="md:hidden hidden absolute top-full left-0 w-full bg-moon-white/95 backdrop-blur-sm shadow-lg py-4 px-6 flex flex-col space-y-4">
        <a href="index.html" class="mobile-nav-link" data-page="index" data-i18n="nav.home">首页</a>
        <a href="immortals.html" class="mobile-nav-link" data-page="immortals" data-i18n="nav.immortals">仙人图谱</a>
        <a href="exhibition_all.html" class="mobile-nav-link" data-page="exhibition_all" data-i18n="nav.exhibition">数字展厅</a>
        <a href="create.html" class="mobile-nav-link" data-page="create" data-i18n="nav.create">仙卷创作</a>
        <a href="us.html" class="mobile-nav-link" data-page="us" data-i18n="nav.about">关于我们</a>
        <div class="theme-divider border-t pt-4 mt-2">
            <span class="text-xs uppercase tracking-wider text-gray-600" data-i18n="theme.title">主题模式</span>
            <div class="grid grid-cols-3 gap-3 mt-3">
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="default" type="button" aria-pressed="false">
                    <i class="fa fa-sun-o"></i><span data-i18n="theme.default">默认</span>
                </button>
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="dark" type="button" aria-pressed="false">
                    <i class="fa fa-moon-o"></i><span data-i18n="theme.dark">暗色</span>
                </button>
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="eye" type="button" aria-pressed="false">
                    <i class="fa fa-leaf"></i><span data-i18n="theme.eye">护眼</span>
                </button>
            </div>
            <div class="mt-4 pt-4 border-t">
                <button id="langToggleBtnMobile" class="theme-toggle-btn w-full justify-center" type="button" aria-label="切换语言">
                    <i class="fa fa-language"></i><span id="langToggleTextMobile">EN</span>
                </button>
            </div>
        </div>
    </div>
</nav>
`;

// 页脚组件
const footerComponent = `
<footer class="bg-celestial-blue/90 text-white py-12 px-6 md:px-12 relative">
    <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
                <h3 class="font-calligraphy text-2xl mb-4 text-golden" data-i18n="site.title">寻仙唐迹</h3>
                <p class="text-white/80 text-sm" data-i18n="footer.description">
                    唐代游仙诗仙人意象数字人文馆，致力于用数字技术重现唐代诗人笔下的神仙世界。
                </p>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4" data-i18n="footer.quickLinks">快速链接</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a href="index.html" class="hover:text-golden transition-colors" data-i18n="nav.home">首页</a></li>
                    <li><a href="immortals.html" class="hover:text-golden transition-colors" data-i18n="nav.immortals">仙人图谱</a></li>
                    <li><a href="exhibition_all.html" class="hover:text-golden transition-colors" data-i18n="nav.exhibition">数字展厅</a></li>
                    <li><a href="create.html" class="hover:text-golden transition-colors" data-i18n="nav.create">仙卷创作</a></li>
                    <li><a href="us.html" class="hover:text-golden transition-colors" data-i18n="nav.about">关于我们</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4" data-i18n="footer.resources">资源引用说明</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a href="references.html#tang-poetry-dataset" class="hover:text-golden transition-colors" data-i18n="footer.dataset">全唐游仙诗数据集</a></li>
                    <li><a href="references.html#references" class="hover:text-golden transition-colors" data-i18n="footer.references">参考文献</a></li>
                    <li><a href="references.html#image-resources" class="hover:text-golden transition-colors" data-i18n="footer.images">图像引用</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4" data-i18n="footer.contact">联系我们</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li class="flex items-center"><i class="fa fa-envelope-o mr-2"></i> zxy812120@163.com</li>
                    <li class="flex items-center"><i class="fa fa-map-marker mr-2"></i> <span data-i18n="footer.location">中国·香港·香港理工大学</span></li>
                    <li class="flex items-center mt-3">
                        <a href="https://github.com/YKzzz123/tangxian.git" target="_blank" rel="noopener noreferrer" class="hover:text-golden transition-colors flex items-center">
                            <i class="fa fa-github mr-2"></i><span data-i18n="footer.github">GitHub 仓库</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p data-i18n="footer.copyright">© 2025 寻仙唐迹 - 唐代游仙诗仙人意象数字人文馆 版权所有</p>
            <p class="mt-1" data-i18n="footer.disclaimer">本项目仅供学术研究与文化传播使用</p>
        </div>
    </div>
</footer>
`;

// Tailwind 配置 - 需要在 Tailwind CSS 加载后立即执行
// 这个函数应该在 <head> 中，在 Tailwind CSS 加载之后调用
function initTailwindConfig() {
    // 如果已经配置过，直接返回
    if (window.tailwindConfigInitialized) {
        return;
    }
    
    // Tailwind 配置对象
    const tailwindConfig = {
        theme: {
            extend: {
                colors: {
                    'celestial-blue': '#4A6FA5',      // 石青色
                    'moon-white': '#F0F4F8',         // 月白色
                    'golden': '#D4AF37',             // 鎏金色
                    'ochre': '#CC7722',              // 赭石色
                    'jade-green': '#3A7D44',         // 玉绿色
                    'ink': '#2D2D2D',                // 墨色
                    'rose-pink': '#FF6B8B',          // 玫瑰粉色
                },
                fontFamily: {
                    'calligraphy': ['"Ma Shan Zheng"', 'cursive'],
                    'classic': ['"Noto Serif SC"', 'serif'],
                    'english-title': ['"Playfair Display"', '"Times New Roman"', 'serif'],
                },
            }
        }
    };
    
    // 尝试立即配置（如果 Tailwind 已加载）
    if (typeof tailwind !== 'undefined') {
        tailwind.config = tailwindConfig;
        window.tailwindConfigInitialized = true;
        return;
    }
    
    // 如果 Tailwind 还未加载，等待加载完成
    // 使用多种方式确保配置成功
    const applyConfig = function() {
        if (typeof tailwind !== 'undefined' && !window.tailwindConfigInitialized) {
            tailwind.config = tailwindConfig;
            window.tailwindConfigInitialized = true;
        }
    };
    
    // 尝试在 DOMContentLoaded 时配置
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyConfig);
    } else {
        applyConfig();
    }
    
    // 备用方案：在 window.load 时配置
    window.addEventListener('load', applyConfig);
}

// 立即执行配置（如果 components.js 在 head 中加载）
initTailwindConfig();

// 背景云雾效果组件
const backgroundComponent = `
<div class="fixed inset-0 bg-cloud opacity-20 cloud-animation z-0 pointer-events-none"></div>
`;

// 公共样式组件
const styleComponent = `
<style type="text/tailwindcss">
    :root {
        --color-surface-primary: #F0F4F8;
        --color-surface-muted: rgba(240, 244, 248, 0.85);
        --color-surface-card: rgba(255, 255, 255, 0.8);
        --color-surface-card-strong: rgba(255, 255, 255, 0.9);
        --color-surface-card-soft: rgba(255, 255, 255, 0.7);
        --color-navbar-bg: rgba(255, 255, 255, 0.9);
        --color-footer-bg: rgba(74, 111, 165, 0.9);
        --color-card-border: rgba(255, 255, 255, 0.4);
        --color-text-primary: #1f2937;
        --color-text-secondary: #374151;
        --color-text-tertiary: #4b5563;
        --color-accent-primary: #4A6FA5;
        --color-accent-muted: rgba(74, 111, 165, 0.7);
        --color-gradient-from: rgba(240, 244, 248, 0.85);
        --color-gradient-to: rgba(74, 111, 165, 0.1);
        --color-toggle-bg: rgba(74, 111, 165, 0.12);
        --color-toggle-border: rgba(74, 111, 165, 0.4);
        --color-toggle-active-bg: #4A6FA5;
        --color-toggle-active-text: #ffffff;
        --color-cloud-opacity: 0.2;
        --color-cloud-filter: brightness(1);
    }

    body {
        background-color: var(--color-surface-primary);
        color: var(--color-text-primary);
        transition: background-color 0.4s ease, color 0.3s ease;
    }

    body.theme-dark {
        --color-surface-primary: #0f172a;
        --color-surface-muted: rgba(15, 23, 42, 0.85);
        --color-surface-card: rgba(30, 41, 59, 0.75);
        --color-surface-card-strong: rgba(30, 41, 59, 0.9);
        --color-surface-card-soft: rgba(30, 41, 59, 0.65);
        --color-navbar-bg: rgba(15, 23, 42, 0.85);
        --color-footer-bg: rgba(15, 23, 42, 0.95);
        --color-card-border: rgba(148, 163, 184, 0.25);
        --color-text-primary: #e2e8f0;
        --color-text-secondary: #cbd5f5;
        --color-text-tertiary: #94a3b8;
        --color-accent-primary: #93c5fd;
        --color-accent-muted: rgba(147, 197, 253, 0.8);
        --color-gradient-from: rgba(30, 41, 59, 0.7);
        --color-gradient-to: rgba(148, 163, 184, 0.18);
        --color-toggle-bg: rgba(148, 163, 184, 0.12);
        --color-toggle-border: rgba(148, 163, 184, 0.35);
        --color-toggle-active-bg: #2563eb;
        --color-toggle-active-text: #f8fafc;
        --color-cloud-opacity: 0.12;
        --color-cloud-filter: brightness(0.55);
    }

    body.theme-eye {
        --color-surface-primary: #f4f1e1;
        --color-surface-muted: rgba(244, 241, 225, 0.85);
        --color-surface-card: rgba(255, 255, 240, 0.85);
        --color-surface-card-strong: rgba(255, 255, 240, 0.92);
        --color-surface-card-soft: rgba(255, 255, 240, 0.72);
        --color-navbar-bg: rgba(244, 241, 225, 0.85);
        --color-footer-bg: rgba(97, 125, 72, 0.9);
        --color-card-border: rgba(154, 179, 126, 0.45);
        --color-text-primary: #3d4b2f;
        --color-text-secondary: #4f5d3c;
        --color-text-tertiary: #6b7756;
        --color-accent-primary: #4f7a3a;
        --color-accent-muted: rgba(79, 122, 58, 0.75);
        --color-gradient-from: rgba(244, 241, 225, 0.82);
        --color-gradient-to: rgba(111, 138, 58, 0.15);
        --color-toggle-bg: rgba(111, 138, 58, 0.15);
        --color-toggle-border: rgba(111, 138, 58, 0.4);
        --color-toggle-active-bg: #4f7a3a;
        --color-toggle-active-text: #f8f5e6;
        --color-cloud-opacity: 0.18;
        --color-cloud-filter: brightness(0.85);
    }

    .bg-moon-white {
        background-color: var(--color-surface-primary) !important;
    }
    .bg-moon-white\\/80 {
        background-color: var(--color-surface-muted) !important;
    }
    .bg-moon-white\\/95 {
        background-color: var(--color-surface-card-strong) !important;
    }
    .bg-white {
        background-color: var(--color-surface-card-strong) !important;
    }
    .bg-white\\/80 {
        background-color: var(--color-surface-card) !important;
    }
    .bg-white\\/70 {
        background-color: var(--color-surface-card-soft) !important;
    }
    .bg-white\\/90 {
        background-color: var(--color-surface-card-strong) !important;
    }
    #navbar.bg-white\\/90 {
        background-color: var(--color-navbar-bg) !important;
    }
    .bg-celestial-blue\\/90 {
        background-color: var(--color-footer-bg) !important;
    }

    .text-gray-800 {
        color: var(--color-text-primary) !important;
    }
    .text-gray-700 {
        color: var(--color-text-secondary) !important;
    }
    .text-gray-600 {
        color: var(--color-text-tertiary) !important;
    }
    .text-celestial-blue {
        color: var(--color-accent-primary) !important;
    }
    .text-celestial-blue\\/70 {
        color: var(--color-accent-muted) !important;
    }
    .text-ink {
        color: var(--color-text-primary) !important;
    }
    .from-moon-white\\/80 {
        --tw-gradient-from: var(--color-gradient-from) !important;
        --tw-gradient-stops: var(--color-gradient-from), var(--tw-gradient-to, rgba(255,255,255,0));
    }
    .to-celestial-blue\\/10 {
        --tw-gradient-to: var(--color-gradient-to) !important;
    }

    .bg-cloud {
        background-image: url('https://picsum.photos/id/154/1920/1080');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        opacity: var(--color-cloud-opacity);
        filter: var(--color-cloud-filter);
    }
    .bg-paper-texture {
        background-color: var(--color-surface-primary) !important;
        background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%);
        background-blend-mode: soft-light;
    }
    .cloud-animation {
        animation: cloudMove 120s linear infinite;
    }
    .theme-toggle-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.4rem 0.75rem;
        border-radius: 9999px;
        border: 1px solid var(--color-toggle-border);
        background-color: var(--color-toggle-bg);
        color: var(--color-text-secondary);
        font-size: 0.75rem;
        line-height: 1;
        transition: all 0.2s ease;
    }
    .theme-toggle-btn:hover {
        background-color: var(--color-toggle-border);
        color: var(--color-text-primary);
    }
    .theme-toggle-btn.theme-toggle-active {
        background-color: var(--color-toggle-active-bg);
        color: var(--color-toggle-active-text);
        border-color: transparent;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    .theme-toggle-group {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    /* 语言切换按钮文本不换行 */
    #langToggleText,
    #langToggleTextMobile {
        white-space: nowrap;
    }
    .theme-divider {
        border-color: var(--color-card-border) !important;
    }

    @layer utilities {
        .content-auto {
            content-visibility: auto;
        }
        .text-shadow-gold {
            text-shadow: 0 0 5px rgba(212, 175, 55, 0.7);
        }
        /* 英文模式下导航栏标题字体大小调整，确保一行显示 */
        body.lang-en .lang-title {
            font-size: clamp(0.875rem, 1vw, 1.25rem) !important;
            white-space: nowrap;
        }
        /* 英文版导航栏容器优化 */
        body.lang-en #navbar .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        @media (min-width: 768px) {
            body.lang-en #navbar .container {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
        @media (min-width: 1024px) {
            body.lang-en #navbar .container {
                padding-left: 1.5rem;
                padding-right: 1.5rem;
            }
        }
        @keyframes cloudMove {
            0% { background-position: 0 0; }
            100% { background-position: 1920px 0; }
        }
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        .scroll-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .scroll-smooth {
            scroll-behavior: smooth;
        }
        .hover-lift {
            transition: transform 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
        }
        .fade-in {
            animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .artifact-zoom {
            transition: transform 0.5s ease;
        }
        .artifact-zoom:hover {
            transform: scale(1.05);
        }
        .selected-option {
            border-color: #D4AF37 !important;
        }
        /* 英文版大标题字体 */
        body.lang-en .font-calligraphy,
        body.lang-en h1.font-calligraphy,
        body.lang-en h2.font-calligraphy,
        body.lang-en h3.font-calligraphy {
            font-family: 'Playfair Display', 'Times New Roman', serif !important;
        }
        /* 导航链接不换行 */
        .nav-link {
            white-space: nowrap;
        }
        /* 中文版导航链接右对齐 */
        body:not(.lang-en) #navbar .flex.items-center.space-x-2 {
            justify-content: flex-end;
        }
        body:not(.lang-en) .nav-links-container {
            margin-left: auto;
            margin-right: 0;
        }
        /* 英文版导航栏优化 - 减小间距和字体 */
        body.lang-en .nav-link {
            font-size: 0.8rem;
            padding: 0.25rem 0.4rem;
        }
        /* 英文版导航链接容器间距优化 */
        body.lang-en nav .hidden.md\\:flex {
            gap: 0.4rem !important;
        }
        @media (min-width: 1024px) {
            body.lang-en .nav-link {
                font-size: 0.85rem;
                padding: 0.25rem 0.5rem;
            }
            body.lang-en nav .hidden.md\\:flex {
                gap: 0.6rem !important;
            }
        }
        @media (min-width: 1280px) {
            body.lang-en .nav-link {
                font-size: 0.9rem;
                padding: 0.25rem 0.6rem;
            }
            body.lang-en nav .hidden.md\\:flex {
                gap: 0.8rem !important;
            }
        }
        @media (min-width: 1536px) {
            body.lang-en .nav-link {
                font-size: 1rem;
                padding: 0.25rem 0.75rem;
            }
            body.lang-en nav .hidden.md\\:flex {
                gap: 1rem !important;
            }
        }
        /* 英文版主题切换按钮组优化 */
        body.lang-en .theme-toggle-group {
            gap: 0.25rem;
        }
        body.lang-en .theme-toggle-btn {
            padding: 0.35rem 0.6rem;
            font-size: 0.7rem;
        }
        body.lang-en .theme-toggle-btn span {
            display: none;
        }
        @media (min-width: 1280px) {
            body.lang-en .theme-toggle-btn span {
                display: inline;
            }
        }
        /* 防止翻译前的闪烁 - 隐藏未翻译的内容直到翻译完成 */
        body:not(.i18n-ready) [data-i18n]:not([data-i18n=""]) {
            visibility: hidden;
        }
        body.i18n-ready [data-i18n] {
            visibility: visible;
        }
    }
</style>
`;

const THEME_STORAGE_KEY = 'tangxian-theme';
const AVAILABLE_THEMES = ['default', 'dark', 'eye'];

document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme && AVAILABLE_THEMES.includes(storedTheme)) {
        setThemeClass(storedTheme);
    }
});

// 工具函数 - 初始化页面公共部分
function initPage(pageName) {
    // 确保 Tailwind 配置已初始化
    initTailwindConfig();
    
    // 添加背景
    document.body.insertAdjacentHTML('afterbegin', backgroundComponent);
    
    // 添加导航栏
    document.body.insertAdjacentHTML('afterbegin', navbarComponent);
    
    // 添加页脚
    document.body.insertAdjacentHTML('beforeend', footerComponent);
    
    // 设置当前页面导航高亮
    setActiveNav(pageName);
    
    // 初始化通用事件监听
    initCommonEvents();
}

// 设置当前页面导航高亮
function setActiveNav(pageName) {
    // 桌面导航
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('text-golden', 'font-bold');
            link.classList.remove('text-celestial-blue', 'hover:text-golden');
        } else {
            link.classList.add('text-celestial-blue', 'hover:text-golden', 'transition-colors', 'duration-300');
            link.classList.remove('text-golden', 'font-bold');
        }
    });
    
    // 移动端导航
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('text-golden', 'font-bold');
            link.classList.remove('text-celestial-blue', 'hover:text-golden');
        } else {
            link.classList.add('text-celestial-blue', 'hover:text-golden', 'transition-colors', 'duration-300', 'py-2');
            link.classList.remove('text-golden', 'font-bold');
        }
    });
}

// 初始化通用事件监听
function initCommonEvents() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');

    // 导航栏滚动效果
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/90', 'backdrop-blur-sm', 'shadow-md');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-white/90', 'backdrop-blur-sm', 'shadow-md');
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
            }
        });
    }
    
    // 移动端菜单切换
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 滚动显示动画
    function checkScroll() {
        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight * 0.85) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    checkScroll();

    setupThemeToggle();
    setupLanguageToggle();
}

function setupThemeToggle() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = storedTheme && AVAILABLE_THEMES.includes(storedTheme) ? storedTheme : 'default';
    
    setThemeClass(initialTheme);
    updateThemeButtons(initialTheme);
    
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
        button.addEventListener('click', () => {
            const targetTheme = button.getAttribute('data-theme-toggle');
            applyThemePreference(targetTheme);
            if (button.closest('#mobileMenu')) {
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        }, { once: false });
    });
}

function applyThemePreference(theme) {
    const targetTheme = AVAILABLE_THEMES.includes(theme) ? theme : 'default';
    setThemeClass(targetTheme);
    localStorage.setItem(THEME_STORAGE_KEY, targetTheme);
    updateThemeButtons(targetTheme);
}

function setThemeClass(theme) {
    const body = document.body;
    if (!body) return;
    body.classList.remove('theme-dark', 'theme-eye');
    body.dataset.theme = theme;
    if (theme === 'dark') {
        body.classList.add('theme-dark');
    } else if (theme === 'eye') {
        body.classList.add('theme-eye');
    }
}

function updateThemeButtons(activeTheme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
        const isActive = button.getAttribute('data-theme-toggle') === activeTheme;
        button.classList.toggle('theme-toggle-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

// 语言切换系统
const LANGUAGE_STORAGE_KEY = 'tangxian-language';
const AVAILABLE_LANGUAGES = ['zh', 'en'];
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'zh';

// 立即应用语言设置（在页面渲染前）
(function() {
    try {
        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'zh';
        if (savedLang === 'en') {
            // 立即设置 HTML lang 属性
            if (document.documentElement) {
                document.documentElement.lang = 'en';
            }
            // 立即添加 lang-en 类到 body（如果 body 已存在）
            if (document.body) {
                document.body.classList.add('lang-en');
            } else {
                // 如果 body 还不存在，在 DOMContentLoaded 时添加
                document.addEventListener('DOMContentLoaded', function() {
                    document.body.classList.add('lang-en');
                });
            }
        }
    } catch (e) {
        // 如果 localStorage 不可用，忽略错误
    }
})();

// 人名转拼音映射表（常用唐代诗人）
const nameToPinyin = {
    '李白': 'Li Bai',
    '李商隐': 'Li Shangyin',
    '李贺': 'Li He',
    '白居易': 'Bai Juyi',
    '曹唐': 'Cao Tang',
    '宋之问': 'Song Zhiwen',
    '陆龟蒙': 'Lu Guimeng',
    '杜甫': 'Du Fu',
    '王维': 'Wang Wei',
    '孟浩然': 'Meng Haoran',
    '王勃': 'Wang Bo',
    '骆宾王': 'Luo Binwang',
    '卢照邻': 'Lu Zhaolin',
    '杨炯': 'Yang Jiong',
    '陈子昂': 'Chen Zi\'ang',
    '张九龄': 'Zhang Jiuling',
    '王之涣': 'Wang Zhihuan',
    '高适': 'Gao Shi',
    '岑参': 'Cen Shen',
    '韩愈': 'Han Yu',
    '柳宗元': 'Liu Zongyuan',
    '刘禹锡': 'Liu Yuxi',
    '元稹': 'Yuan Zhen',
    '贾岛': 'Jia Dao',
    '孟郊': 'Meng Jiao',
    '杜牧': 'Du Mu',
    '温庭筠': 'Wen Tingyun',
    '韦庄': 'Wei Zhuang',
    '皮日休': 'Pi Rixiu',
    '聂夷中': 'Nie Yizhong',
    '西王母': 'Queen Mother of the West',
    '玉皇大帝': 'Jade Emperor',
    '杜兰香': 'Du Lanxiang',
    '王子乔': 'Wang Ziqiao',
    '黄帝': 'Yellow Emperor',
    '黄初平': 'Huang Chuping',
    '老子': 'Laozi',
    '秦始皇': 'Qin Shi Huang'
};

// 翻译数据
const translations = {
    zh: {
        'site.title': '寻仙唐迹',
        'site.subtitle': '唐代文人游仙诗仙人意象分析',
        'nav.home': '首页',
        'nav.immortals': '仙人图谱',
        'nav.exhibition': '数字展厅',
        'nav.create': '仙卷创作',
        'nav.about': '关于我们',
        'theme.title': '主题模式',
        'theme.default': '默认',
        'theme.dark': '暗色',
        'theme.eye': '护眼',
        'index.subtitle': '唐代文人游仙诗仙人意象分析',
        'page.title.index': '寻仙唐迹 - 唐代文人游仙诗仙人意象分析',
        'page.title.immortals': '仙人图谱 - 寻仙唐迹',
        'page.title.exhibition.all': '数字展厅 - 寻仙唐迹',
        'page.title.exhibition.chu': '初唐游仙诗 - 寻仙唐迹',
        'page.title.exhibition.sheng': '盛唐游仙诗 - 寻仙唐迹',
        'page.title.exhibition.zhong': '中唐游仙诗 - 寻仙唐迹',
        'page.title.exhibition.wan': '晚唐游仙诗 - 寻仙唐迹',
        'page.title.create': '仙卷创作 - 寻仙唐迹',
        'page.title.us': '关于我们 - 寻仙唐迹',
        'page.title.references': '资源引用说明 - 寻仙唐迹',
        'source.attribution.index': '本页文字来自人文分析和AI生成。',
        'source.attribution.immortals': '本页所有仙人诗句来自数据库，仙人介绍来自AI生成。',
        'source.attribution.exhibition': '本页所有文字来自人文分析。',
        'source.attribution.create': '本页所有文字来自AI生成。',
        'index.about': '关于本项目',
        'index.explore': '探索内容',
        'index.immortals.title': '仙人图谱',
        'index.immortals.desc': '探索各类仙人形象与传说',
        'index.immortals.detail': '基于性别、类型和出现次数系统梳理唐代游仙诗中的仙人意象，从个性鲜明的天界众仙到类型化仙人，展现丰富多彩的仙人世界。',
        'index.immortals.enter': '进入探索',
        'index.exhibition.title': '数字展厅',
        'index.exhibition.desc': '唐代游仙诗中的仙人意象',
        'index.exhibition.detail': '探索全唐及唐代各个时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'index.exhibition.enter': '进入展厅',
        'index.create.title': '仙卷创作',
        'index.create.desc': '生成你的专属游仙诗',
        'index.create.detail': '完成"唐朝游仙志"测试，找到与你气质契合的诗人，选择喜爱的仙人意象和仙境场景，生成属于自己的"唐代游仙诗"。',
        'index.create.enter': '开始创作',
        'index.stats.poets': '唐代诗人',
        'index.stats.poems': '游仙诗作',
        'index.stats.immortals': '仙人意象',
        'index.about.text1': '唐代是中国诗歌史上一个光华四射的辉煌时代。因唐王朝与道教教主老子在姓氏上的"亲缘关系"，举国上下道教隆盛风靡。其信仰核心——神仙思想得以借机普遍传播和存在，并深入社会各个阶层。',
        'index.about.text2': '由于道教的长生宗旨与文人士大夫追求生命不朽的心理高度契合，其神话传说、宗教活动也蕴含了大量的素材和丰富的意象，唐代文人乐于尊崇道教。他们游仙的精神之花得到灌溉，因此极大地刺激了诗歌创作。',
        'index.about.text3': '在这一背景下，唐代游仙诗走向空前兴盛。',
        'index.about.quote': '"霓为衣兮风为马，云之君兮纷纷而来下"',
        'index.about.quote.author': '— 李白《梦游天姥吟留别》',
        'index.about.image.caption': '唐代游仙诗中的仙人意象，常与自然山川、云雾星辰融为一体',
        'index.explore.desc': '深入了解唐代游仙诗中的仙人世界，感受古人丰富的想象力与精神追求',
        'footer.description': '唐代游仙诗仙人意象数字人文馆，致力于用数字技术重现唐代诗人笔下的神仙世界。',
        'footer.quickLinks': '快速链接',
        'footer.resources': '资源引用说明',
        'footer.dataset': '全唐游仙诗数据集',
        'footer.references': '参考文献',
        'footer.images': '图像引用',
        'footer.contact': '联系我们',
        'footer.location': '中国·香港·香港理工大学',
        'footer.github': 'GitHub 仓库',
        'footer.copyright': '© 2025 寻仙唐迹 - 唐代游仙诗仙人意象数字人文馆 版权所有',
        'footer.disclaimer': '本项目仅供学术研究与文化传播使用',
        'exhibition.title': '唐代文人游仙诗仙人意象分析',
        'exhibition.subtitle': '探索唐代及其不同时期下游仙诗的创作趋势、仙人意象及其共现关系，以及仙人所在地GIS分析。',
        'exhibition.nav.visualization': '可视化分析',
        'exhibition.nav.overview': '整体概览',
        'exhibition.nav.period': '时期对比',
        'exhibition.nav.typology': '类型学研究',
        'exhibition.nav.gender': '性别研究',
        'exhibition.nav.type': '类型研究',
        'exhibition.nav.cooccurrence': '仙人意象共现分析',
        'exhibition.nav.gis': '仙人所在地GIS分析',
        'exhibition.overview.title': '游仙诗整体概览',
        'exhibition.overview.text1': '游仙诗是诗人借厌世隐遁、寻仙访道、游历仙境等题材内容，抒写作者的愤世嫉俗之情，或企求长生不老的意愿的一种诗歌类型。它以仙人、仙境、仙术等虚幻性意象为核心意象，而在这些意象当中，仙人意象又是核心之核心。',
        'exhibition.overview.text2': '下面，让我们一起通过探索唐代游仙诗中的仙人意象及其流变轨迹，体会当时的时代风气和人文思想。',
        'immortals.title': '唐代游仙诗仙人意象图谱',
        'immortals.subtitle': '探索唐代游仙诗中各类仙人形象，感受古人对仙境的丰富想象和对长生不死的向往',
        'immortals.filter.all': '全部仙人',
        'immortals.filter.distinct': '個性鮮明的天界眾仙',
        'immortals.filter.mortal': '凡人成仙者',
        'immortals.filter.typed': '類型化仙人',
        'immortals.filter.female': '女性',
        'immortals.filter.male': '男性',
        'immortals.period.filter': '朝代筛选:',
        'immortals.period.all': '全部',
        'immortals.period.chu': '初唐',
        'immortals.period.sheng': '盛唐',
        'immortals.period.zhong': '中唐',
        'immortals.period.wan': '晚唐',
        'immortals.sort.label': '排序方式:',
        'immortals.sort.desc': '降序 (从高到低)',
        'immortals.sort.asc': '升序 (从低到高)',
        'immortals.reset': '重置',
        'immortals.card.mention': '提及次数',
        'exhibition.chart.period.percentage': '唐代各时期游仙诗占比',
        'exhibition.chart.period.count': '唐代各时期游仙诗数量',
        'exhibition.overview.quanTangShi': '《全唐诗》是清代康熙四十四年（1705年）在康熙帝的主导下编纂而成的唐诗合集。"得诗四万八千九百余首，凡二千二百余人，厘为九百卷"。基于颜进雄所著的《唐代游仙诗研究》，《全唐诗》中共有游仙诗282首，占比0.94%。其中初唐52首，盛唐79首，中唐67首，晚唐84首。',
        'exhibition.poet.title': '唐代诗人游仙诗作品数量',
        'exhibition.poet.text1': '基于对《全唐诗》中282首游仙诗的统计分析，共有83位诗人参与了游仙诗的创作。这些诗人的创作数量分布极不均衡，其中李白以57首游仙诗遥遥领先，占总数的20.2%。这种分布体现了游仙诗创作中的个体差异和"大家"的影响力。',
        'exhibition.poet.text2': '下方图表展示了游仙诗创作数量最多的前20位诗人，从数据可以看出，仅有少数诗人（如李白、曹唐、宋之问等）创作了大量游仙诗，而大多数诗人仅创作了1-2首。',
        'exhibition.poet.chart.title': '唐代诗人游仙诗作品数量排名（前20名）',
        'exhibition.poet.chart.text': '图片展示了唐代游仙诗的作品数目排名。李白、曹唐、宋之问、陆龟蒙、李商隐是撰写游仙诗数量最多的唐代文人，其中李白所作游仙诗的数目更是高达57首。',
        'exhibition.period.title': '不同时期下仙人意象的分布',
        'exhibition.period.text1': '在282首唐代游仙诗中，仙人意象一共出现了340次，包括135名仙人。仙人意象的出现次数和数量在各个时期也有所变化。',
        'exhibition.period.chart.frequency': '唐代各时期仙人意象出现次数',
        'exhibition.period.chart.top20': '唐代游仙诗中最常出现的仙人意象（前20名）',
        'exhibition.period.chart.heatmap': '主要仙人意象的时代分布热力图',
        'exhibition.period.chart.trend': '主要仙人意象的时代分布与流行度趋势（前5名）',
        'exhibition.period.chart.distribution': '时代分布',
        'exhibition.period.chart.popularity': '流行度趋势',
        'exhibition.period.text2': '图表展示了唐代游仙诗中仙人意象的出现次数排名。西王母、王子乔、麻姑、玉皇大帝、弄玉是唐代游仙诗中最频繁出现的仙人意象，他们在不同时期中的出现次数也有所起伏。',
        'exhibition.period.text3': '通过这一排名我们同样可以看到，在最常出现仙人意象中，女性仙人的数量也绝不在男性仙人的数量之下。',
        'exhibition.gender.title': '仙人意象性别研究',
        'exhibition.gender.text1': '在这135名仙人中，男性仙人有95名，女性仙人有40名。',
        'exhibition.gender.text2': '不难发现一个有趣的现象：女性仙人意象的占比在逐渐增多，甚至在中唐时期超过了男性仙人的数量。',
        'exhibition.gender.chart.distribution': '仙人意象性别分布',
        'exhibition.gender.chart.period': '唐代各时期仙人意象性别分布',
        'exhibition.gender.chart.trend': '女性仙人意象占比变化趋势',
        'exhibition.gender.tooltip': '为什么女性仙人意象的占比在逐渐增多呢？',
        'exhibition.gender.text3': '中唐安史之乱后，世风日下，人们注重现实享乐，致使社会上、恋女冠之风盛行。在中唐文人看来，天上的仙女具有非凡之美，最能满足他们纵欲享乐的嗜好，而且她们熟知道术，得到了她们也就等于找到了成仙的秘诀。',
        'exhibition.gender.text4': '因此，艳情的仙化在这一时期成为游仙诗的一种普遍现象。男女道士之恋、士人与女冠之恋、士人与妓女之恋、俗世中的男女之恋，甚至帝妃之恋都被置于仙境来表现。',
        'exhibition.type.title': '仙人意象类型研究',
        'exhibition.type.text1': '从意象的内涵出发，唐代游仙诗的仙人意象可被分为三大类：类型化仙人、凡人成仙者、个性鲜明的天界众仙。',
        'exhibition.type.text2': '· 类型化仙人，指在游仙诗中缺乏个性、只是作为仙人群体代表而出现的仙人意象，如"玉女""羽人"等；',
        'exhibition.type.text3': '· 凡人成仙者，顾名思义，指那些本是凡人，后来靠巧遇仙人或者自行修道、服食仙药升天成仙的人。这类仙人意象的典型是王子乔、黄帝和黄初平；',
        'exhibition.type.text4': '· 个性鲜明的天界众仙，指那些被游仙诗人特别关照、精心刻画, 因而具有鲜明个体特色的仙人，如西王母、玉皇大帝、杜兰香等。',
        'exhibition.type.text5': '在这135名仙人中，近一半都为凡人成仙者。唐代诗人将此类意象纳入游仙诗中，以表达自己升仙超越的理想，和自己对道教的虔诚信仰。',
        'exhibition.type.chart.percentage': '各类型仙人意象占比',
        'exhibition.type.chart.count': '各类型仙人意象数量',
        // Chart translations
        'chart.tooltip.occurrence': '出现次数',
        'chart.tooltip.gender': '性别',
        'chart.tooltip.times': '首',
        'chart.tooltip.poems': '首',
        'chart.tooltip.percentage': '占比',
        'chart.tooltip.people': '人',
        'chart.tooltip.female.ratio': '女性仙人占比',
        'chart.tooltip.max': '最高',
        'chart.tooltip.category': '分类',
        'chart.tooltip.strength': '强度',
        'chart.axis.occurrence': '出现次数',
        'chart.axis.poems': '游仙诗数量',
        'chart.axis.percentage': '百分比',
        'chart.series.gender': '性别',
        'chart.series.period.percentage': '各时期占比',
        'chart.series.poem.count': '游仙诗数量',
        'chart.series.male.immortals': '男性仙人',
        'chart.series.female.immortals': '女性仙人',
        'chart.series.female.ratio': '女性仙人占比',
        'chart.series.occurrence': '出现次数',
        'chart.series.immortal.frequency': '仙人意象出现次数',
        'chart.legend.male': '男',
        'chart.legend.female': '女',
        'chart.legend.mortal.immortal': '凡人成仙者',
        'chart.legend.distinct.immortals': '个性鲜明的天界众仙',
        'chart.legend.typed.immortals': '类型化仙人',
        'chart.network.title': '仙人意象共现关系网络图',
        'chart.network.subtitle': '节点大小表示出现频率，线条颜色代表关系来源',
        'chart.period.chu': '初唐',
        'chart.period.sheng': '盛唐',
        'chart.period.zhong': '中唐',
        'chart.period.wan': '晚唐',
        'exhibition.cooccurrence.text1': '基于唐代游仙诗中仙人意象共现数据的社会网络分析，我们可以通过可视化网络图来探索不同仙人之间的关系。网络图中的节点代表仙人，节点的大小表示出现频率，连线表示仙人之间的共现关系，连线的粗细和颜色代表关系的强度。',
        'create.generate.btn': '生成仙卷',
        'create.generate.generating': '生成中...',
        'create.generate.placeholder': '生成仙卷后，可同步调用豆包生图展示仙境意象。',
        'create.generate.style': '风格：',
        'create.generate.style.pending': '待定',
        'create.generate.success.title': '仙卷已生成',
        'create.generate.success.text': '根据诗魂风格与所选意象，诗句与仙境图稿均已同步生成。',
        'create.generate.success.confirm': '确定',
        'create.generate.pending': '待完成测试',
        'create.panel.description': '请先完成测试，继承诗人风骨，再选定意象与场景生成专属仙卷。',
        'create.panel.currentPoet': '当前诗人：',
        'create.panel.backToTest': '返回测试',
        'create.panel.imagery': '仙人意象',
        'create.panel.scene': '仙境场景',
        'create.panel.selected.imagery': '意象：',
        'create.panel.selected.scene': '场景：',
        'create.page.description': '先完成唐朝游仙志测试，找到与你气质契合的诗人，再以其风格挑选仙人意象与仙境场景，生成属于你的五言绝句。',
        'period.nav.all': '全唐',
        'period.nav.chu': '初唐',
        'period.nav.sheng': '盛唐',
        'period.nav.zhong': '中唐',
        'period.nav.wan': '晚唐',
        'period.nav.visualization': '可视化分析',
        'period.nav.overview': '整体概览',
        'period.nav.poems': '代表性诗歌',
        'period.nav.development': '发展状态',
        'period.nav.image': '主要仙人意象来源',
        'period.subtitle': '探索{period}时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'period.chu.subtitle': '探索初唐时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'period.sheng.subtitle': '探索盛唐时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'period.zhong.subtitle': '探索中唐时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'period.wan.subtitle': '探索晚唐时期游仙诗的发展状态、仙人意象分布及其来源，领略这一时期游仙诗的独特风貌。',
        'period.chu.title': '初唐游仙诗——小露端倪，承前启后',
        'period.sheng.title': '盛唐游仙诗——蔚为大观，登峰造极',
        'period.zhong.title': '中唐游仙诗——折翅云端，坠入人间',
        'period.wan.title': '晚唐游仙诗——霞光万丈，熠熠生辉',
        'period.history': '历史背景',
        'period.chu.history': '初唐时期（公元618-704年），李唐皇室自认为是老子（李耳）的后裔，大力提倡道教。这一政策使得道教在社会上得到了广泛传播，游仙诗作为道教文化的重要载体也随之繁荣发展。',
        'period.chu.overview': '尽管唐代游仙诗蔚为大观，其在各个时期的发展却并不均衡，初唐就是一个游仙诗创作相对沉寂的时期。这与唐初王室尊崇道教主要是出于抬高自身社会地位的政治目的，而非真正崇仙的清醒的仙道观念，以及唐初国力强盛酿成的社会满足心理有关。',
        'period.feature': '特征',
        'period.chu.feature.1': '延续南朝传统，但逐渐摆脱玄言诗的影响',
        'period.chu.feature.2': '宫廷文人创作活跃，应制诗占据重要地位',
        'period.chu.feature.3': '题材多为描绘仙境、赞美神仙，较少表达个人情感',
        'period.chu.feature.4': '受道家思想影响，强调隐逸和超脱',
        'period.chu.feature.5': '语言典雅华丽，注重对仗和用典',
        'period.development.text1': '{period}游仙诗的数目仅有{count}首，仙人意象的出现次数和数量分别为{freq}和{num}，是唐代四个时期中最少的。',
        'period.development.text2': '{period}游仙诗人的数量也较为匮乏，仅有{poets}名。代表作家有{names}。',
        'period.chu.development.text1': '初唐游仙诗的数目仅有52首，仙人意象的出现次数和数量分别为17和11，是唐代四个时期中最少的。',
        'period.chu.development.text2': '初唐游仙诗人的数量也较为匮乏，仅有20名。代表作家有宋之问、卢照龄、沈佺期和王勃。',
        'period.chu.development.text3': '在这一时期中，王子乔、西王母、浮丘公和东方朔被较多提及，如宋之问《王子乔》《凤笙曲》中的“王子乔，爱神仙，七月七日上宾天”、“忆昔王子晋，凤笙游云空”，沈佺期《幸白鹿观应制》中的“唯应问王母，桃作几时花”，李乂《杂曲歌辞：桃花行》中的“莫将秋宴传王母，来比春华寿圣皇”等。我们很难再寻觅到其他仙人意象的踪影。此外，仙人意象也以男性仙人和凡人成仙者为主，基本上是沿着先唐游仙诗开创的歌咏“列仙之趣”的传统继续发展的。',
        'period.chart.percentage': '{period}游仙诗占比',
        'period.chart.poets': '{period}诗人游仙诗作品数量排名',
        'period.chu.chart.percentage': '初唐游仙诗占比',
        'period.chu.chart.poets': '初唐诗人游仙诗作品数量排名',
        'period.sheng.chart.percentage': '盛唐游仙诗占比',
        'period.sheng.chart.poets': '盛唐诗人游仙诗作品数量排名',
        'period.sheng.chart.percentage.name': '游仙诗占比',
        'period.sheng.chart.poets.name': '作品数量',
        'period.sheng.chart.immortals.name': '出现次数',
        'period.sheng.chart.times': '首',
        'period.sheng.chart.male': '男性',
        'period.sheng.chart.female': '女性',
        'period.sheng.chart.type.mortal': '凡人成仙者',
        'period.sheng.chart.type.distinct': '個性鮮明的天界眾仙',
        'period.sheng.chart.type.typed': '類型化仙人',
        'period.sheng.chart.period.sheng': '盛唐',
        'period.sheng.chart.period.all': '全唐',
        'period.zhong.chart.percentage': '中唐游仙诗占比',
        'period.zhong.chart.poets': '中唐诗人游仙诗作品数量排名',
        'period.wan.chart.percentage': '晚唐游仙诗占比',
        'period.wan.chart.poets': '晚唐诗人游仙诗作品数量排名',
        'period.chart.immortals': '仙人意象出现次数排名',
        'period.chart.typeGender': '仙人意象类型与性别分布',
        'period.sheng.history': '盛唐时期（公元705-770年），社会经济繁荣，文化开放多元，思想自由活跃。皇室对道教的积极推崇，为游仙诗创作提供了肥沃的土壤。这一时期，游仙诗迎来了显著的兴盛期。',
        'period.sheng.overview': '盛唐是游仙题材文学作品发展的黄金时期。与初唐游仙诗创作相对沉寂的局面不同，盛唐游仙诗迎来了显著的兴盛期——诗作数量大幅增长，诗中蕴含的仙人意象也变得格外鲜活且富有深度。',
        'period.zhong.history': '中唐时期（公元771-835年），安史之乱的创伤尚未平复，藩镇割据、宦官专权等政治乱象频发，文人普遍陷入理想与现实的双重困境。在这一历史背景下，游仙诗成为文人宣泄内心焦虑、寻求精神寄托的重要文学形式。',
        'period.zhong.overview': '安史之乱的战火终结了盛唐的繁华，使唐王朝陷入由盛转衰的历史拐点。社会动荡引发的政治格局更迭、经济凋敝与民生疾苦，深刻重塑了文人的精神世界——盛唐时期昂扬自信的入世情怀逐渐消解，取而代之的是惶惑、焦虑与对精神慰藉的迫切渴求。',
        'period.wan.history': '晚唐时期（836-907年），黄巢之乱的烽火与藩镇割据的铁蹄，彻底击碎了唐王朝最后的中兴幻梦，将社会拖入分崩离析的末世图景。政治的腐朽、民生的凋敝与王朝倾覆的阴影，共同酿成了晚唐文人的精神苦酒。',
        'period.wan.overview': '黄巢之乱的烽火与藩镇割据的铁蹄，彻底击碎了唐王朝最后的中兴幻梦，将社会拖入分崩离析的末世图景。政治的腐朽、民生的凋敝与王朝倾覆的阴影，共同酿成了晚唐文人的精神苦酒——盛唐的昂扬自信早已消磨殆尽，中唐的惶惑焦虑沉淀为更深沉的幻灭感与无力感。',
        'period.zhong.overview2': '道教作为彼时重要的精神寄托载体，其内涵被中唐文人重新解读：他们不再执着于老庄玄学的浪漫超越，转而从道教义理、仙话传说中寻觅心灵安顿的路径，或借仙话阐释修道理念，或化用仙人意象映射现实困境，或赋予仙人凡俗情感以寄托个人情志。',
        'period.zhong.feature.1': '现实关怀与精神超越并存',
        'period.zhong.feature.2': '仙话传说与个人情志融合',
        'period.zhong.feature.3': '对心灵安顿与精神慰藉的追寻',
        'period.zhong.feature.4': '对仙境的描绘更趋世俗化',
        'period.zhong.development.text1': '中唐时期的游仙诗数目相比盛唐下降到67首，仙人意向出现的次数和数量分别为72和43。',
        'period.zhong.development.text2': '中唐的诗人数量达到了四个时期的最高峰，有作品记载的游仙诗人数量达到了29名。',
        'period.zhong.development.text3': '中唐时期的游仙诗数目相比盛唐下降到67首，仙人意象出现的次数和数量分别为72和43。这一时期，新出现的仙人意象有"嫦娥"、"广成子"等。如李贺《牡丹种曲》中的"月中桂树高多少，试问西河斫树人。嫦娥捣药无时已，玉女投壶不放还。"，孟郊《求仙曲》中的"广成爱神鼎，淮南好丹经。"从仙人类型上来看，游仙诗中首次出现了丑恶仙人意象，即在外貌、动作、性格等方面被刻意丑化，最终遭到诗人否定批判的仙人意象。此外，女性仙人意象明显增多，且呈现出艳情化倾向。遍览中唐游仙诗，我们会发现女性仙人意象的数量即将超过男性仙人意象的数量。',
        'period.zhong.changE.tooltip.1': '中国古代神话中的月中仙子',
        'period.zhong.changE.tooltip.2': '因偷吃不死药而奔月',
        'period.zhong.changE.tooltip.3': '象征长生却孤寂的矛盾',
        'period.zhong.changE.tooltip.4': '中唐时期成为文人情感寄托',
        'period.zhong.changE.description': '嫦娥的神话原型最早见于《山海经》，其初始形象为"帝俊妻常羲"，掌日月星辰之序；至汉代，《淮南子·览冥训》首次完整记载"嫦娥奔月"传说："羿请不死之药于西王母，姮娥窃以奔月，怅然有丧，无以续之。"此时的嫦娥尚是"窃药奔月"后满怀怅惘的凡女，未完全脱离人间情感；魏晋南北朝时期，道教对其形象进行改造，《搜神记》将其与"蟾蜍"意象关联，赋予"长生却孤寂"的矛盾属性；初盛唐时期，嫦娥多以"月中仙子"的缥缈形象出现在游仙诗中，如李白《把酒问月》"白兔捣药秋复春，嫦娥孤栖与谁邻"，虽提及孤寂，却未深入刻画其内心世界。中唐文人继承了"奔月""孤寂"的核心原型，但突破前代单一的形象框架，结合时代心境赋予其更复杂的情感内涵与现实隐喻，使"嫦娥"从单纯的"月仙符号"转变为承载文人生命体验的意象载体。',
        'period.zhong.guangChengZi.tooltip.1': '道家无为而治理念的化身',
        'period.zhong.guangChengZi.tooltip.2': '居崆峒山，传黄帝修道之法',
        'period.zhong.guangChengZi.tooltip.3': '主张"抱神以静"的修炼方法',
        'period.zhong.guangChengZi.tooltip.4': '中唐时期成为修道典范',
        'period.zhong.guangChengZi.description': '广成子的原型出自《庄子·在宥》，是道家"无为而治"与"修道养生"理念的化身：传说其居崆峒山，黄帝曾前往问道，广成子答以"至道之精，窈窈冥冥；至道之极，昏昏默默。无视无听，抱神以静，形将自正"，主张"去欲存真""与道合一"，此时的形象尚是"道家圣人"，未完全纳入道教神仙谱系。道教兴起后，广成子的形象被逐步"仙化"：东晋葛洪《抱朴子·内篇》将其列为"仙人"，称其"服金液，乘云驾龙，上升太清"；南北朝《元始上真众仙记》进一步赋予其"道教仙官"身份，与"元始天尊""太上老君"并列；中唐时期，道教"内丹道"兴起，文人对"修道"的认知从"服食金丹"转向"内心存静"，广成子"抱神以静"的核心思想被重新发掘，成为文人对抗现实焦虑、追求精神安顿的重要象征——其意象也从"遥远的仙官"转变为"可感的修道典范"。',
        'period.wan.overview2': '道教作为贯穿唐代的精神脉络，在此时完成了与文人心态的终极契合：文人不再借仙话寄托入世理想，也不再仅以仙人意象安顿心灵，而是将道教神仙世界转化为观照现实、宣泄悲苦、叩问命运的镜像。这种时代精神的嬗变，使晚唐游仙诗形成"以仙写悲、以幻喻实"的独特风貌：仙人意象彻底褪去神圣光环，或承载爱情幻灭的哀痛，或象征避世无门的无奈，或成为批判现实的载体。',
        'period.wan.overview3': '在晚唐繁复的仙人意象谱系中，"萧史""安期生"与"玉皇大帝"构成极具代表性的三重维度——他们分别对应着文人对情感归宿的怅惘、对个体出路的求索与对天命秩序的质疑，既是晚唐社会心理的浓缩写照，也见证了唐代游仙诗从浪漫超越向现实悲歌的最终转向。',
        'period.wan.feature.1': '末世情怀与幻灭感的集中体现',
        'period.wan.feature.2': '以仙写悲、以幻喻实的象征体系',
        'period.wan.feature.3': '神仙意象的世俗化与悲剧性转向',
        'period.wan.feature.4': '对天命秩序的质疑与个体命运的叩问',
        'period.wan.development.text1': '晚唐时期游仙诗的数量达到了84首，仙人意向的出现的次数和种类分别为146和80。',
        'period.wan.development.text2': '在这一时期的游仙诗人有所下降，有作品记载的诗人有24位，其中曹唐创作的数量最多。',
        'period.wan.development.text3': '这一时期，出现了"安期生"、"杜兰香"，韦庄的《访浔阳友人不遇》中的"不见安期悔上楼，寂寥人对鹭鸶愁"，曹唐《小游仙诗》（其三十七）中的"安期先生拂玉杯，共论王霸起身来"，李商隐《重过圣女祠》中的"萼绿华来无定所，杜兰香去未移时"。虽然这一时期的仙人仍然以"凡人成仙者"和"个性鲜明的天界众仙"为主，但晚唐游仙诗人按照现实生活经验对其进行刻画，使仙人意象实现了全面人间化，仙气变淡，人气转浓。',
        'period.wan.anQiSheng.tooltip.1': '古代传说中的仙人，常居东海',
        'period.wan.anQiSheng.tooltip.2': '秦始皇曾派人寻求其长生不老之术',
        'period.wan.anQiSheng.tooltip.3': '晚唐时期成为精神慰藉的象征',
        'period.wan.anQiSheng.tooltip.4': '代表对超越现实苦难的渴望',
        'period.wan.anQiSheng.description': '安期生的原型见于《史记·封禅书》，初为"居东海上，卖药为生，能仙去"的方士形象，后在道教典籍中逐步升格为"服食金丹、乘云驾龙"的仙人，如葛洪《抱朴子》称其"服金液，上升太清"。初盛唐游仙诗中，安期生多为"长生典范"，如李白"安期生，卢敖轻举，逸气霄汉"，侧重展现其超脱尘世的仙姿。中唐时期，韦应物等诗人开始赋予其"修道导师"特质，在《马明生遇神女歌》中刻画其"与神女对坐吃枣、复命天皇"的场景，使其贴近人间情态。晚唐时期，安期生的意象重心发生根本转移：文人弱化其"长生"与"修道"属性，突出其"因政治理想落空而遁世"的核心特征，使其成为"避世无门、精神突围"的象征。',
        'period.wan.duLanXiang.tooltip.1': '谪仙形象，曾因过错被贬人间',
        'period.wan.duLanXiang.tooltip.2': '湘江幼女被渔人收养，后遇青童接引',
        'period.wan.duLanXiang.tooltip.3': '留诗赠所恋张硕后升仙归位天界',
        'period.wan.duLanXiang.tooltip.4': '体现仙凡情缘与谪仙赎罪的主题',
        'period.wan.duLanXiang.description': '杜兰香的神话原型最早见于东晋干宝《搜神记》，核心叙事为"湘江幼女被渔人收养，后遇青童接引，自曝\'我仙女也，有过谪人间，今去矣\'，留诗赠所恋张硕后升仙"。此时的形象聚焦"谪仙赎罪、归位天界"，情感色彩淡薄；初盛唐时期，诗人多借其"升仙"特质喻"超脱世俗"，如李白虽未直接题咏，却在《古风》中以"仙女谪人间"暗合其原型。',
        'period.literature.title': '相关文献记载（原文）',
        'period.chu.wangziqiao.title': '王子乔',
        'period.chu.wangziqiao.tooltip.1': '周灵王太子，又名王乔、王晋',
        'period.chu.wangziqiao.tooltip.2': '擅长吹笙，声音如凤鸣',
        'period.chu.wangziqiao.tooltip.3': '由浮丘公接上嵩高山修仙',
        'period.chu.wangziqiao.tooltip.4': '乘白鹤显灵于缑氏山巅',
        'period.chu.wangziqiao.description': '关于王子乔的记载最早见于《列仙传》，亦称王乔、王晋、王子晋，是周灵王的太子。他最爱吹笙，吹出来的声音就像凤鸣一样清脆好听。他曾到伊洛一带地方去玩，道人浮丘公接他上了嵩高山。三十多年之后，他遇见柏良，就告诉这位老朋友："可以通知我的家人，在七月七日那天到缑山头上去等我。"到了那天，王子乔果然跨着白鹤出现在群峰之间，可望而不可即，他只是在空中向家人频频点头致意而已，这样子连续好几天才离去，后人为他在缑氏山立了一个庙以为纪念。',
        'period.chu.xiwangmu.title': '西王母',
        'period.chu.xiwangmu.tooltip.1': '中国古代神话中的女神',
        'period.chu.xiwangmu.tooltip.2': '昆仑仙山的居住者',
        'period.chu.xiwangmu.tooltip.3': '执掌不死之药',
        'period.chu.xiwangmu.tooltip.4': '女仙之宗，管辖天下女仙',
        'period.chu.xiwangmu.description': '西王母是中国古代神话中的女神。文献中较早记载西王母神话的是《山海经》，认为天地之女西王母是具有兽形特征的图腾神。在长生成仙思想极为盛行的汉代，西王母长寿神仙的形象已经确立。汉代民间认为西王母有为人注寿、注福、注禄的功能。道教则对先秦西王母神话进行了吸纳和改造，如在《墉城集仙录》中成为了风姿绰约、雍容华贵的女仙形象。在道教神仙学说中，昆仑仙山有执掌不死之药、管人间生死之权的尊神西王母，并赋予她女仙之宗的神格，宣称天上、天下、三界、十方女子之登仙得道者，都归属西王母管辖。',
        'period.chu.dongfangshuo.title': '东方朔',
        'period.chu.dongfangshuo.tooltip.1': '汉代文学家、政治家',
        'period.chu.dongfangshuo.tooltip.2': '诙谐幽默的形象特点',
        'period.chu.dongfangshuo.tooltip.3': '被传为太白星精下凡',
        'period.chu.dongfangshuo.tooltip.4': '后被列入道教神仙谱系',
        'period.chu.dongfangshuo.description': '两汉关于东方朔的传记，分别载于司马迁《史记》和班固《汉书》中。汉武帝时期，积极进取、追求功名的东方朔因跻身朝廷却长期得不到升迁而流露出怀才不遇的心态，并多次表达了归隐的愿望，因此以求仕者、朝隐者身份为后人熟悉。晋代以后，东方朔的形象发生了变化：庄重的形象逐渐被新型文化消解，更多地呈现出诙谐、不羁的色彩。与此同时，随着神仙学说的流行与系统化，东方朔的形象特征也被"仙化"，相传是太白星精下凡。东方朔被逐渐仙化，继而列入道教神仙谱系之中的现象，是道教为扩大体系的结果。',
        'references.dataset.title': '全唐游仙诗数据集',
        'references.dataset.desc': '本平台使用的全唐游仙诗数据集包含了唐代时期带有仙人意象的全部诗歌作品，按照不同类别进行了分类整理',
        'references.dataset.metadata': '元数据见项目Github仓库master分支',
        'references.dataset.structure.title': '数据集结构',
        'references.dataset.structure.item1': '全唐诗中的游仙诗：全唐诗中所有的游仙诗，以JSON格式存储',
        'references.dataset.structure.item2': '仙人意象汇总：包含全唐诗中出现的所有仙人意象，以CSV格式存储',
        'references.dataset.structure.item3': '仙人意象地理汇总：根据仙人意象汇总，由AI整理、手动微调的仙人与仙境的对应表，以JSON格式存储',
        'references.dataset.source.title': '数据来源',
        'references.dataset.source.text': '本数据集基于《全唐诗》等权威文献资料，经过人工筛选、标注和整理而成，旨在为数字人文研究提供基础数据支持。',
        'references.bibliography.title': '参考文献',
        'references.images.title': '图像资源引用说明',
        'references.images.item1': '为避免版权问题，本平台使用的图像资源如仙人图像，背景图片等均由AI生成，未经授权，不得用于商业用途。',
        'references.images.item2': '古代地图资源： http://ccamc.org/chinese_historical_map',
        'references.images.item2.label': '古代地图资源：',
        'references.images.copyright.title': '版权声明',
        'references.images.copyright.text1': '本平台使用的图像资源仅用于学术研究和文化展示目的。如涉及版权问题，请联系平台管理员进行处理。',
        'references.images.copyright.text2': '对于原创设计的图像资源，未经授权，不得用于商业用途。',
        'references.back': '返回上一页',
        'exhibition.cooccurrence.btn.force': '力导向图 (聚类)',
        'exhibition.cooccurrence.btn.circular': '环形布局',
        'exhibition.cooccurrence.btn.highlight': '高亮核心仙人',
        'exhibition.cooccurrence.btn.reset': '重置显示',
        'exhibition.cooccurrence.stats.title': '网络统计',
        'exhibition.cooccurrence.stats.total': '仙人总数',
        'exhibition.cooccurrence.stats.relations': '共现关系',
        'exhibition.cooccurrence.stats.core': '核心仙人',
        'exhibition.cooccurrence.stats.density': '网络密度',
        'exhibition.cooccurrence.core.title': '核心仙人（按分类排序）',
        'exhibition.cooccurrence.key.title': '关键共现关系',
        'exhibition.cooccurrence.key.strength': '共现强度',
        'exhibition.gis.text1': '通过地理信息系统(GIS)分析，我们可以将唐代游仙诗中出现的仙人按照其所在地进行空间可视化。这些仙人所在地涵盖了核心仙山、天界仙境、山川秘境、水域秘境和道教圣地等多个类别，展现了唐代游仙诗中丰富的空间想象。',
        'exhibition.gis.text2': '地图上的标记点按照不同类别使用不同颜色和图标进行区分，点击标记点可以查看该地点的详细信息，包括所在地名称、类别、相关仙人以及相关介绍。',
        'exhibition.gis.btn.modern': '现代地图',
        'exhibition.gis.btn.ancient': '古代地图',
        'exhibition.gis.legend': '图例',
        'exhibition.gis.legend.core': '核心仙山',
        'exhibition.gis.legend.sky': '天界仙境',
        'exhibition.gis.legend.mountain': '山川秘境',
        'exhibition.gis.legend.water': '水域秘境',
        'exhibition.gis.legend.taoist': '道教圣地',
        'exhibition.gis.text3': '从地图分布可以看出，仙人所在地主要集中在中国的东部和中部地区，其中核心仙山如昆仑山、蓬莱山、终南山等是仙人意象出现频率最高的地点。天界仙境虽然在地理位置上较为集中，但在文学想象中占据重要地位。这些地理分布反映了唐代诗人对传统仙山和道教圣地的认知与想象。',
        'create.page.title': '仙卷创作',
        'create.title': '唐朝游仙志',
        'create.subtitle': '与唐代诗人的精神对话',
        'create.intro.1': '在盛唐的诗意星空下，游仙诗如璀璨星河，',
        'create.intro.2': '照亮了文人墨客的精神归途。',
        'create.intro.3': '李白的天马行空，李商隐的朦胧深邃，',
        'create.intro.4': '李贺的诡奇想象，白居易的入世超然——',
        'create.intro.5': '每一种游仙方式都是独特的精神写照。',
        'create.intro.6': '这个测试将带你穿越千年诗境，',
        'create.intro.7': '找到与你气质最契合的唐代诗人知己。',
        'create.prevBtn': '上一题',
        'create.nextBtn': '下一题',
        'create.resultBtn': '查看结果',
        'create.restartBtn': '重新测试',
        'create.resultTitle': '诗魂测试结果',
        'create.dataSource': '数据来源：《全唐诗》游仙诗数据集',
        'create.question.1.number': '第1题/共8题',
        'create.question.1.text': '1. 你心中理想的超凡体验是：',
        'create.question.1.option.1': '与群仙共饮，畅游九霄',
        'create.question.1.option.2': '独坐云间，静观星移',
        'create.question.1.option.3': '在人间修行，普度众生',
        'create.question.1.option.4': '探索宇宙，思考真理',
        'create.question.2.number': '第2题/共8题',
        'create.question.2.text': '2. 你更相信仙境存在于：',
        'create.question.2.option.1': '现实中的名山大川',
        'create.question.2.option.2': '想象构建的奇幻世界',
        'create.question.2.option.3': '内心的觉悟与修行',
        'create.question.2.option.4': '哲理思辨的境界',
        'create.question.3.number': '第3题/共8题',
        'create.question.3.text': '3. 面对人生困境，你倾向于：',
        'create.question.3.option.1': '理性分析，寻找根本原因',
        'create.question.3.option.2': '寻求情感支持，共同面对',
        'create.question.3.option.3': '制定计划，逐步解决',
        'create.question.3.option.4': '随缘应对，相信转机',
        'create.question.4.number': '第4题/共8题',
        'create.question.4.text': '4. 你的生活方式更接近：',
        'create.question.4.option.1': '井井有条，目标明确',
        'create.question.4.option.2': '随性自在，享受过程',
        'create.question.4.option.3': '服务他人，承担责任',
        'create.question.4.option.4': '独立思考，保持距离',
        'create.question.5.number': '第5题/共8题',
        'create.question.5.text': '5. 在诗歌创作中，你更看重：',
        'create.question.5.option.1': '情感的真诚表达',
        'create.question.5.option.2': '想象的奇特瑰丽',
        'create.question.5.option.3': '现实的深刻反映',
        'create.question.5.option.4': '哲理的深邃表达',
        'create.question.6.number': '第6题/共8题',
        'create.question.6.text': '6. 你希望被后人记住的是：',
        'create.question.6.option.1': '豪迈奔放的个性',
        'create.question.6.option.2': '深邃内敛的智慧',
        'create.question.6.option.3': '踏实可靠的品格',
        'create.question.6.option.4': '自由不羁的灵魂',
        'create.question.7.number': '第7题/共8题',
        'create.question.7.text': '7. 在社交中，你通常是：',
        'create.question.7.option.1': '主动交流，热情洋溢',
        'create.question.7.option.2': '安静观察，深度交谈',
        'create.question.7.option.3': '关注氛围，促进和谐',
        'create.question.7.option.4': '理性分析，提供见解',
        'create.question.8.number': '第8题/共8题',
        'create.question.8.text': '8. 面对理想与现实冲突，你选择：',
        'create.question.8.option.1': '坚守理想，不改初心',
        'create.question.8.option.2': '调整目标，务实前进',
        'create.question.8.option.3': '寻求平衡，兼顾两者',
        'create.question.8.option.4': '重新规划，系统解决',
        'us.page.title': '关于我们',
        'us.page.subtitle': '寻仙唐迹团队致力于用数字人文方法探索唐代游仙诗中的仙人世界',
        'us.team.title': '项目团队',
        'us.team.prev': '上一位成员',
        'us.team.next': '下一位成员',
        'us.research.title': '研究目的与数据来源',
        'us.research.purpose.title': '研究目的',
        'us.research.purpose.text': '游仙诗以仙人、仙境、仙术等虚幻意象为核心，而仙人意象又是核心之核心。对仙人意象的分析有助于深入理解唐代文人游仙诗的精神气象，洞察时代风气与人文思想。将分析结果进行可视化，可以清晰呈现仙人意象的流变脉络，进一步探讨道教发展与社会变迁对游仙诗创作的影响。',
        'us.research.datasource.title': '数据集来源',
        'us.research.datasource.text': '我们在GitHub上发现了按卷数整理、格式规范的《全唐诗》JSON数据集，并结合颜进雄《唐代游仙诗研究》与人工校对，提取出280余首唐代游仙诗。数据集同时提供JSON与CSV两种格式，为后续的语料分析与可视化奠定基础。',
        'us.workflow.title': '工作流（方法论 & 使用工具）',
        'us.workflow.desc': '点击不同阶段查看对应描述与所用方法，进度条将同步展示项目推进情况。',
        'us.workflow.step.0': '29/09-12/10 数据筛选',
        'us.workflow.step.1': '13/10-26/10 数据分析',
        'us.workflow.step.2': '27/10-09/11 研究结论',
        'us.workflow.step.3': '27/10-09/11 网站搭建',
        'us.workflow.step.4': '03/11-16/11 游戏制作',
        'us.workflow.step0.range': '29/09/2025 - 12/10/2025',
        'us.workflow.step0.title': '数据集整理与仙人意象提炼',
        'us.workflow.step0.desc': '基于GitHub全唐诗JSON数据集与《唐代游仙诗研究》，筛选出282首唐代游仙诗，并按四个时期分类，同时按照类型学分析需求整理诗中出现的仙人意象。',
        'us.workflow.step0.tools.title': '方法论 & 使用工具',
        'us.workflow.step0.tool1': '豆包 AI OCR：识别《唐代游仙诗研究》中所有游仙诗信息。',
        'us.workflow.step0.tool2': 'Python + 全唐诗 JSON：匹配诗名、诗人、卷次，生成 JSON/CSV 数据集。',
        'us.workflow.step0.tool3': '接入 DeepSeek 的飞书多维表格：提炼游仙诗中的仙人意象并整理为 CSV。',
        'us.workflow.step1.range': '13/10/2025 - 26/10/2025',
        'us.workflow.step1.title': '多维度数据分析与可视化',
        'us.workflow.step1.desc': '围绕全唐、初唐、盛唐、中唐、晚唐各时期的仙人意象使用情况与代表性诗人展开数据分析，包括统计学分析、仙人意象共现分析和仙人所在地GIS分析。',
        'us.workflow.step1.tool1': 'R：进行数据清洗、统计与建模分析。',
        'us.workflow.step1.tool2': 'Tableau：制作柱状图、扇形图、折线图、热力图等可视化成果。',
        'us.workflow.step1.tool3': 'Python：进行数据清洗和分析，计算仙人意象共现关系。',
        'us.workflow.step1.tool4': 'AI + ECharts：制作唐代游仙诗仙人意象共现网络图。',
        'us.workflow.step1.tool5': 'AI + Leaflet：针对数据库中所有仙人，使用AI总结其所在地，再经手动消歧、筛选校对、制作对应图标后汇总成JSON文件，使用Leaflet导入地图。',
        'us.workflow.step2.range': '27/10/2025 - 09/11/2025',
        'us.workflow.step2.title': '撰写研究发现与结论',
        'us.workflow.step2.desc': '结合数据结果与相关文献，撰写各时期游仙诗仙人意象使用特点、高频意象来源及其背后文化语境，并讨论如女性仙人占比增加等衍生洞见。',
        'us.workflow.step2.tool1': '对照史料与数据洞察，提炼研究观点。',
        'us.workflow.step2.tool2': '归纳分析，形成结构化的研究结论与解读。',
        'us.workflow.step3.range': '27/10/2025 - 09/11/2025',
        'us.workflow.step3.title': '网站框架搭建',
        'us.workflow.step3.desc': '搭建寻仙唐迹的整体信息架构与交互流程，让研究成果以数字人文的方式呈现。',
        'us.workflow.step3.tool1': '方法论：以静态展示为主，侧重叙事性和可持续维护。',
        'us.workflow.step3.tool2': '技术栈：【前端】HTML5、Tailwind CSS、JavaScript；【后端】Python、 Flask；【数据库】JSON本地加载；【数据可视化】Chart.js；',
        'us.workflow.step4.range': '03/11/2025 - 16/11/2025',
        'us.workflow.step4.title': '制作"仙卷创作"互动游戏',
        'us.workflow.step4.desc': '设计"唐朝游仙志"小游戏，通过问答让用户找到与自己气质契合的诗人，并选择喜爱的仙人意象和仙境场景，生成属于自己的"唐代游仙诗"。',
        'us.workflow.step4.tool1': 'Figma：设计界面与交互流程。',
        'us.workflow.step4.tool2': '荣格八维决策树：进行诗人性格分类并设置适配题目。',
        'us.workflow.step4.tool3': 'Deep Seek API + Doubao 生图 API：实时生成诗句与配图，实现沉浸式体验。'
    },
    en: {
        'site.title': 'Tracing the Immortals in Tang Wonderland Traveling Poems',
        'site.subtitle': 'Immortals Image of Wonderland Traveling Poems Written by Poets in Tang Dynasty',
        'nav.home': 'Home',
        'nav.immortals': 'Immortals Atlas',
        'nav.exhibition': 'Digital Gallery',
        'nav.create': 'Poem Creator',
        'nav.about': 'About Us',
        'theme.title': 'Theme Mode',
        'theme.default': 'Light',
        'theme.dark': 'Dark',
        'theme.eye': 'Green',
        'index.subtitle': 'Immortals Image of Wonderland Traveling Poems Written by Poets in Tang Dynasty',
        'index.about': 'About This Project',
        'index.explore': 'Explore',
        'index.immortals.title': 'Immortals Atlas',
        'index.immortals.desc': 'Explore Various Immortal Figures and Legends',
        'index.immortals.detail': 'Systematically categorizes the types of immortals in Tang Wonderland Traveling Poems—from ordinary humans who becomes immortals, to typed immortals—revealing a vibrant and diverse cosmos of immortal figures.',
        'index.immortals.enter': 'Explore',
        'index.exhibition.title': 'Digital Gallery',
        'index.exhibition.desc': 'Immortal Images in Tang Wonderland Traveling Poems',
        'index.exhibition.detail': 'Explore the evolution of Wonderland Traveling Poetry, trace the development, distribution, and origins of immortal image across the Tang Dynasty and its distinct periods, and discover the unique literary character of this enchanting genre.',
        'index.exhibition.enter': 'Go',
        'index.create.title': 'Poem Creator',
        'index.create.desc': 'Create Your Own Wonderland Traveling Poem',
        'index.create.detail': 'Take the “Discover Your Tang Dynasty Poet Soul” quiz to find a poet whose spirit resonates with yours. Then, select your favorite immortal motifs and celestial settings to generate a personalized poem in the style of Tang wonderland traveling poem.',
        'index.create.enter': 'Start',
        'index.stats.poets': 'Tang Poets',
        'index.stats.poems': 'Wonderland Traveling Poems',
        'index.stats.immortals': 'Image of Immortals',
        'index.about.text1': 'The Tang Dynasty represents a golden age radiant with splendor in the history of Chinese poetry. Due to the “kinship” between the imperial house of Tang and Laozi, the founding sage of Daoism, the dynasty witnessed a nationwide flourishing of Daoist beliefs and practices. At the heart of this religious tradition lay the concept of immortals, which spread pervasively across society and permeated all social strata.',
        'index.about.text2': 'The Daoist pursuit of longevity resonated profoundly with the literati\'s yearning for earthly transcendence and spiritual immortality. Enriched with mythological lore and religious symbolism, Daoism offered a fertile ground of image and inspiration that greatly appealed to Tang scholars. Their fascination with wonderland traveling—nourished their spiritual blossoms, thereby invigorating the creation of poetry.',
        'index.about.text3': 'It was within this cultural milieu that the genre of Wonderland Traveling Poems (遊仙詩) reached unprecedented prosperity.',
        'index.about.quote': '"霓為衣兮風為馬，雲之君兮紛紛而來下"',
        'index.about.quote.author': '— 李白《夢遊天姥吟留別》',
        'index.about.image.caption': 'In Tang Wonderland Traveling Poems, the image of immortals often merges seamlessly with natural landscapes—mountains, rivers, mist, and stars.',
        'index.explore.desc': 'Delve into the world of immortals in Tang Wonderland Traveling Poems, explore the rich imagination and spiritual pursuits of the ancients',
        'footer.description': 'A Digital Humanities Museum of Immortal Image in Tang Wonderland Traveling Poems, dedicated to recreating the immortal world depicted by Tang poets through digital technology.',
        'footer.quickLinks': 'Quick Links',
        'footer.resources': 'Resources',
        'footer.dataset': 'Tang Wonderland Traveling Poems Dataset',
        'footer.references': 'References',
        'footer.images': 'Image Credits',
        'footer.contact': 'Contact Us',
        'footer.location': 'China · Hong Kong · The Hong Kong Polytechnic University',
        'footer.github': 'GitHub Repository',
        'footer.copyright': '© 2025 Tracing the Immortals in Tang Wonderland Traveling Poems - Digital Humanities Museum of Immortals Image in Tang Wonderland Traveling Poems. All Rights Reserved.',
        'footer.disclaimer': 'This project is for academic research and cultural dissemination only.',
        'exhibition.title': 'Immortals Image of Wonderland Traveling Poems Written by Poets in Tang Dynasty',
        'exhibition.subtitle': 'Delve into the evolving patterns of Wonderland Traveling Poems across different Tang periods, examining the distribution and co-occurrence of immortal images, along with GIS-based mapping of their dwellings',
        'exhibition.nav.visualization': 'Visualization',
        'exhibition.nav.overview': 'Overview',
        'exhibition.nav.period': 'Period Comparison',
        'exhibition.nav.typology': 'Typology Research',
        'exhibition.nav.gender': 'Gender Study',
        'exhibition.nav.type': 'Type Study',
        'exhibition.nav.cooccurrence': 'Immortals Image Co-occurrence Analysis',
        'exhibition.nav.gis': 'Immortal Location GIS Analysis',
        // Chart translations
        'chart.tooltip.occurrence': 'Occurrence',
        'chart.tooltip.gender': 'Gender',
        'chart.tooltip.times': 'poems',
        'chart.tooltip.poems': 'poems',
        'chart.tooltip.percentage': 'percentage',
        'chart.tooltip.people': 'immortals',
        'chart.tooltip.female.ratio': 'Female Immortals Ratio',
        'chart.tooltip.max': 'Maximum',
        'chart.tooltip.category': 'Category',
        'chart.tooltip.strength': 'Strength',
        'chart.axis.occurrence': 'Occurrence',
        'chart.axis.poems': 'Poems',
        'chart.axis.percentage': 'Percentage',
        'chart.series.gender': 'Gender',
        'chart.series.period.percentage': 'Period Percentage',
        'chart.series.poem.count': 'Wonderland Traveling Poems Count',
        'chart.series.male.immortals': 'Male Immortals',
        'chart.series.female.immortals': 'Female Immortals',
        'chart.series.female.ratio': 'Female Immortals Ratio',
        'chart.series.occurrence': 'Occurrence',
        'chart.series.immortal.frequency': 'Immortals Image Frequency',
        'chart.legend.male': 'Male',
        'chart.legend.female': 'Female',
        'chart.legend.mortal.immortal': 'Ordinary Humans Who Becomes Immortals',
        'chart.legend.distinct.immortals': 'Immortals With Distinct Individual Characteristic',
        'chart.legend.typed.immortals': 'Typed Immortals',
        'chart.network.title': 'Immortals Image Co-occurrence Network',
        'chart.network.subtitle': 'Node size represents frequency, line color represents relationship source',
        'chart.period.chu': 'Beginning Tang',
        'chart.period.sheng': 'Flourishing Tang',
        'chart.period.zhong': 'Middle Tang',
        'chart.period.wan': 'Late Tang',
        'exhibition.overview.title': 'Overview of Wonderland Traveling Poems',
        'exhibition.overview.text1': 'The Wonderland Traveling Poems expresses the poet\'s disillusionment with the mundane world or longing for eternal life through themes such as reclusive escapism, seeking transcendence, and journeys through celestial realms. Central to this poetic tradition are ethereal images of immortals (仙人), wonderland (仙境), and alchemy (仙術)—among which the figure of the immortal stands as the quintessential motif.',
        'exhibition.overview.text2': 'Let us now embark on a journey to explore the image of the immortal and its evolution within Tang dynasty Wonderland Traveling Poems, and through it, glimpse the ethos and intellectual currents of that remarkable era.',
        'immortals.title': 'Atlas of Immortals Image in Tang Wonderland Traveling Poems',
        'immortals.subtitle': 'Explore various immortal figures in Tang Wonderland Traveling Poems, experiencing the ancients\' rich imagination of wonderlands and their longing for immortality',
        'immortals.filter.all': 'All Immortals',
        'immortals.filter.distinct': 'Immortals With Distinct Individual Characteristic',
        'immortals.filter.mortal': 'Ordinary Humans Who Becomes Immortals',
        'immortals.filter.typed': 'Typed Immortals',
        'immortals.filter.female': 'Female',
        'immortals.filter.male': 'Male',
        'immortals.period.filter': 'Period Filter:',
        'immortals.period.all': 'Entire Tang',
        'immortals.period.chu': 'Beginning Tang',
        'immortals.period.sheng': 'Flourishing Tang',
        'immortals.period.zhong': 'Middle Tang',
        'immortals.period.wan': 'Late Tang',
        'immortals.sort.label': 'Sort Method:',
        'immortals.sort.desc': 'Descending (High to Low)',
        'immortals.sort.asc': 'Ascending (Low to High)',
        'immortals.reset': 'Reset',
        'immortals.card.mention': 'Mentions',
        'exhibition.chart.period.percentage': 'Percentage of Wonderland Traveling Poems by Period in Tang Dynasty',
        'exhibition.chart.period.count': 'Number of Wonderland Traveling Poems by Period in Tang Dynasty',
        'exhibition.overview.quanTangShi': 'Quan Tang Shi 《全唐詩》 is a comprehensive collection of Tang poetry compiled in 1705 under the patronage of the Kangxi Emperor during the Qing Dynasty. It encompasses over 48,900 poems by more than 2,200 authors, organized into 900 volumes ("得詩四萬八千九百餘首，凡貳仟貳佰餘人，釐為九百卷"). According to Yan Jinxiong\'s literature Research on Wonderland Traveling Poems in Tang Dynasty, the anthology contains 282 Wonderland Traveling Poems, accounting for about 0.94% of the total. These are distributed across the four periods of the Tang as follows: 52 from the Beginning Tang (初唐), 79 from the Flourishing Age (盛唐), 67 from the Middle Tang (中唐) , and 84 from the Late Tang (晚唐).',
        'exhibition.poet.title': 'Number of Wonderland Traveling Poems by Tang Poets',
        'exhibition.poet.text1': 'The 282 Wonderland Traveling Poems were composed by 83 Tang literati.The distribution of poems among these authors is strikingly uneven. The “Immortal Poet” Li Bai leads by a remarkable margin with 57 Wonderland Traveling Poems, accounting for 20.2% of the total. This concentration underscores the profound role of individual genius and the outsized influence of a few literary masters within the genre.',
        'exhibition.poet.text2': 'The charts below displays the top 20 poets by number of Wonderland Traveling Poems. As the data reveals, only a small group—including Li Bai, Cao Tang, and Song Zhiwen—produced a significant body of work in this tradition, while the majority composed only one or two such poems.',
        'exhibition.poet.chart.title': 'Ranking of Tang Poets by Number of Wonderland Traveling Poems (Top 20)',
        'exhibition.poet.chart.text': 'The chart shows the ranking of the number of Wonderland Traveling Poems in the Tang Dynasty. Li Bai, Cao Tang, Song Zhiwen, Lu Guimeng, and Li Shangyin are the Tang literati who wrote the most Wonderland Traveling Poems, with Li Bai writing as many as 57 poems.',
        'exhibition.period.title': 'Distribution of Immortals Image Across Different Periods',
        'exhibition.period.text1': 'Of the 282 Tang Dynasty Wonderland Traveling Poems, image of immortals appears a total of 340 times, encompassing 135 distinct immortal figures. The frequency and number of these immortal motifs also vary across different periods.',
        'exhibition.period.chart.frequency': 'Frequency of Immortals Image by Period in Tang Dynasty',
        'exhibition.period.chart.top20': 'Most Frequently Appearing Immortals Image in Tang Dynasty Wonderland Traveling Poems (Top 20)',
        'exhibition.period.chart.heatmap': 'Heatmap of Temporal Distribution of Major Immortals Image',
        'exhibition.period.chart.trend': 'Temporal Distribution and Popularity Trends of Major Immortals Image (Top 5)',
        'exhibition.period.chart.distribution': 'Temporal Distribution',
        'exhibition.period.chart.popularity': 'Popularity Trend',
        'exhibition.period.text2': 'The chart below presents a ranking of the most frequently appearing immortals in Tang dynasty Wonderland Traveling Poems. The Queen Mother of the West (西王母), Wang Ziqiao (王子喬), Ma Gu (麻姑), the Jade Emperor (玉皇大帝), and Nong Yu (弄玉) stand out as the most recurrent immortal images, with their occurrences fluctuating across different periods.',
        'exhibition.period.text3': 'From this ranking, we can also observe that among the most commonly depicted immortals, female immortals are no less numerous than their male counterparts.',
        'exhibition.gender.title': 'Gender Study of Immortals Image',
        'exhibition.gender.text1': 'Among these 135 immortal figures, 95 are male and 40 are female.',
        'exhibition.gender.text2': 'There is a fascinating trend: the proportion of female immortals gradually increases over time, even surpassing that of male immortals during the Middle of the Tang Dynasty.',
        'exhibition.gender.chart.distribution': 'Gender Distribution of Immortals Image',
        'exhibition.gender.chart.period': 'Gender Distribution of Immortals Image by Period in Tang Dynasty',
        'exhibition.gender.chart.trend': 'Trend of Female Immortals Image Proportion',
        'exhibition.gender.tooltip': 'Why is the proportion of female immortals image gradually increasing?',
        'exhibition.gender.text3': 'After the An Lushan Rebellion during the Middle of the Tang Dynasty, societal morals shifted, and people turned toward earthly pleasures. This led to a widespread culture of consorting with courtesans (狎妓) and pursuing relationships with female Daoist (女冠). To Middele Tang literati, female immortals embodied extraordinary beauty, satisfying their desires for indulgence and romance. Moreover, these female immortals were well-versed in Daoist arts; winning their favor was seen as a pathway to attaining immortality.',
        'exhibition.gender.text4': 'Thus, the romanticization of divine encounters (艷情的仙化) became a common theme in the Wonderland Traveling Poems of this period. Relationships between male and female Daoists (男女道士之戀), affairs between scholars and female Daoists (士人與女冠之戀), scholars with courtesans (士人與妓女之戀), earthly romances (俗世中的男女之戀), and even imperial loves (帝妃之戀)—all were transposed into wonderland and expressed through the medium of immortal image.',
        'exhibition.type.title': 'Type Study of Immortals Image',
        'exhibition.type.text1': 'Based on their conceptual connotations, the immortal image in Tang dynasty Wonderland Traveling Poems can be classified into three broad categories: Typed Immortals (類型化仙人), Ordinary Humans Who Becomes Immortals (凡人成仙者), and Immortals With Distinct Individual Characteristic (個性鮮明的天界眾仙).',
        'exhibition.type.text2': '· Typed Immortals refer to those figures who lack distinct individuality and instead serve as symbolic representatives of the immortal realm, such as the “Yu Nü” (玉女) or “Yu Ren” (羽人);',
        'exhibition.type.text3': '· Ordinary Humans Who Becomes Immortals, as the name suggests, are those who began as ordinary humans but later attained immortality through encounters with immortals, dedicated spiritual practice, or consuming elixirs. Notable examples include Wang Ziqiao (王子喬), the Yellow Emperor (黃帝), and Huang Chuping (黃初平);',
        'exhibition.type.text4': '· Immortals With Distinct Individual Characteristic are immortals who received special attention and elaborate depiction by the poets, endowing them with striking individuality—figures such as the Queen Mother of the West (西王母), the Jade Emperor (玉皇大帝), and Du Lanxiang (杜蘭香).',
        'exhibition.type.text5': 'Among these 135 immortal figures, nearly half belong to the category of ordinary humans who becomes immortals. Tang poets incorporated such image into their Wonderland Traveling Poems to express their own ideals of transcendence and their devout commitment to Daoist belief.',
        'exhibition.type.chart.percentage': 'Proportion of Immortals Image by Type',
        'exhibition.type.chart.count': 'Number of Immortals Image by Type',
        'exhibition.cooccurrence.text1': 'Based on social network analysis of co-occurrence data related to immortals in Tang Dynasty Wonderland Traveling Poems, we can explore the relationships among different deities through visualized network graphs. In these graphs, nodes represent individual immortals, with node sizes corresponding to their frequency of appearance. The connecting lines indicate co-occurrence relationships between immortals, while the thickness and color of these lines reflect the strength of their associations.',
        'create.generate.btn': 'Generate Poem',
        'create.generate.generating': 'Generating...',
        'create.generate.placeholder': 'After generating the poetry, Doubao image generation can be called to display wonderland imagery.',
        'create.generate.style': 'Style:',
        'create.generate.style.pending': 'Pending',
        'create.generate.success.title': 'Poem Generated',
        'create.generate.success.text': 'Based on the poetic soul style and selected imagery, both the poem and wonderland illustration have been generated.',
        'create.generate.success.confirm': 'Confirm',
        'create.generate.pending': 'Test Pending',
        'create.panel.description': 'Please complete the test first to inherit the poet\'s character, then select imagery and scenes to generate your exclusive poetry.',
        'create.panel.currentPoet': 'Current Poet:',
        'create.panel.backToTest': 'Back to Test',
        'create.panel.imagery': 'Immortal Image',
        'create.panel.scene': 'Wonderland',
        'create.panel.selected.imagery': 'Image:',
        'create.panel.selected.scene': 'Wonderland:',
        'create.page.description': 'First complete the “Discover Your Tang Dynasty Poet Soul” test to find a poet that matches your temperament, then select immortal image and wonderland in their style to generate your own five-character quatrain.',
        'period.nav.all': 'Entire Tang',
        'period.nav.chu': 'Beginning Tang',
        'period.nav.sheng': 'Flourishing Tang',
        'period.nav.zhong': 'Middle Tang',
        'period.nav.wan': 'Late Tang',
        'period.nav.visualization': 'Visualization',
        'period.nav.overview': 'Overview',
        'period.nav.poems': 'Representative Poems',
        'period.nav.development': 'Development Status',
        'period.nav.image': 'Sources of Major Immortals Image',
        'period.subtitle': 'Explore the development status, distribution, and sources of immortals image in Wonderland Traveling Poems during the {period} period, experiencing the unique style of this era.',
        'period.chu.subtitle': 'Explore the development status, distribution, and sources of immortals image in Wonderland Traveling Poems during the Beginning Tang period, experiencing the unique style of this era.',
        'period.sheng.subtitle': 'Explore the development status, distribution, and sources of immortals image in Wonderland Traveling Poems during the Flourishing Tang period, experiencing the unique style of this era.',
        'period.zhong.subtitle': 'Explore the development status, distribution, and sources of immortals image in Wonderland Traveling Poems during the Middle Tang period, experiencing the unique style of this era.',
        'period.wan.subtitle': 'Explore the development status, distribution, and sources of immortals image in Wonderland Traveling Poems during the Late Tang period, experiencing the unique style of this era.',
        'period.chu.title': 'The Beginning of the Tang Dynasty——A prologue to the future, a heir to the past',
        'period.sheng.title': 'The Flourishing Age of the Tang Dynasty——A magnificent spectacle reaching its peak',
        'period.zhong.title': 'The Middle of the Tang Dynasty——Broken Wings in the Clouds, Falling to the Human World',
        'period.wan.title': 'The Later Tang Dynasty——The Rosy Glow Shines Brightly',
        'period.history': 'Historical Background',
        'period.chu.history': 'During the Beginning Tang period (618-704 CE), the Li Tang royal family claimed descent from Laozi (Li Er) and vigorously promoted Taoism. This policy led to the widespread dissemination of Taoism in society, and Wonderland Traveling Poems, as an important carrier of Taoist culture, flourished accordingly.',
        'period.chu.overview': 'Notwithstanding the remarkable breadth and richness of Wonderland Traveling Poems throughout the Tang Dynasty, their development was uneven across different periods. The Beginning of the Tang Dynasty, in particular, dawned with relative quietude in the creation of such poems. This can be attributed to the imperial house\'s patronage of Daoism, which was largely motivated by political aims to enhance the dynasty\'s prestige rather than a sincere belief in transcendence. Moreover, the prevailing social contentment, born of the dynasty\'s robust and flourishing power in its formative years, also contributed to this subdued poetic engagement with wonderland traveling.',
        'period.feature': 'Features',
        'period.chu.feature.1': 'Continuing the Southern Dynasties tradition, but gradually breaking away from the influence of metaphysical poetry',
        'period.chu.feature.2': 'Active creation by court literati, with court poetry occupying an important position',
        'period.chu.feature.3': 'Themes mostly depict wonderlands and praise immortals, with less expression of personal emotions',
        'period.chu.feature.4': 'Influenced by Taoist thought, emphasizing seclusion and transcendence',
        'period.chu.feature.5': 'Elegant and ornate language, emphasizing parallelism and allusions',
        'period.development.text1': 'The number of {period} Wonderland Traveling Poems is only {count}, with the frequency and number of immortals image being {freq} and {num} respectively, the least among the four periods of the Tang Dynasty.',
        'period.development.text2': 'The number of {period} Wonderland Traveling Poems\' poets is also relatively scarce, with only {poets}. Representative writers include {names}.',
        'period.chu.development.text1': 'The number of Beginning Tang Wonderland Traveling Poems is only 52, with the frequency and number of immortals image being 17 and 11 respectively, the least among the four periods of the Tang Dynasty.',
        'period.chu.development.text2': 'The number of Beginning Tang Wonderland Traveling Poems\' poets is also relatively scarce, with only 20. Representative writers include Song Zhiwen, Lu Zhaoling, Shen Quanqi, and Wang Bo.',
        'period.chu.development.text3': 'During this era, figures such as Wang Ziqiao (王子喬), the Queen Mother of the West (西王母), Fu Qiugong (浮丘公), and Dong Fangshuo (東方朔) were more frequently evoked, as seen in works like Song Zhiwen\'s 《王子喬》 and 《鳳笙曲》 with lines such as “王子喬，愛神仙，七月七日上賓天” and “憶昔王子晉，鳳笙遊雲空”, as well as Shen Quanqi\'s 《幸白鹿觀應制》: “唯應問王母，桃作幾時花” and Li Yi\'s 《雜曲歌辭：桃花行》: “莫將秋宴傳王母，來比春華壽聖皇.” Beyond these, few other immortal figures make a noticeable appearance. Moreover, the immortal image of this period was dominated by male immortals and ordinary humans who becomes immortals, largely following the earlier tradition of “celebrating the charm of immortal figures” established in pre-Tang Wonderland Traveling Poems.',
        'period.chart.percentage': '{period} Wonderland Traveling Poems Proportion',
        'period.chart.poets': 'Ranking of {period} Poets by Number of Wonderland Traveling Poems',
        'period.chu.chart.percentage': 'Beginning Tang Wonderland Traveling Poems Proportion',
        'period.chu.chart.poets': 'Ranking of Beginning Tang Poets by Number of Wonderland Traveling Poems',
        'period.sheng.chart.percentage': 'Flourishing Tang Wonderland Traveling Poems Proportion',
        'period.sheng.chart.poets': 'Ranking of Flourishing Tang Poets by Number of Wonderland Traveling Poems',
        'period.sheng.chart.percentage.name': 'Wonderland Traveling Poems Proportion',
        'period.sheng.chart.poets.name': 'Number of Works',
        'period.sheng.chart.immortals.name': 'Frequency of Appearance',
        'period.sheng.chart.times': 'poems',
        'period.sheng.chart.male': 'Male',
        'period.sheng.chart.female': 'Female',
        'period.sheng.chart.type.mortal': 'Ordinary Humans Who Becomes Immortals',
        'period.sheng.chart.type.distinct': 'Immortals With Distinct Individual Characteristic',
        'period.sheng.chart.type.typed': 'Typed Immortals',
        'period.sheng.chart.period.sheng': 'Flourishing Tang',
        'period.sheng.chart.period.all': 'Entire Tang',
        'period.zhong.chart.percentage': 'Middle Tang Wonderland Traveling Poems Proportion',
        'period.zhong.chart.poets': 'Ranking of Middle Tang Poets by Number of Wonderland Traveling Poems',
        'period.wan.chart.percentage': 'Late Tang Wonderland Traveling Poems Proportion',
        'period.wan.chart.poets': 'Ranking of Late Tang Poets by Number of Wonderland Traveling Poems',
        'period.chart.immortals': 'Ranking of Immortals Image Frequency',
        'period.chart.typeGender': 'Distribution of Immortals Image by Type and Gender',
        'period.sheng.history': 'During the Flourishing Tang period (705-770 CE), the economy prospered, culture was open and diverse, and thought was free and active. The royal family\'s active promotion of Taoism provided fertile ground for Wonderland Traveling Poems creation. During this period, Wonderland Traveling Poems experienced a significant flourishing.',
        'period.sheng.overview': 'The Flourishing Tang was a golden age for the development of wonderland-themed literary works. Unlike the relatively quiet situation of Beginning Tang Wonderland Traveling Poems creation, Flourishing Tang Wonderland Traveling Poems experienced a significant flourishing—the number of poems increased substantially, and the immortals image contained in the poems became particularly vivid and profound.',
        'period.zhong.history': 'During the Middle Tang period (771-835 CE), the wounds of the An-Shi Rebellion had not yet healed, political chaos such as regional separatism and eunuch autocracy occurred frequently, and literati generally fell into a dual dilemma of ideal and reality. Against this historical background, Wonderland Traveling Poems became an important literary form for literati to vent their inner anxiety and seek spiritual solace.',
        'period.zhong.overview': 'The flames of the An-Shi Rebellion ended the prosperity of the Flourishing Tang, plunging the Tang Dynasty into a historical turning point from prosperity to decline. The political changes, economic decline, and people\'s suffering caused by social turmoil profoundly reshaped the spiritual world of literati—the confident and enterprising sentiment of the Flourishing Tang gradually dissolved, replaced by confusion, anxiety, and an urgent need for spiritual comfort.',
        'period.wan.history': 'During the Late Tang period (836-907 CE), the flames of the Huang Chao Rebellion and the iron hooves of regional separatism completely shattered the last dream of revival of the Tang Dynasty, dragging society into a fragmented end-of-dynasty picture. Political corruption, people\'s suffering, and the shadow of the dynasty\'s collapse together brewed the spiritual bitterness of Late Tang literati.',
        'period.wan.overview': 'The flames of the Huang Chao Rebellion and the iron hooves of regional separatism completely shattered the last dream of revival of the Tang Dynasty, dragging society into a fragmented end-of-dynasty picture. Political corruption, people\'s suffering, and the shadow of the dynasty\'s collapse together brewed the spiritual bitterness of Late Tang literati—the confident spirit of the Flourishing Tang had long been worn away, and the confusion and anxiety of the Middle Tang had settled into a deeper sense of disillusionment and powerlessness.',
        'period.zhong.overview2': 'Taoism, as an important spiritual refuge at that time, was reinterpreted by Middle Tang literati: they no longer clung to the romantic transcendence of Lao-Zhuang metaphysics, but instead sought paths for spiritual peace from Taoist principles and immortal legends, either using immortal tales to explain cultivation concepts, or using immortals image to reflect real-world dilemmas, or endowing immortals with human emotions to express personal feelings.',
        'period.zhong.feature.1': 'Coexistence of worldly concern and spiritual transcendence',
        'period.zhong.feature.2': 'Fusion of immortal legends and personal emotions',
        'period.zhong.feature.3': 'Pursuit of spiritual peace and comfort',
        'period.zhong.feature.4': 'More secularized depiction of wonderlands',
        'period.zhong.development.text1': 'The number of Wonderland Traveling Poems in the Middle Tang period decreased to 67 compared to the Flourishing Tang, with the frequency and number of immortals image being 72 and 43 respectively.',
        'period.zhong.development.text2': 'The number of poets in the Middle Tang reached the peak of the four periods, with 29 Wonderland Traveling Poems\' poets recorded in works.',
        'period.zhong.development.text3': 'The number of Wonderland Traveling Poems in the Middle Tang period decreased to 67 compared to the Flourishing Tang, with the frequency and number of immortals image being 72 and 43 respectively. During this period, new immortals image such as "Chang\'e" and "Guang Chengzi" appeared. For example, in Li He\'s "Peony Planting Song": "How high is the osmanthus tree in the moon? Ask the tree cutter from Xihe. Chang\'e pounds medicine endlessly, the jade maiden plays pitch-pot without return." And in Meng Jiao\'s "Seeking Immortality Song": "Guang Chengzi loves the divine cauldron, Huainan likes the elixir scriptures." From the perspective of immortal types, Wonderland Traveling Poems first appeared with ugly immortals image, that is, immortals who were deliberately vilified in appearance, actions, and character, and were ultimately negated and criticized by poets. In addition, female immortals image increased significantly and showed a tendency toward eroticism. Reviewing Middle Tang Wonderland Traveling Poems, we find that the number of female immortals image is about to exceed that of male immortals image.',
        'period.zhong.changE.tooltip.1': 'Moon goddess in ancient Chinese mythology',
        'period.zhong.changE.tooltip.2': 'Fled to the moon after stealing the elixir of immortality',
        'period.zhong.changE.tooltip.3': 'Symbolizes the contradiction between immortality and loneliness',
        'period.zhong.changE.tooltip.4': 'Became an emotional refuge for literati in the Middle Tang',
        'period.zhong.changE.description': 'Chang\'e\'s mythological prototype first appeared in "Classic of Mountains and Seas," with her initial image as "Di Jun\'s wife Chang Xi," who controlled the order of the sun, moon, and stars. By the Han Dynasty, "Huainanzi·Lanming Xun" first fully recorded the legend of "Chang\'e Fleeing to the Moon": "Yi requested the elixir of immortality from the Queen Mother of the West, Heng\'e stole it and fled to the moon, feeling melancholy and lost, with nothing to continue." At this time, Chang\'e was still a mortal woman full of melancholy after "stealing the elixir and fleeing to the moon," not completely detached from human emotions. During the Wei, Jin, and Northern and Southern Dynasties, Taoism transformed her image, and "In Search of the Supernatural" associated her with the "toad" imagery, endowing her with the contradictory attribute of "immortality yet loneliness." In the Early and Flourishing Tang periods, Chang\'e mostly appeared in Wonderland Traveling Poems as the ethereal image of "moon goddess," such as in Li Bai\'s "Raising My Cup to Ask the Moon": "The white rabbit pounds medicine autumn and spring, with whom does Chang\'e live alone?" Although loneliness was mentioned, her inner world was not deeply portrayed. Middle Tang literati inherited the core prototype of "fleeing to the moon" and "loneliness," but broke through the single image framework of previous generations, combining the mood of the times to endow her with more complex emotional connotations and realistic metaphors, transforming "Chang\'e" from a simple "moon immortal symbol" into an imagery carrier bearing the life experiences of literati.',
        'period.zhong.guangChengZi.tooltip.1': 'Embodiment of Taoist non-action governance concept',
        'period.zhong.guangChengZi.tooltip.2': 'Lived on Mount Kongtong, taught the Yellow Emperor the way of cultivation',
        'period.zhong.guangChengZi.tooltip.3': 'Advocated the cultivation method of "embracing spirit in stillness"',
        'period.zhong.guangChengZi.tooltip.4': 'Became a cultivation model in the Middle Tang',
        'period.zhong.guangChengZi.description': 'Guang Chengzi\'s prototype comes from "Zhuangzi·Zai You," embodying the Taoist concepts of "non-action governance" and "cultivation and health preservation": Legend has it that he lived on Mount Kongtong, and the Yellow Emperor once went to ask about the Way. Guang Chengzi answered with "The essence of the ultimate Way is profound and obscure; the extremity of the ultimate Way is dim and silent. Do not look, do not listen, embrace the spirit in stillness, and the form will naturally be correct," advocating "removing desires and preserving truth" and "uniting with the Way." At this time, his image was still a "Taoist sage," not fully incorporated into the Taoist immortal pantheon. After the rise of Taoism, Guang Chengzi\'s image was gradually "immortalized": Ge Hong of the Eastern Jin Dynasty\'s "Baopuzi·Inner Chapters" listed him as an "immortal," saying he "took golden elixir, rode clouds and dragons, and ascended to the Great Purity." The Northern and Southern Dynasties\' "Records of the Primordial Perfected Immortals" further endowed him with the identity of "Taoist immortal official," ranking alongside "Primordial Heavenly Worthy" and "Supreme Lord Lao." During the Middle Tang period, Taoist "inner alchemy" arose, and literati\'s understanding of "cultivation" shifted from "taking golden elixirs" to "inner stillness." Guang Chengzi\'s core idea of "embracing spirit in stillness" was rediscovered, becoming an important symbol for literati to resist real-world anxiety and pursue spiritual peace—his imagery also transformed from "distant immortal official" to "perceptible cultivation model."',
        'period.wan.overview2': 'Taoism, as a spiritual thread running through the Tang Dynasty, achieved ultimate harmony with the literati\'s mentality at this time: literati no longer used immortal tales to express worldly ideals, nor did they only use immortals image to settle their minds. Instead, they transformed the Taoist immortal world into a mirror for observing reality, venting sorrow, and questioning fate. This transformation of the spirit of the times gave Late Tang Wonderland Traveling Poems its unique style of "writing sorrow through immortals, using illusion to metaphorize reality": immortals image completely shed its sacred halo, either carrying the pain of love\'s disillusionment, symbolizing the helplessness of having no escape from the world, or becoming a vehicle for criticizing reality.',
        'period.wan.overview3': 'In the complex spectrum of immortals image in the Late Tang, "Xiao Shi," "An Qisheng," and "Jade Emperor" constitute three highly representative dimensions—they respectively correspond to literati\'s melancholy about emotional destinations, their search for individual paths, and their questioning of the order of fate. They are both a concentrated reflection of Late Tang social psychology and witness to the final turn of Tang Dynasty Wonderland Traveling Poems from romantic transcendence to realistic lament.',
        'period.wan.feature.1': 'Concentrated embodiment of end-of-dynasty sentiment and disillusionment',
        'period.wan.feature.2': 'Symbolic system of writing sorrow through immortals, using illusion to metaphorize reality',
        'period.wan.feature.3': 'Secularization and tragic turn of immortals image',
        'period.wan.feature.4': 'Questioning of the order of fate and inquiry into individual destiny',
        'period.wan.development.text1': 'The number of Wonderland Traveling Poems in the Late Tang period reached 84, with the frequency and types of immortals image being 146 and 80 respectively.',
        'period.wan.development.text2': 'The number of Wonderland Traveling Poems\' poets in this period decreased, with 24 poets recorded in works, among whom Cao Tang created the most.',
        'period.wan.development.text3': 'During this period, "An Qisheng" and "Du Lanxiang" appeared. For example, in Wei Zhuang\'s "Visiting a Friend in Xunyang Without Meeting": "Not seeing An Qi, I regret going upstairs, lonely people face the egret\'s sorrow." In Cao Tang\'s "Small Wonderland Traveling Poems" (No. 37): "An Qi lifted the jade cup, discussing kingship and hegemony together." In Li Shangyin\'s "Revisiting the Saintess Shrine": "E Lu Hua comes without a fixed place, Du Lanxiang leaves without delay." Although the immortals of this period were still mainly "mortals who became immortals" and "distinctive celestial immortals," Late Tang Wonderland Traveling Poems\' poets depicted them according to real-life experiences, achieving complete humanization of immortals image, with immortal aura fading and human aura intensifying.',
        'period.wan.anQiSheng.tooltip.1': 'Immortal in ancient legends, often dwelling in the East Sea',
        'period.wan.anQiSheng.tooltip.2': 'Qin Shi Huang once sent people to seek his art of immortality',
        'period.wan.anQiSheng.tooltip.3': 'Became a symbol of spiritual comfort in the Late Tang',
        'period.wan.anQiSheng.tooltip.4': 'Represents the desire to transcend real-world suffering',
        'period.wan.anQiSheng.description': 'An Qisheng\'s prototype is found in "Records of the Grand Historian·Fengshan Book," initially appearing as a fangshi (Taoist practitioner) image of "living on the East Sea, selling medicine for a living, able to become immortal." Later, in Taoist texts, he was gradually elevated to an immortal who "took golden elixirs and rode clouds and dragons," such as Ge Hong\'s "Baopuzi" calling him "taking golden elixir, ascending to the Great Purity." In Early and Flourishing Tang Wonderland Traveling Poems, An Qisheng was mostly a "model of immortality," such as Li Bai\'s "An Qisheng, Lu Ao lightly ascended, transcendent spirit reaching the heavens," emphasizing his transcendent immortal appearance. During the Middle Tang period, poets like Wei Yingwu began to endow him with the trait of "cultivation mentor," depicting scenes of "sitting opposite the goddess eating dates, reporting to the Heavenly Emperor" in "Ma Mingsheng Meets the Goddess Song," making him closer to human emotions. In the Late Tang period, the focus of An Qisheng\'s imagery fundamentally shifted: literati weakened his attributes of "immortality" and "cultivation," highlighting his core characteristic of "retreating from the world due to failed political ideals," making him a symbol of "having no escape from the world, spiritual breakthrough."',
        'period.wan.duLanXiang.tooltip.1': 'Banished immortal image, once exiled to the human world for faults',
        'period.wan.duLanXiang.tooltip.2': 'Young girl from the Xiang River adopted by a fisherman, later met by a green boy',
        'period.wan.duLanXiang.tooltip.3': 'Left a poem for her beloved Zhang Shuo before ascending to heaven',
        'period.wan.duLanXiang.tooltip.4': 'Embodies the theme of immortal-mortal romance and banished immortal redemption',
        'period.wan.duLanXiang.description': 'Du Lanxiang\'s mythological prototype first appeared in Gan Bao\'s "In Search of the Supernatural" of the Eastern Jin Dynasty, with the core narrative being "a young girl from the Xiang River was adopted by a fisherman, later met by a green boy, who revealed \'I am an immortal maiden, banished to the human world for faults, now leaving,\' and left a poem for her beloved Zhang Shuo before ascending to immortality." At this time, the image focused on "banished immortal redemption, returning to heaven," with thin emotional coloring. In the Early and Flourishing Tang periods, poets mostly used her "ascension to immortality" trait to metaphorize "transcending the secular world." Although Li Bai did not directly write about her, he alluded to her prototype in "Ancient Airs" with "immortal maiden banished to the human world."',
        'period.literature.title': 'Related Historical Records (Original Texts)',
        'period.chu.wangziqiao.title': 'Wang Ziqiao (王子喬)',
        'period.chu.wangziqiao.tooltip.1': 'Crown prince of King Ling of Zhou, also known as Wang Qiao or Wang Jin',
        'period.chu.wangziqiao.tooltip.2': 'Skilled in playing the sheng, with a sound like phoenix calls',
        'period.chu.wangziqiao.tooltip.3': 'Taken to Mount Songgao by the Daoist Fuqiu Gong to cultivate immortality',
        'period.chu.wangziqiao.tooltip.4': 'Appeared on Mount Goushi riding a white crane',
        'period.chu.wangziqiao.description': 'The earliest known account of Wang Ziqiao appears in Lie Xian Zhuan 《列仙傳》. Also known as Wang Qiao (王喬), Wang Jin (王晉), or Wang Zijin (王子晉), he was the crown prince of King Ling of the Zhou Dynasty. He was especially fond of playing the Sheng (笙), a reed instrument, and the music he produced was so clear and beautiful that it was said to resemble the call of the phoenix. Once, while traveling near the Yi and Luo rivers, he was welcomed by the Daoist master Fu Qiugong (浮丘公) and taken to Mount Songgao. Over three decades later, he encountered an old acquaintance named Bo Liang (柏良) and told him, “Please inform my family to wait for me atop Gou Mountain on the seventh day of the seventh month.” When the day arrived, Wang Ziqiao indeed appeared astride a white crane amid the mountain peaks—visible yet beyond reach. From the sky, he nodded gently again and again to his family below. This ethereal scene repeated for several days before he finally departed. Later generations erected a temple in his honor on Mount Goushi in remembrance of his transcendent legacy.',
        'period.chu.xiwangmu.title': 'Queen Mother of the West (西王母)',
        'period.chu.xiwangmu.tooltip.1': 'Goddess in ancient Chinese mythology',
        'period.chu.xiwangmu.tooltip.2': 'Resident of Mount Kunlun, the immortal mountain',
        'period.chu.xiwangmu.tooltip.3': 'Holds the elixir of immortality',
        'period.chu.xiwangmu.tooltip.4': 'Ruler of all female immortals, governing all female immortals in the world',
        'period.chu.xiwangmu.description': 'The Queen Mother of the West is a goddess rooted in ancient Chinese mythology. One of the early textual records of her myth appears in the Classic of Mountains and Seas 《山海經》, which describes her as a theriomorphic totemic deity, the daughter of Heaven and Earth. By the Han Dynasty, when the pursuit of longevity and immortality flourished, her image as a divine immortal of eternal life had become firmly established. Among the Han populace, she was revered as a bestower of longevity, blessings, and prosperity. Daoism later absorbed and reimagined the pre-Qin myths surrounding her. In texts such as the Records of the Assembled Immortals of the Walled City 《墉城集仙錄》, she appears as an elegant and dignified female immortal. Within Daoist theology, she resides on the mythical Kunlun Mountain, presiding over the elixir of immortality and holding authority over human life and death. She is honored as the supreme matriarch of all female transcendents, governing every woman in heaven, on earth, and throughout the three realms and ten directions who attains the way and ascends to immortality.',
        'period.chu.dongfangshuo.title': 'Dong Fangshuo (東方朔)',
        'period.chu.dongfangshuo.tooltip.1': 'Han Dynasty writer and politician',
        'period.chu.dongfangshuo.tooltip.2': 'Characterized by wit and humor',
        'period.chu.dongfangshuo.tooltip.3': 'Legend says he was the incarnation of the Great White Star',
        'period.chu.dongfangshuo.tooltip.4': 'Later included in the Taoist pantheon of immortals',
        'period.chu.dongfangshuo.description': 'Biographical accounts of Dong Fangshuo from the Western and Eastern Han dynasties are preserved in Si Maqian\'s Records of the Grand Historian 《史記》 and Ban Gu\'s Book of Han 《漢書》. During the reign of Emperor Wu of Han, Dong Fangshuo—ambitious and eager to achieve fame—served in the imperial court but long remained without promotion. This bred in him a sense of underappreciated talent, and he repeatedly expressed a desire to retreat from public life. Thus, he came to be remembered by later generations as a scholar-official who sought advancement while adopting the stance of a “court-dwelling recluse.” After the Jin Dynasty, Dong Fangshuo\'s image began to transform. His once solemn persona was gradually reshaped by emerging cultural trends, taking on more humorous and unrestrained characteristics. At the same time, with the popularization and systematization of Daoist immortal lore, his identity underwent a process of “immortalization.” Legend came to regard him as the 太白星精 descended to the mortal realm. This gradual integration of Dong Fangshuo into the Daoist pantheon reflects a deliberate expansion of the religion\'s spiritual system—a way to incorporate historical and literary figures into its sacred narrative.',
        'references.dataset.title': 'Complete Tang Dynasty Wonderland Traveling Poems Dataset',
        'references.dataset.desc': 'The Complete Tang Dynasty Wonderland Traveling Poems dataset used by this platform contains all poetry works with immortals image from the Tang Dynasty period, classified and organized by different categories',
        'references.dataset.metadata': 'Metadata can be found in the master branch of the project\'s GitHub repository',
        'references.dataset.structure.title': 'Dataset Structure',
        'references.dataset.structure.item1': 'Wonderland Traveling Poems in Complete Tang Poems: All Wonderland Traveling Poems in Complete Tang Poems, stored in JSON format',
        'references.dataset.structure.item2': 'immortals image Summary: Contains all immortals image appearing in Complete Tang Poems, stored in CSV format',
        'references.dataset.structure.item3': 'immortals image Geographic Summary: A correspondence table between immortals and wonderlands based on the immortals image summary, organized by AI and manually fine-tuned, stored in JSON format',
        'references.dataset.source.title': 'Data Sources',
        'references.dataset.source.text': 'This dataset is based on authoritative literature such as "Complete Tang Poems" and has been manually screened, annotated, and organized to provide foundational data support for digital humanities research.',
        'references.bibliography.title': 'References',
        'references.images.title': 'Image Resource Attribution',
        'references.images.item1': 'To avoid copyright issues, image resources used on this platform, such as immortal images and background images, are all AI-generated. Unauthorized commercial use is prohibited.',
        'references.images.item2': 'Ancient Map Resources: http://ccamc.org/chinese_historical_map',
        'references.images.item2.label': 'Ancient Map Resources:',
        'references.images.copyright.title': 'Copyright Notice',
        'references.images.copyright.text1': 'Image resources used on this platform are for academic research and cultural display purposes only. If copyright issues are involved, please contact the platform administrator for resolution.',
        'references.images.copyright.text2': 'For original design image resources, unauthorized commercial use is prohibited.',
        'references.back': 'Back',
        'period.sheng.feature.1': 'Rich imagination, broad artistic conception, full of romanticism',
        'period.sheng.feature.2': 'Enhanced personalized expression, reflecting the poet\'s spiritual world',
        'period.sheng.feature.3': 'Smooth and natural language, breaking through the formal constraints of Beginning Tang',
        'period.sheng.feature.4': 'Diverse themes, not limited to simple wonderland descriptions',
        'period.sheng.feature.5': 'The pursuit of free spirit became an important theme',
        'period.sheng.development.text1': 'The number of Wonderland Traveling Poems in the Flourishing Tang period increased to 79, with the types of immortals image appearing in the poems increasing to 59. The images of immortals became more full, their personalities more distinct, and their connotations richer.',
        'period.sheng.development.text2': 'Although many literati in the Flourishing Tang period came into contact with Taoism, few poets created Wonderland Traveling Poems. Only 10 Wonderland Traveling Poems\' poets are recorded in works, and only Li Bai truly devoted himself wholeheartedly to the creation of Wonderland Traveling Poems.',
        'period.sheng.development.text3': 'During this period, in addition to immortals such as "Queen Mother of the West" and "Wang Ziqiao," immortals image such as "Magu," "Nongyu," and "Yellow Emperor" also appeared. For example, in the poetic immortal Li Bai\'s "You Suo Si" and "Flying Dragon Songs" (No. 1): "The blue bird from the west flies east, I wish to send a letter to thank Magu" and "The Yellow Emperor cast a cauldron at Mount Jingshan, refined cinnabar, cinnabar became gold. Riding a dragon, he flew to the Great Purity, clouds of sorrow and sea thoughts make one sigh." In Wang Han\'s "Ode to the Bright Star Jade Maiden Altar, Seeing Off the Inspector to Huayin": "Jiang Fei\'s jade pendant remains as a memento, Ying Nu\'s silver flute is empty and self-pitying." In Wu Yun\'s "Ode to Great Scholars: Guang Chengzi": "Xuanyuan came with the wind, asked about the Way to cultivate spirit and form." From the perspective of immortal types, the Flourishing Tang period saw more mortals who became immortals such as "Yellow Emperor" and "Magu." Among them, Li Bai created a large number of immortals image. The immortals in his works transcended the limitations of Taoist stories, and through the portrayal of actions, language, and background, he endowed immortals image with vivid charm and spirit, giving immortals image a stronger individual character.',
        'period.sheng.huangDi.tooltip.1': 'Dual identity as ancient emperor and immortal',
        'period.sheng.huangDi.tooltip.2': 'Model of cultivation, alchemy, and ultimate ascension to immortality',
        'period.sheng.huangDi.tooltip.3': 'Symbolizes authority and transcendent power',
        'period.sheng.huangDi.tooltip.4': 'Closely connected with imagery such as dragons and cauldrons',
        'period.sheng.huangDi.description': 'The earliest records about the Yellow Emperor can be traced back to ancient historical texts and mythological legends. "Records of the Grand Historian·Fengshan Book" records: "The Yellow Emperor collected copper from Mount Shou, cast a cauldron at the foot of Mount Jing. When the cauldron was completed, a dragon descended with its beard to welcome the Yellow Emperor. The Yellow Emperor mounted it, and more than seventy ministers and concubines followed." This record became the beginning of the deification of the Yellow Emperor in later generations. In Taoist texts, the Yellow Emperor was further revered as a respected figure closely related to the path of immortality—the image of the Yellow Emperor cultivating the Way, refining elixirs, and ultimately ascending to immortality depicted in the texts became an important prototype for the "Yellow Emperor" imagery in Wonderland Traveling Poems.',
        'period.sheng.maGu.tooltip.1': 'Immortal maiden image of eternal youth',
        'period.sheng.maGu.tooltip.2': 'Skilled in gathering herbs and refining elixirs, can freely travel between the human world and the immortal realm',
        'period.sheng.maGu.tooltip.3': 'Symbolizes longevity and eternal youth',
        'period.sheng.maGu.tooltip.4': 'Often associated with imagery such as "longevity" and "youth"',
        'period.sheng.maGu.description': 'Magu\'s legend first appeared in the Taoist text "Biographies of Immortals," where Magu was depicted as an immortal maiden with youthful appearance and extraordinary powers: she could freely travel between the human world and the immortal realm, and with a wave of her hand, could make flowers and plants bloom and grow. In legends, Magu often descended to the human world to gather herbs and refine elixirs, and was known for her kindness and helpfulness. "Longevity" is one of the most prominent characteristics of the "Magu" imagery in Flourishing Tang Wonderland Traveling Poems. Legend has it that Magu had an extremely long lifespan, often associated with the concepts of "eternal youth" and "immortality." Poets used Magu\'s imagery to express their desire for health and longevity, as well as their longing for peace and happiness.',
        'period.sheng.nongYu.tooltip.1': 'Proficient in music theory, skilled in playing the sheng',
        'period.sheng.nongYu.tooltip.2': 'Love legend with Xiao Shi',
        'period.sheng.nongYu.tooltip.3': 'Romantic imagery of ascending to immortality on a phoenix',
        'period.sheng.nongYu.tooltip.4': 'Symbolizes love and transcendence from the secular world',
        'period.sheng.nongYu.description': 'Nongyu\'s story originates from ancient Chinese legends. It is said that Nongyu was the daughter of Duke Mu of Qin during the Spring and Autumn period. She was skilled in playing the sheng and had a beautiful singing voice. One day, a man named Xiao Shi came to Duke Mu\'s court and attracted Nongyu\'s attention with his sheng playing skills. The two fell in love at first sight and, with Duke Mu\'s permission, became husband and wife. Later, Xiao Shi taught Nongyu to imitate phoenix calls with the sheng, which eventually attracted a pair of phoenixes descending from the sky. Xiao Shi and Nongyu rode the phoenixes together and ascended to the immortal realm.',
        'exhibition.cooccurrence.btn.force': 'Force-Directed Graph (Clustering)',
        'exhibition.cooccurrence.btn.circular': 'Circular Layout',
        'exhibition.cooccurrence.btn.highlight': 'Highlight Core Immortals',
        'exhibition.cooccurrence.btn.reset': 'Reset Display',
        'exhibition.cooccurrence.stats.title': 'Network Statistics',
        'exhibition.cooccurrence.stats.total': 'Total Immortals',
        'exhibition.cooccurrence.stats.relations': 'Co-occurrence Relations',
        'exhibition.cooccurrence.stats.core': 'Core Immortals',
        'exhibition.cooccurrence.stats.density': 'Network Density',
        'exhibition.cooccurrence.core.title': 'Core Immortals (Sorted by Category)',
        'exhibition.cooccurrence.key.title': 'Key Co-occurrence Relations',
        'exhibition.cooccurrence.key.strength': 'Co-occurrence Strength',
        'exhibition.gis.text1': 'Through Geographic Information System (GIS) analysis, we can spatially visualize the immortals appearing in Tang Dynasty Wonderland Traveling Poems according to their locations. These immortal locations cover multiple categories including core immortal mountains, celestial wonderlands, mountain and river secrets, water realm secrets, and Taoist holy sites, showcasing the rich spatial imagination in Tang Dynasty Wonderland Traveling Poems.',
        'exhibition.gis.text2': 'Markers on the map are distinguished by different colors and icons according to different categories. Clicking on a marker allows you to view detailed information about that location, including location name, category, related immortals, and related descriptions.',
        'exhibition.gis.btn.modern': 'Modern Map',
        'exhibition.gis.btn.ancient': 'Ancient Map',
        'exhibition.gis.legend': 'Legend',
        'exhibition.gis.legend.core': 'Core Immortal Mountains',
        'exhibition.gis.legend.sky': 'Celestial Wonderlands',
        'exhibition.gis.legend.mountain': 'Mountain and River Secrets',
        'exhibition.gis.legend.water': 'Water Realm Secrets',
        'exhibition.gis.legend.taoist': 'Taoist Holy Sites',
        'exhibition.gis.text3': 'From the map distribution, it can be seen that immortal locations are mainly concentrated in the eastern and central regions of China, with core immortal mountains such as Kunlun Mountain, Penglai Mountain, and Zhongnan Mountain being the locations with the highest frequency of immortals image. Although celestial wonderlands are relatively concentrated geographically, they occupy an important position in literary imagination. These geographical distributions reflect Tang Dynasty poets\' understanding and imagination of traditional immortal mountains and Taoist holy sites.',
        'source.attribution.index': 'The text on this page comes from humanities analysis and AI generation.',
        'source.attribution.immortals': 'All immortal poem verses on this page come from the database, and immortal descriptions come from AI generation.',
        'source.attribution.exhibition': 'All text on this page comes from humanities analysis.',
        'source.attribution.create': 'All text on this page comes from AI generation.',
        'create.page.title': 'Poetry Creation',
        'create.title': 'Discover Your Tang Dynasty Poet Soul',
        'create.subtitle': 'Which Poet\'s Spiritual Journey Matches Yours?',
        'create.intro.1': 'Under the poetic starry sky of the Flourishing Tang, wonderland-traveling poems shine like a galaxy,',
        'create.intro.2': 'illuminating the spiritual journeys of literati.',
        'create.intro.3': 'Li Bai\'s unbridled imagination, Li Shangyin\'s misty profundity,',
        'create.intro.4': 'Li He\'s bizarre fantasy, Bai Juyi\'s worldly transcendence—',
        'create.intro.5': 'each way of wonderland traveling is a unique spiritual portrait.',
        'create.intro.6': 'This test will guide you through a millennium of poetic realms,',
        'create.intro.7': 'to find the Tang Dynasty poet that best matches your inner self.',
        'create.prevBtn': 'Previous',
        'create.nextBtn': 'Next',
        'create.resultBtn': 'View Result',
        'create.restartBtn': 'Restart Test',
        'create.resultTitle': 'Poetic Soul Test Result',
        'create.dataSource': 'Data Source: Quan Tang Shi Wonderland Traveling Poems Dataset',
        'create.question.1.number': 'Question 1 of 8',
        'create.question.1.text': '1. Your ideal transcendent experience is:',
        'create.question.1.option.1': 'Feasting with immortals, roaming the highest heavens',
        'create.question.1.option.2': 'Sitting alone among clouds, watching stars shift in silence',
        'create.question.1.option.3': 'Cultivating in the human world, delivering all beings from suffering',
        'create.question.1.option.4': 'Exploring the universe, contemplating truth',
        'create.question.2.number': 'Question 2 of 8',
        'create.question.2.text': '2. You believe wonderland exists in:',
        'create.question.2.option.1': 'Famous mountains and great rivers in reality',
        'create.question.2.option.2': 'Fantasy worlds constructed by imagination',
        'create.question.2.option.3': 'Inner enlightenment and spiritual practice',
        'create.question.2.option.4': 'The realm of philosophical speculation',
        'create.question.3.number': 'Question 3 of 8',
        'create.question.3.text': '3. When facing life difficulties, you tend to:',
        'create.question.3.option.1': 'Analyze rationally, find root causes',
        'create.question.3.option.2': 'Seek emotional support, face together',
        'create.question.3.option.3': 'Make plans, solve step by step',
        'create.question.3.option.4': 'Go with the flow, believe in turnaround',
        'create.question.4.number': 'Question 4 of 8',
        'create.question.4.text': '4. Your lifestyle is closer to:',
        'create.question.4.option.1': 'Orderly, with clear goals',
        'create.question.4.option.2': 'Spontaneous, enjoying the process',
        'create.question.4.option.3': 'Serving others, taking responsibility',
        'create.question.4.option.4': 'Independent thinking, keeping distance',
        'create.question.5.number': 'Question 5 of 8',
        'create.question.5.text': '5. In poetry creation, you value more:',
        'create.question.5.option.1': 'Sincere expression of emotion',
        'create.question.5.option.2': 'Strange and magnificent imagination',
        'create.question.5.option.3': 'Profound reflection of reality',
        'create.question.5.option.4': 'Deep expression of philosophy',
        'create.question.6.number': 'Question 6 of 8',
        'create.question.6.text': '6. You hope to be remembered by posterity for:',
        'create.question.6.option.1': 'Bold and unrestrained personality',
        'create.question.6.option.2': 'Profound and reserved wisdom',
        'create.question.6.option.3': 'Reliable and steadfast character',
        'create.question.6.option.4': 'Free and untamed soul',
        'create.question.7.number': 'Question 7 of 8',
        'create.question.7.text': '7. In social situations, you are usually:',
        'create.question.7.option.1': 'Proactive in communication, enthusiastic',
        'create.question.7.option.2': 'Quiet observer, deep conversation',
        'create.question.7.option.3': 'Focus on atmosphere, promote harmony',
        'create.question.7.option.4': 'Rational analysis, provide insights',
        'create.question.8.number': 'Question 8 of 8',
        'create.question.8.text': '8. Facing conflict between ideal and reality, you choose:',
        'create.question.8.option.1': 'Hold fast to ideals, remain true to original aspiration',
        'create.question.8.option.2': 'Adjust goals, advance practically',
        'create.question.8.option.3': 'Seek balance, consider both',
        'create.question.8.option.4': 'Replan, solve systematically',
        'us.page.title': 'About Us',
        'us.page.subtitle': 'The Tracing the Immortals in Tang Wonderland Traveling Poems team is dedicated to exploring the world of immortals in Tang Dynasty Wonderland Traveling Poems through digital humanities methods',
        'us.team.title': 'Our Team',
        'us.team.prev': 'Previous Member',
        'us.team.next': 'Next Member',
        'us.research.title': 'Research Purpose & Data Sources',
        'us.research.purpose.title': 'Research Purpose',
        'us.research.purpose.text': 'Wonderland Traveling Poems centers on illusory imagery such as immortals, wonderlands, and immortal techniques, with immortals image being the core of the core. Analyzing immortals image helps to deeply understand the spiritual atmosphere of Tang literati Wonderland Traveling Poems and gain insights into the zeitgeist and humanistic thought. Visualizing the analysis results can clearly present the evolution of immortals image and further explore the influence of Taoist development and social changes on Wonderland Traveling Poems creation.',
        'us.research.datasource.title': 'Dataset Sources',
        'us.research.datasource.text': 'We discovered a well-organized JSON dataset of the Complete Tang Poems on GitHub, and combined it with Yan Jinxiong\'s "Research on Tang Dynasty Wonderland Traveling Poems" and manual proofreading to extract over 280 Tang Dynasty Wonderland Traveling Poems. The dataset is provided in both JSON and CSV formats, laying the foundation for subsequent corpus analysis and visualization.',
        'us.workflow.title': 'Workflow (Methodology & Tools)',
        'us.workflow.desc': 'Click on different stages to view corresponding descriptions and methods used. The progress bar will synchronously display the project advancement.',
        'us.workflow.step.0': '29/09-12/10 Data Screening',
        'us.workflow.step.1': '13/10-26/10 Data Analysis',
        'us.workflow.step.2': '27/10-09/11 Research Conclusions',
        'us.workflow.step.3': '27/10-09/11 Website Development',
        'us.workflow.step.4': '03/11-16/11 Game Creation',
        'us.workflow.step0.range': '29/09/2025 - 12/10/2025',
        'us.workflow.step0.title': 'Dataset Organization & immortals image Extraction',
        'us.workflow.step0.desc': 'Based on the GitHub Complete Tang Poems JSON dataset and "Research on Tang Dynasty Wonderland Traveling Poems", we screened 282 Tang Dynasty Wonderland Traveling Poems, classified them into four periods, and organized the immortals image appearing in the poems according to typological analysis requirements.',
        'us.workflow.step0.tools.title': 'Methodology & Tools',
        'us.workflow.step0.tool1': 'Doubao AI OCR: Identified all Wonderland Traveling Poems information in "Research on Tang Dynasty Wonderland Traveling Poems".',
        'us.workflow.step0.tool2': 'Python + Complete Tang Poems JSON: Matched poem titles, poets, and volume numbers to generate JSON/CSV datasets.',
        'us.workflow.step0.tool3': 'Feishu Multi-dimensional Table with DeepSeek integration: Extracted immortals image from Wonderland Traveling Poems and organized it into CSV format.',
        'us.workflow.step1.range': '13/10/2025 - 26/10/2025',
        'us.workflow.step1.title': 'Multi-dimensional Data Analysis & Visualization',
        'us.workflow.step1.desc': 'Conducted data analysis on immortals image usage and representative poets across the Complete Tang, Beginning Tang, Flourishing Tang, Middle Tang, and Late Tang periods, including statistical analysis, immortals image co-occurrence analysis, and GIS analysis of immortal locations.',
        'us.workflow.step1.tool1': 'R: Performed data cleaning, statistics, and modeling analysis.',
        'us.workflow.step1.tool2': 'Tableau: Created bar charts, pie charts, line charts, heatmaps, and other visualization outputs.',
        'us.workflow.step1.tool3': 'Python: Performed data cleaning and analysis, calculated immortals image co-occurrence relationships.',
        'us.workflow.step1.tool4': 'AI + ECharts: Created co-occurrence network diagrams of immortals image in Tang Dynasty Wonderland Traveling Poems.',
        'us.workflow.step1.tool5': 'AI + Leaflet: Used AI to summarize locations for all immortals in the database, then manually disambiguated, filtered, proofread, created corresponding icons, compiled into JSON files, and imported into maps using Leaflet.',
        'us.workflow.step2.range': '27/10/2025 - 09/11/2025',
        'us.workflow.step2.title': 'Writing Research Findings & Conclusions',
        'us.workflow.step2.desc': 'Combined data results with relevant literature to write about the characteristics of immortals image usage in Wonderland Traveling Poems across different periods, sources of high-frequency imagery and their cultural contexts, and discussed derivative insights such as the increasing proportion of female immortals.',
        'us.workflow.step2.tool1': 'Compared historical materials with data insights to extract research viewpoints.',
        'us.workflow.step2.tool2': 'Summarized and analyzed to form structured research conclusions and interpretations.',
        'us.workflow.step3.range': '27/10/2025 - 09/11/2025',
        'us.workflow.step3.title': 'Website Framework Development',
        'us.workflow.step3.desc': 'Built the overall information architecture and interactive flow of Tracing the Immortals in Tang Wonderland Traveling Poems, presenting research results in a digital humanities approach.',
        'us.workflow.step3.tool1': 'Methodology: Primarily static display, focusing on narrative and sustainable maintenance.',
        'us.workflow.step3.tool2': 'Tech Stack: [Frontend] HTML5, Tailwind CSS, JavaScript; [Backend] Python, Flask; [Database] JSON local loading; [Data Visualization] Chart.js;',
        'us.workflow.step4.range': '03/11/2025 - 16/11/2025',
        'us.workflow.step4.title': 'Creating "Poetry Creation" Interactive Game',
        'us.workflow.step4.desc': 'Designed the "Tang Dynasty Wonderland Chronicles" mini-game, allowing users to find poets that match their temperament through Q&A, select favorite immortals image and wonderland scenes, and generate their own "Tang Dynasty Wonderland Traveling Poems".',
        'us.workflow.step4.tool1': 'Figma: Designed interface and interactive flow.',
        'us.workflow.step4.tool2': 'Jungian Eight Functions Decision Tree: Classified poet personalities and set appropriate questions.',
        'us.workflow.step4.tool3': 'Deep Seek API + Doubao Image Generation API: Generated verses and images in real-time for an immersive experience.'
    }
};

// 转换人名到拼音
function convertNameToPinyin(text, lang) {
    if (lang === 'zh') return text;
    
    let result = text;
    for (const [chinese, pinyin] of Object.entries(nameToPinyin)) {
        const regex = new RegExp(chinese, 'g');
        result = result.replace(regex, pinyin);
    }
    return result;
}

// 翻译文本
function translateText(key, lang) {
    if (!translations[lang]) {
        console.warn('Language not found:', lang, 'Available languages:', Object.keys(translations));
        return key;
    }
    if (!translations[lang][key]) {
        console.warn('Translation key not found:', key, 'in language:', lang);
        return key;
    }
    const result = translations[lang][key];
    // 调试：检查特定键
    if (key === 'period.sheng.development.text1' || key === 'period.sheng.development.text2') {
        console.log('translateText - key:', key, 'lang:', lang, 'result (first 50):', result.substring(0, 50));
        console.log('translations[lang] is:', translations[lang] === translations.zh ? 'zh object' : translations[lang] === translations.en ? 'en object' : 'unknown');
    }
    return result;
}

// 应用语言切换
function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新body类名以应用英文标题字体
    if (lang === 'en') {
        document.body.classList.add('lang-en');
    } else {
        document.body.classList.remove('lang-en');
    }
    
    // 标记翻译已完成
    document.body.classList.add('i18n-ready');
    
    // 更新所有带data-i18n属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Applying language:', lang, 'to', elements.length, 'elements');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        let translatedText = translateText(key, lang);
        
        // 调试：检查特定键
        if (key === 'period.sheng.development.text1' || key === 'period.sheng.development.text2') {
            console.log('Translating key:', key, 'lang:', lang);
            console.log('translations[lang] exists?', translations[lang] ? 'YES' : 'NO');
            console.log('translations[lang][key] exists?', translations[lang] && translations[lang][key] ? 'YES' : 'NO');
            if (translations[lang] && translations[lang][key]) {
                console.log('Translation value (first 50 chars):', translations[lang][key].substring(0, 50) + '...');
            }
            console.log('translatedText (first 50 chars):', translatedText.substring(0, 50) + '...');
            console.log('translatedText === key?', translatedText === key);
        }
        
        // 如果翻译键不存在，跳过（保持原文本）
        if (translatedText === key) {
            // 如果找不到翻译，保持原文本不变
            console.warn('Translation key not found:', key, 'for language:', lang);
            return;
        }
        
        // 如果是文本节点，转换人名
        translatedText = convertNameToPinyin(translatedText, lang);
        
        // 更新文本内容
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translatedText;
        } else if (element.hasAttribute('title')) {
            element.title = translatedText;
        } else if (element.hasAttribute('alt')) {
            element.alt = translatedText;
        } else {
            // 对于 span 等内联元素，如果内部有子元素，需要特殊处理
            if (element.tagName === 'SPAN' && element.children.length > 0) {
                // span 内部有子元素，只更新直接的文本节点
                const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
                if (textNodes.length > 0) {
                    textNodes[0].textContent = translatedText;
                } else {
                    element.insertBefore(document.createTextNode(translatedText), element.firstChild);
                }
            } else {
                // 直接替换文本内容（这会替换掉元素内的所有内容，包括原有的中文文本）
                element.textContent = translatedText;
            }
        }
    });
    
    // 更新所有带data-i18n-aria-label属性的元素的aria-label
    const ariaLabelElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabelElements.forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label');
        let translatedText = translateText(key, lang);
        
        if (translatedText !== key) {
            translatedText = convertNameToPinyin(translatedText, lang);
            element.setAttribute('aria-label', translatedText);
        }
    });
    
    // 更新语言切换按钮文本
    const langToggleText = document.getElementById('langToggleText');
    const langToggleTextMobile = document.getElementById('langToggleTextMobile');
    if (langToggleText) langToggleText.textContent = lang === 'zh' ? 'EN' : '中文';
    if (langToggleTextMobile) langToggleTextMobile.textContent = lang === 'zh' ? 'EN' : '中文';
    
    // 更新页面标题
    updatePageTitle(lang);
    
    // 触发自定义事件，让页面可以响应语言变化
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// 更新页面标题
function updatePageTitle(lang) {
    // 根据当前页面路径确定标题键
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    let titleKey = 'page.title.index'; // 默认
    
    if (filename === 'index.html' || filename === '' || filename === '/') {
        titleKey = 'page.title.index';
    } else if (filename === 'immortals.html') {
        titleKey = 'page.title.immortals';
    } else if (filename === 'exhibition_all.html') {
        titleKey = 'page.title.exhibition.all';
    } else if (filename === 'exhibition_chu.html') {
        titleKey = 'page.title.exhibition.chu';
    } else if (filename === 'exhibition_sheng.html') {
        titleKey = 'page.title.exhibition.sheng';
    } else if (filename === 'exhibition_zhong.html') {
        titleKey = 'page.title.exhibition.zhong';
    } else if (filename === 'exhibition_wan.html') {
        titleKey = 'page.title.exhibition.wan';
    } else if (filename === 'create.html') {
        titleKey = 'page.title.create';
    } else if (filename === 'us.html') {
        titleKey = 'page.title.us';
    } else if (filename === 'references.html') {
        titleKey = 'page.title.references';
    }
    
    const translatedTitle = translateText(titleKey, lang);
    if (translatedTitle !== titleKey) {
        document.title = translatedTitle;
    }
}

// 初始化语言切换
function setupLanguageToggle() {
    // 应用保存的语言设置
    applyLanguage(currentLanguage);
    
    // 桌面端语言切换按钮
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
            applyLanguage(newLang);
        });
    }
    
    // 移动端语言切换按钮
    const langToggleBtnMobile = document.getElementById('langToggleBtnMobile');
    if (langToggleBtnMobile) {
        langToggleBtnMobile.addEventListener('click', () => {
            const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
            applyLanguage(newLang);
        });
    }
}

// 在DOM加载完成后初始化语言切换
// 如果 DOM 已经加载完成，立即执行；否则等待 DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupLanguageToggle();
    });
} else {
    // DOM 已经加载完成，立即执行
    setupLanguageToggle();
}

// 导出函数供其他脚本使用
window.i18n = {
    currentLanguage: () => currentLanguage,
    translate: (key) => translateText(key, currentLanguage),
    convertName: (text) => convertNameToPinyin(text, currentLanguage),
    applyLanguage: applyLanguage
};