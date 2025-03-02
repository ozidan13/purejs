export default function HomePage() {

    const name = "Amany"

    
    return `
        <div class="page min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center">
                    <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8">
                        <span class="block text-blue-600">Pure JavaScript Component System</span>
                        <span class="block text-gray-600 text-2xl mt-3">Modern. Lightweight. Powerful.</span>
                    </h1>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        A lightweight, module-based component system built with vanilla JavaScript, featuring dynamic routing and a simple component architecture.
                    </p>
                </div>

                <div class="mt-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Pure JavaScript</h3>
                            <p class="text-gray-600">Built without any frameworks, utilizing modern JavaScript features for a lightweight and efficient solution.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Dynamic Module Loading</h3>
                            <p class="text-gray-600">Efficient module-based architecture with dynamic imports for optimal performance.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Folder-based Routing</h3>
                            <p class="text-gray-600">Intuitive routing system based on folder structure for easy navigation and organization.</p>
                        </div>
                    </div>
                </div>

                <div class="mt-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Available Routes</h2>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <h3 class="font-semibold text-blue-700">Home</h3>
                            <p class="text-blue-600 text-sm">/</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <h3 class="font-semibold text-blue-700">About</h3>
                            <p class="text-blue-600 text-sm">/about</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <h3 class="font-semibold text-blue-700">Contact Us</h3>
                            <p class="text-blue-600 text-sm">/contactus</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <h3 class="font-semibold text-blue-700">Features</h3>
                            <p class="text-blue-600 text-sm">/features</p>
                        </div>
                    </div>
                </div>

                <div class="mt-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Highlights</h2>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                ES Modules
                            </li>
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Dynamic Imports
                            </li>
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Template Literals
                            </li>
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Arrow Functions
                            </li>
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                TailwindCSS
                            </li>
                            <li class="flex items-center text-gray-600">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Error Handling
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}