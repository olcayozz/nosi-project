# Architecture Documentation
## Nosi Landing Page - Simplified Version

### System Overview
This landing page is a single-page application built with plain HTML, CSS, and JavaScript without any frameworks or external dependencies. The architecture follows a simple, clean structure designed for performance and maintainability.

### File Structure
```
nosi-project/
├── index.html              # Main landing page
├── css/
│   └── style.css        # Primary stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── health/
│   └── index.html     # Health check page
├── docker-compose.yml   # Container orchestration
├── Dockerfile           # Container build configuration
└── README.md            # Project documentation
```

### Component Architecture

#### 1. HTML Structure
- Semantic HTML5 elements for proper structure
- Responsive grid layouts
- Accessibility features
- SEO-friendly structure

#### 2. CSS Architecture
- Custom CSS properties for theme management
- CSS Grid and Flexbox for layout
- CSS animations and transitions for visual effects
- Mobile-first approach with media queries
- Modular class naming (BEM-style)

#### 3. JavaScript Functionality
- Vanilla JavaScript for interactivity
- DOM manipulation for dynamic content
- Event handling for user interactions
- Responsive behavior adjustments
- No external libraries or frameworks

### Technology Stack

#### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with animations, transitions, and responsive design
- **JavaScript**: Dynamic behavior and interactivity
- **Nginx**: Web server for serving content (port 8080)

#### Deployment
- **Docker**: Containerized deployment
- **docker-compose**: Orchestration of services
- **Health checks**: Basic health endpoint

### Data Flow

1. **Initial Load**: Browser requests index.html
2. **Asset Loading**: CSS and JS files are loaded via relative paths
3. **Rendering**: HTML is parsed and CSS is applied
4. **Interactivity**: JavaScript enhances user experience
5. **Responsive Handling**: Media queries adjust layout for different screens

### Responsive Design Approach
- Mobile-first design philosophy
- Media queries for breakpoints
- Flexible grids using CSS Grid and Flexbox
- Responsive typography
- Touch-friendly interactive elements

### Performance Considerations
- No external dependencies
- Lightweight implementation
- Minimal HTTP requests
- Efficient CSS and JavaScript
- Optimized for fast load times

### Security Considerations
- No server-side code
- Static file serving
- No user data stored or processed
- Secure deployment via Docker container

### Deployment Architecture
```
[Client Browser]
      |
   [Nginx Server]
      |
[Static Files]
      |
[Health Check Endpoint]
```

### Docker Integration
- Uses nginx for serving static files
- Health check endpoint at /health
- Port 8080 exposed for web access
- Simple container orchestration with docker-compose

### Maintenance
- Simple file-based structure
- No build step required
- Easy to update content directly in HTML
- Minimal maintenance overhead

### Code Organization
- index.html: Main page structure and content
- css/style.css: All styling with dark theme
- js/main.js: All JavaScript functionality including:
  - Smooth scrolling navigation
  - Form handling
  - Header scroll effects
  - Animation on scroll