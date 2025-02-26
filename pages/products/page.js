export default async function Products() {
    const productsLists = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            
            return data.products.map(product => `
                <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover rounded-md mb-4">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">${product.title}</h2>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-blue-600">$${product.price}</span>
                        <span class="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">${product.stock} in stock</span>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching products:', error);
            return '<p class="text-red-500">Error loading products</p>';
        }
    }
    
    const products = await productsLists();
    
    return `
        <div class="page min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-bold text-blue-500 mb-4">Products Page</h1>
                <p class="text-gray-600 text-lg">This is a products page of our application.</p>
                <div class="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    ${products}
                </div>
            </div>
        </div>
    `;
}