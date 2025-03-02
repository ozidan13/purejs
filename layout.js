// Layout component that wraps all pages
export function Layout(content, pages = []) {
    const navLinks = pages
        .map(page => {
            const displayName = page === '/' ? 'Home' : page.replace('/', '').charAt(0).toUpperCase() + page.replace('/', '').slice(1);
            return `<a href="#" data-page="${page}" class="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">${displayName}</a>`;
        })
        .join('');

    return `
        <div class="app-container min-h-screen bg-gray-100">
            <nav class="bg-white shadow-md p-4 mb-6">
                <div class="container mx-auto flex items-center justify-start space-x-4 rtl:space-x-reverse">
                    ${navLinks}
                </div>
            </nav>
            <main class="container mx-auto px-4 py-6">
                ${content}
            </main>
        </div>
    `;
}

// Initialize layout and routing
async function initializeApp() {
    const root = document.getElementById('root');
    const pages = ['/', '/features', '/contactus', '/about'];

    // Function to load and inject page-specific styles
    function loadPageStyles(path) {
        // Remove any previously loaded page-specific styles
        const existingStyles = document.querySelectorAll('link[data-page-style]');
        existingStyles.forEach(style => style.remove());

        // Determine the style path based on the current page
        const stylePath = path === '/' ? './pages/style.css' : `./pages${path}/style.css`;

        // Create and inject the new style element
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = stylePath;
        styleLink.setAttribute('data-page-style', 'true');
        document.head.appendChild(styleLink);
    }

    async function loadPage(path) {
        try {
            // Load page-specific styles
            loadPageStyles(path);

            // Load page content
            const pagePath = path === '/' ? './pages/page.js' : `./pages${path}/page.js`;
            const pageModule = await import(pagePath);
            const pageContent = pageModule.default();
            
            // Render the page with layout
            root.innerHTML = Layout(pageContent, pages);

            // Update active state in navigation
            document.querySelectorAll('nav a').forEach(link => {
                if (link.dataset.page === path) {
                    link.classList.add('text-purple-600');
                } else {
                    link.classList.remove('text-purple-600');
                }
            });
        } catch (error) {
            console.error('Error loading page:', error);
            root.innerHTML = '<div class="text-red-500">Error loading page</div>';
        }
    }

    // Set up navigation event listeners
    root.addEventListener('click', (e) => {
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            const path = e.target.dataset.page;
            window.location.hash = path;
        }
    });

    // Handle initial load and navigation
    window.addEventListener('hashchange', () => {
        const path = window.location.hash.slice(1) || '/';
        loadPage(path);
    });

    // Load initial page
    const initialPath = window.location.hash.slice(1) || '/';
    loadPage(initialPath);
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Start the application
initializeApp();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('root');
    
    // Define available pages with new URL-style paths
    const pages = ['/', '/features', '/contactus', '/about',];
    
    // Initial render with home page
    const HomePage = (await import('./pages/page.js')).default;
    root.innerHTML = Layout(HomePage(), pages);

    // Handle navigation
    document.addEventListener('click', async (e) => {
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            
            try {
                let modulePath;
                if (page === '/') {
                    modulePath = './pages/page.js';
                } else {
                    const pageName = page.substring(1);
                    modulePath = `./pages/${pageName}/page.js`;
                }
                
                const module = await import(modulePath);
                const content = await module.default();
                root.innerHTML = Layout(content, pages);
                
                window.location.hash = page;
            } catch (error) {
                console.error('Error loading page:', error);
            }
        }
    });
    
    // Handle initial load based on URL hash
    const initialPage = window.location.hash.slice(1) || '/';
    const pageLink = document.querySelector(`[data-page="${initialPage}"]`);
    if (pageLink) {
        pageLink.click();
    }
});

