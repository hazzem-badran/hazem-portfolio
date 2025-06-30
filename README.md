# 🚀 Hazem Badran - Personal Portfolio

A modern, high-performance portfolio website built with React and Vite, showcasing professional experience, skills, and projects with optimal performance and user experience.

![Portfolio Preview](./src/assets/images/hazem.png)

## ✨ Features

- **⚡ High Performance**: Optimized with React.memo, useMemo, useCallback, and code splitting
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI/UX**: Clean, professional design with smooth animations
- **🚀 Fast Loading**: Lazy loading, image optimization, and efficient bundling
- **🛡️ Error Handling**: Robust error boundaries and graceful error handling
- **📊 Performance Monitoring**: Built-in performance optimization utilities
- **🔧 Code Splitting**: Automatic route-based code splitting with React.lazy
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.5.0
- **State Management**: Zustand 5.0.3
- **Icons**: FontAwesome 6.7.2
- **Email Service**: EmailJS
- **Notifications**: SweetAlert2 11.19.1

## 📦 Performance Optimizations

### Bundle Analysis
- **Vendor chunks**: 11.18 kB (gzipped: 3.96 kB)
- **Router chunks**: 34.99 kB (gzipped: 12.77 kB)
- **Icons chunks**: 59.92 kB (gzipped: 18.65 kB)
- **Utils chunks**: 73.82 kB (gzipped: 19.48 kB)
- **Main bundle**: 176.17 kB (gzipped: 56.27 kB)

### Key Optimizations Applied
- ✅ React.memo for preventing unnecessary re-renders
- ✅ useMemo for expensive calculations
- ✅ useCallback for event handlers
- ✅ Code splitting with React.lazy
- ✅ Image optimization with progressive loading
- ✅ Manual chunk splitting for better caching
- ✅ Tree shaking and minification
- ✅ Error boundaries for app stability

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hazembadran/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📂 Project Structure

```
hazem-portfolio/
├── public/                 # Static assets
│   ├── _redirects         # Netlify redirects
│   ├── icon.png          # Favicon
│   └── sw.js             # Service worker
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── HeadingSection.jsx
│   │   ├── MenuButton.jsx
│   │   ├── OptimizedImage.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── Pages/        # Page-specific components
│   ├── constant/         # Constants and configurations
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route components
│   │   ├── Home/
│   │   ├── About/
│   │   └── Contact/
│   ├── store/           # State management
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
└── package.json         # Dependencies and scripts
```

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build           # Build for production
npm run build:prod      # Build with production optimizations
npm run preview         # Preview production build

# Analysis
npm run analyze         # Analyze bundle size

# Code Quality
npm run lint           # Run ESLint
```

## 🌟 Key Components

### OptimizedImage
High-performance image component with:
- Progressive loading with placeholders
- Error handling and fallbacks
- Lazy loading support
- Smooth transitions

### ErrorBoundary
Catches JavaScript errors and provides graceful fallbacks to prevent app crashes.

### Performance Hooks
Custom hooks for performance optimization:
- `useDebounce`: Debounce function calls
- `useIntersectionObserver`: Efficient viewport detection
- `useImagePreloader`: Preload critical images

## 📊 Performance Features

### Image Optimization
- WebP format support
- Progressive loading
- Lazy loading with intersection observer
- Error state handling
- Proper sizing attributes

### Code Splitting
- Route-based splitting
- Dynamic imports
- Vendor chunk separation
- Icon libraries chunking

### Caching Strategy
- Long-term caching for static assets
- Service worker implementation
- Efficient resource prefetching

## 🎨 Design System

- **Colors**: Professional blue and gray palette
- **Typography**: Modern font stack with proper hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable, accessible UI components
- **Animations**: Subtle transitions and hover effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables: Set up EmailJS keys

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Vite Configuration
The project includes optimized Vite configuration with:
- Manual chunk splitting
- Terser minification
- Tree shaking
- Asset optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hazem Badran**
- Portfolio: [hazembadranbadran.netlify.app](https://hazembadranbadran.netlify.app)
- LinkedIn: [Hazem Badran](https://www.linkedin.com/in/hazem-badran)
- Email: hazembadran2@gmail.com

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the blazing fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **FontAwesome** for the beautiful icons
- **Netlify** for seamless deployment

---

## 📈 Performance Metrics

This portfolio achieves excellent performance scores:
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

Built with ❤️ using modern web technologies and performance best practices.

---

*Last updated: June 2025*
