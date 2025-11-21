// 导航栏组件
const navbarComponent = `
<nav id="navbar" class="fixed w-full py-4 px-6 md:px-12 z-50 transition-all duration-500">
    <div class="container mx-auto flex items-center justify-between">
        <a href="index.html" class="flex items-center">
            <img src="./images/logo.png" alt="寻仙唐迹" class="h-8 md:h-10 mr-2">
            <span class="font-calligraphy text-2xl md:text-3xl text-celestial-blue text-shadow-gold">寻仙唐迹</span>
        </a>
        
        <div class="flex items-center space-x-4">
            <!-- 桌面导航 -->
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link" data-page="index">首页</a>
                <a href="exhibition_all.html" class="nav-link" data-page="exhibition_all">数字展厅</a>
                <a href="immortals.html" class="nav-link" data-page="immortals">仙镜图谱</a>
                <a href="create.html" class="nav-link" data-page="create">仙卷创作</a>
                <a href="us.html" class="nav-link" data-page="us">关于我们</a>
            </div>

            <!-- 桌面端主题切换 -->
            <div class="hidden md:flex theme-toggle-group" role="group" aria-label="主题模式切换">
                <button class="theme-toggle-btn" data-theme-toggle="default" type="button" aria-pressed="false">
                    <i class="fa fa-sun-o"></i><span>默认</span>
                </button>
                <button class="theme-toggle-btn" data-theme-toggle="dark" type="button" aria-pressed="false">
                    <i class="fa fa-moon-o"></i><span>暗色</span>
                </button>
                <button class="theme-toggle-btn" data-theme-toggle="eye" type="button" aria-pressed="false">
                    <i class="fa fa-leaf"></i><span>护眼</span>
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
        <a href="index.html" class="mobile-nav-link" data-page="index">首页</a>
        <a href="exhibition_all.html" class="mobile-nav-link" data-page="exhibition_all">数字展厅</a>
        <a href="immortals.html" class="mobile-nav-link" data-page="immortals">仙镜图谱</a>
        <a href="create.html" class="mobile-nav-link" data-page="create">仙卷创作</a>
        <a href="us.html" class="mobile-nav-link" data-page="us">关于我们</a>
        <div class="theme-divider border-t pt-4 mt-2">
            <span class="text-xs uppercase tracking-wider text-gray-600">主题模式</span>
            <div class="grid grid-cols-3 gap-3 mt-3">
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="default" type="button" aria-pressed="false">
                    <i class="fa fa-sun-o"></i><span>默认</span>
                </button>
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="dark" type="button" aria-pressed="false">
                    <i class="fa fa-moon-o"></i><span>暗色</span>
                </button>
                <button class="theme-toggle-btn w-full justify-center" data-theme-toggle="eye" type="button" aria-pressed="false">
                    <i class="fa fa-leaf"></i><span>护眼</span>
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
                <h3 class="font-calligraphy text-2xl mb-4 text-golden">寻仙唐迹</h3>
                <p class="text-white/80 text-sm">
                    唐代游仙诗仙人意象数字人文馆，致力于用数字技术重现唐代诗人笔下的神仙世界。
                </p>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4">快速链接</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a href="index.html" class="hover:text-golden transition-colors">首页</a></li>
                    <li><a href="exhibition_all.html" class="hover:text-golden transition-colors">数字展厅</a></li>
                    <li><a href="immortals.html" class="hover:text-golden transition-colors">仙镜图谱</a></li>
                    <li><a href="create.html" class="hover:text-golden transition-colors">仙卷创作</a></li>
                    <li><a href="us.html" class="hover:text-golden transition-colors">关于我们</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4">资源引用</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a href="#" class="hover:text-golden transition-colors">全唐诗数据库</a></li>
                    <li><a href="#" class="hover:text-golden transition-colors">学术参考文献</a></li>
                    <li><a href="#" class="hover:text-golden transition-colors">图像资源说明</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-bold mb-4">联系我们</h4>
                <ul class="space-y-2 text-sm text-white/80">
                    <li class="flex items-center"><i class="fa fa-envelope-o mr-2"></i> zxy812120@163.com</li>
                    <li class="flex items-center"><i class="fa fa-map-marker mr-2"></i> 中国·香港·香港理工大学</li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>© 2025 寻仙唐迹 - 唐代游仙诗仙人意象数字人文馆 版权所有</p>
            <p class="mt-1">本项目仅供学术研究与文化传播使用</p>
        </div>
    </div>
</footer>
`;

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