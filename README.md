# Pure JavaScript Component System

A lightweight, module-based component system built with vanilla JavaScript, featuring dynamic routing and a simple component architecture.

## Project Structure

```
├── index.html          # Main entry point with TailwindCSS integration
├── layout.js           # Layout component and navigation system
├── global.css         # Global CSS variables and base styles
├── pages/             # Pages directory containing all route components
│   ├── page.js        # Home page component
│   ├── about/         # About page route directory
│   ├── contactus/     # Contact Us page route directory
│   ├── features/      # Features page route directory
│   └── products/      # Products page with API integration
```

## Features

- Pure JavaScript implementation without any frameworks
- Dynamic module loading with ES6 imports
- Component-based architecture
- Folder-based routing system
- Responsive navigation with Tailwind CSS
- Hybrid styling system:
  - TailwindCSS for utility-first styling
  - Global CSS variables for theming
  - Custom CSS for component-specific styles
- API Integration with async/await support
- Dynamic data fetching and rendering
- Error handling for API requests and route loading

## How It Works

### Layout System

The `layout.js` file contains the core layout component that wraps all pages. It provides:

- A consistent page structure with Tailwind CSS classes
- Dynamic navigation bar generation
- Content rendering with error handling
- Hash-based routing support

```javascript
export function Layout(content, pages = []) {
    // Generates navigation links and wraps content in a consistent layout
    return `
        <div class="app-container min-h-screen bg-gray-100">
            <nav class="bg-white shadow-md p-4 mb-6">
                <div class="container mx-auto flex items-center justify-start space-x-4">
                    ${/* Navigation links */}
                </div>
            </nav>
            <main class="container mx-auto px-4 py-6">${content}</main>
        </div>
    `;
}
```

### Component Architecture

Components in this system follow these principles:

1. **Pure Functions**: Components are pure functions that return HTML strings
2. **Self-Contained**: Each component manages its own state and styling
3. **Composable**: Components can be nested and combined
4. **Event Handling**: Uses event delegation for dynamic content

Example component structure:
```javascript
export default function Component() {
    // State management
    const state = {
        data: null,
        loading: false
    };

    // Event handlers
    const handleClick = (e) => {
        // Handle events
    };

    // Render function
    return `
        <div class="component">
            ${/* Component template */}
        </div>
    `;
}
```

### Routing System

The routing system uses a folder-based approach:

1. Pages are organized in the `pages` directory
2. Each route can be a single file or a folder
3. `page.js` files define the component for each route
4. Nested routes are created using subdirectories
5. Hash-based navigation for SPA functionality

### Creating New Pages

To add a new page:

1. Create a new folder in the `pages` directory (e.g., `pages/about/`)
2. Add a `page.js` file in the folder that exports a default function:

```javascript
export default function About() {
    return `
        <div class="page">
            <h1 class="text-3xl font-bold mb-4">About Page</h1>
            <p class="text-gray-700">Your content here</p>
        </div>
    `;
}
```

## Styling System

The project implements a three-tier styling approach:

### 1. Global Styles (global.css)
- CSS variables for theming
- Base styles and resets
- Utility classes

### 2. Component-Specific Styles (style.css)
- Scoped to component namespace
- Modular and reusable
- Uses CSS custom properties

### 3. Tailwind Utility Classes
- Responsive design utilities
- Flexible layout system
- Interactive states

Example of component styling:
```css
.component-name {
    --component-spacing: 1.5rem;
    padding: var(--component-spacing);
    background: var(--background-color);
}
```

## API Integration

The system supports multiple API integration patterns:

1. **Direct Fetch**: Simple API calls using fetch
2. **Service Layer**: Abstracted API calls in service files
3. **Error Handling**: Consistent error handling patterns
4. **Loading States**: Built-in loading state management

Example API integration:
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/endpoint');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
```

## Development Workflow

1. **Setup**:
   - Clone the repository
   - No build step required
   - Use a local web server

2. **Development**:
   - Create new components in `pages/`
   - Add component-specific styles
   - Implement API integration if needed

3. **Testing**:
   - Test components in isolation
   - Verify routing behavior
   - Check API integration

4. **Deployment**:
   - Deploy static files to any web server
   - No build process needed
   - Ensure proper CORS configuration for APIs

## Browser Support

This project uses modern JavaScript features including:
- ES Modules
- Dynamic imports
- Template literals
- Arrow functions
- Async/await

Ensure your target browsers support these features.

## Error Handling

The system includes error boundaries and fallback content for:
- Failed module imports
- Invalid routes
- Missing components
- API request failures

## Best Practices

1. **Component Design**:
   - Keep components pure and focused
   - Use ES modules for organization
   - Follow consistent naming conventions
   - Implement proper error handling

2. **Styling**:
   - Use CSS variables for theming
   - Leverage Tailwind for utilities
   - Keep component styles modular
   - Follow BEM naming convention

3. **Performance**:
   - Lazy load components when possible
   - Optimize API calls
   - Minimize DOM manipulations
   - Use efficient event delegation

4. **Maintenance**:
   - Document component APIs
   - Keep dependencies minimal
   - Write clear, maintainable code
   - Follow consistent formatting
