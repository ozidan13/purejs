# Pure JavaScript Component System

A lightweight, module-based component system built with vanilla 
JavaScript, featuring dynamic routing and a simple component architecture.

## Project Structure

```
├── index.html          # Main entry point and HTML template
├── layout.js           # Layout component and navigation system
├── global.css         # Global CSS styles
├── pages/              # Pages directory containing all route components
│   ├── page.js        # Home page component
│   ├── about/         # About page route directory
│   ├── contactus/     # Contact Us page route directory
│   ├── features/      # Features page route directory
│   └── products/      # Products page with API integration
```

## Features

- Pure JavaScript implementation without any frameworks
- Dynamic module loading
- Component-based architecture
- Folder-based routing
- Responsive navigation
- TailwindCSS for Styling
- API Integration with async/await support
- Dynamic data fetching and rendering
- Error handling for API requests

## How It Works

### Layout System

The `layout.js` file contains the core layout component that wraps all pages. It provides:

- A consistent page structure
- Navigation bar generation
- Dynamic content rendering

```javascript
export function Layout(content, pages = []) {
    // Generates navigation links and wraps content in a consistent layout
    return `
        <div class="app-container">
            <nav>...</nav>
            <main>${content}</main>
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

### Creating New Pages

To add a new page:

1. Create a new folder in the `pages` directory (e.g., `pages/about/`)
2. Add a `page.js` file in the folder that exports a default function:

```javascript
export default function About() {
    return `
        <div class="page">
            <h1>About Page</h1>
            <p>Your content here</p>
        </div>
    `;
}
```

### Available Routes

The project currently includes the following routes:

- **Home** (`/`): Main landing page
- **About** (`/about`): Information about the project
- **Contact Us** (`/contactus`): Contact information and form
- **Features** (`/features`): List of project features
- **Products** (`/products`): Dynamic product listing with data fetching

## Getting Started

1. Clone or download the project
2. Serve the files using a local web server
3. Open `index.html` in your browser

## Best Practices

1. Keep components pure and focused on a single responsibility
2. Use ES modules for better code organization
3. Follow consistent naming conventions for files and folders
4. Use `page.js` as the main component file in route folders
5. Handle loading errors gracefully

## Browser Support

This project uses modern JavaScript features including:
- ES Modules
- Dynamic imports
- Template literals
- Arrow functions

Ensure your target browsers support these features.

## Styling

The project includes basic CSS styling in `index.html` and Tailwindcss. Extend the styles as needed for your specific use case.

## Error Handling

The system includes error boundaries and fallback content for:
- Failed module imports
- Invalid routes
- Missing components

Custom error pages can be added to provide a better user experience.
