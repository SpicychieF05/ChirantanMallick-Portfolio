# Chirantan Mallick Portfolio

A modern, professional dark-themed portfolio website showcasing AI/ML work and web development skills with 3D animations and glassmorphism effects.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- VS Code (recommended)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
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

4. **Open in browser**
   - Frontend: http://localhost:5173 (Vite dev server)
   - Backend API: http://localhost:5000

## 🛠️ VS Code Setup

### Recommended Extensions
The project includes `.vscode/extensions.json` with recommended extensions:
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript** - Enhanced TypeScript support
- **Auto Rename Tag** - Sync HTML/JSX tag changes
- **Path Intellisense** - File path autocomplete
- **ESLint** - Code linting

### Auto-formatting
- Code auto-formats on save
- Tailwind classes are automatically sorted
- ESLint auto-fixes on save

## 📁 Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (hero, about, etc.)
│   │   │   └── ui/         # Base UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main app component
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas
└── .vscode/               # VS Code configuration
```

## 🎨 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** for accessible components
- **Wouter** for client-side routing
- **TanStack Query** for data fetching
- **Vanta.js** for 3D backgrounds

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **Zod** for validation
- **PostgreSQL** (production ready)

### Development Tools
- **Vite** for fast development
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

## 🎯 Key Features

- **Dark Theme** with glassmorphism effects
- **3D Animated Background** using Vanta.js
- **Responsive Design** mobile-first approach
- **Interactive Animations** with Framer Motion
- **Type-Safe** full TypeScript implementation
- **Photo Album** personal images gallery
- **Contact Form** with animated glassmorphism button

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Format code
npm run format

# Lint code
npm run lint

# Database operations
npm run db:generate    # Generate migrations
npm run db:migrate     # Run migrations
npm run db:studio      # Open Drizzle Studio
```

## 🔧 Configuration Files

- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.ts`
- **Vite**: `vite.config.ts`
- **ESLint**: `.eslintrc.json`
- **Prettier**: `.prettierrc`
- **VS Code**: `.vscode/settings.json`

## 🚀 Deployment

The project is optimized for deployment on platforms like:
- **Vercel** (recommended for frontend)
- **Railway** (for full-stack)
- **Netlify** (frontend only)
- **Heroku** (full-stack)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Indigo tones
- **Secondary**: Teal accents
- **Background**: Dark with glassmorphism
- **Text**: Slate variations

### Typography
- **Headings**: Clash Display
- **Body**: Inter
- **Code**: JetBrains Mono

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is personal portfolio - All rights reserved.