# Development Guide

This guide helps you set up and develop the portfolio project locally in VS Code.

## 🚀 Local Development Setup

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. VS Code Setup
The project includes optimized VS Code configuration:

- **Extensions**: Install recommended extensions (VS Code will prompt you)
- **Settings**: Auto-formatting, TypeScript hints, Tailwind IntelliSense
- **Tasks**: Pre-configured build, lint, and format tasks
- **Debugging**: Full-stack debugging configuration

### 3. Start Development
```bash
npm run dev
```
- Frontend: http://localhost:5173 (Vite)
- Backend: http://localhost:5000 (Express)

## 🛠️ Available Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run check` - TypeScript type checking
- `npx eslint . --ext .ts,.tsx,.js,.jsx --fix` - Lint and fix
- `npx prettier --write "**/*.{ts,tsx,js,jsx,json,css,md}"` - Format code

### Database
- `npm run db:push` - Push schema changes
- `npm run db:studio` - Open Drizzle Studio

## 📁 Project Structure

```
├── client/src/
│   ├── components/
│   │   ├── sections/        # Page sections (hero, about, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── pages/              # Page components
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
└── .vscode/               # VS Code configuration
```

## 🎯 Key Features to Develop

### Frontend Components
- **Hero Section**: Typing animation with Chirantan's name
- **About Section**: Personal story with highlighted keywords
- **Skills Section**: Technical skills with progress indicators
- **Projects Section**: Portfolio projects with live links
- **Experience Section**: Professional experience timeline
- **Contact Section**: Contact form with glassmorphism button
- **My-Side Page**: Personal photo album

### Backend API
- **Storage Interface**: Abstract storage layer
- **Routes**: RESTful API endpoints
- **Validation**: Zod schema validation

## 🎨 Design System

### Colors
```css
--accent-indigo: #6366f1
--accent-teal: #14b8a6
--dark-base: #0f0f23
--dark-card: #1a1a2e
```

### Typography
- **Headings**: Clash Display font
- **Body**: Inter font
- **Code**: JetBrains Mono font

### Effects
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **3D Background**: Vanta.js animated network
- **Animations**: Framer Motion for smooth transitions

## 🔧 VS Code Features

### Auto-formatting
- **On Save**: Code automatically formats
- **Tailwind**: Classes are sorted and organized
- **ESLint**: Auto-fixes code issues

### Debugging
- **F5**: Start full-stack debugging
- **Breakpoints**: Set breakpoints in both client and server code
- **Console**: Integrated terminal for logs

### Tasks (Ctrl+Shift+P → "Tasks: Run Task")
- **Start Development Server**
- **Build Project**
- **Type Check**
- **Format Code**
- **Lint Fix**

### Shortcuts
- **Ctrl+Shift+P**: Command palette
- **Ctrl+`**: Toggle terminal
- **Ctrl+B**: Toggle sidebar
- **F5**: Start debugging
- **Shift+Alt+F**: Format document

## 📱 Responsive Development

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

### Testing
- Use browser dev tools for responsive testing
- Test on actual devices when possible
- Focus on mobile-first design

## 🚀 Deployment Preparation

### Build Optimization
```bash
npm run build
```

### Environment Variables
- Set up `.env` for production secrets
- Configure database connections
- Set up API keys for external services

### Performance
- Images are optimized
- Code is minified and tree-shaken
- Lazy loading implemented where needed

## 🐛 Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in configuration
2. **Module not found**: Run `npm install`
3. **TypeScript errors**: Run `npm run check`
4. **Formatting issues**: Run prettier manually

### Debug Tools
- **VS Code Debugger**: Full breakpoint debugging
- **Browser DevTools**: Client-side debugging
- **Console Logs**: Server and client logging
- **ESLint**: Code quality issues

## 🤝 Contributing

1. Create feature branch from main
2. Make changes following the established patterns
3. Test thoroughly on multiple screen sizes
4. Ensure all linting and type checks pass
5. Submit pull request with clear description

This portfolio showcases modern web development with React, TypeScript, and a beautiful dark theme with glassmorphism effects.