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

// Initialize layout
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
                    // Remove leading slash and construct path
                    const pageName = page.substring(1);
                    modulePath = `./pages/${pageName}/page.js`;
                }
                
                const module = await import(modulePath);
                root.innerHTML = Layout(module.default(), pages);
                
                // Update URL hash to reflect current page
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

