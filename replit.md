# Chirantan Mallick Portfolio Website

## Overview

This is a modern, professional dark-themed portfolio website for Chirantan Mallick, a final-year BCA student at Seacom Skills University specializing in AI/ML and front-end development. The website showcases projects like SalaryScope, SemesterHub, and AI Resume Screener with 3D visual effects and smooth animations. Built with React.js, it features a single-page application design with sections for hero, about, skills, projects, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme configuration and CSS variables
- **UI Components**: Radix UI components with shadcn/ui design system for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth page transitions, scroll reveals, and interactive animations
- **3D Effects**: Vanta.js for animated network background with Three.js integration
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Authentication**: Basic user schema with username/password fields ready for implementation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Setup**: Hot module replacement and error handling middleware

### Design System
- **Typography**: Clash Display for headings, Inter for body text, JetBrains Mono for code
- **Color Scheme**: Dark theme with indigo and teal accent colors, glassmorphism effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

### Project Structure
- **Monorepo Setup**: Shared schema and types between client and server
- **Component Organization**: Sections-based components (hero, about, skills, projects, experience, contact)
- **Asset Management**: Attached assets folder for project requirements and design references
- **Configuration**: Centralized TypeScript, Tailwind, and build configurations

## External Dependencies

### Core Frontend Libraries
- **React Ecosystem**: React 18 with TypeScript, React DOM, React Router alternative (Wouter)
- **UI Framework**: Radix UI primitives for accessible components, Lucide React for icons
- **Styling**: Tailwind CSS with PostCSS, class-variance-authority for component variants
- **Animation**: Framer Motion for page transitions, Vanta.js and Three.js for 3D backgrounds
- **Forms**: React Hook Form with Hookform Resolvers for form validation

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL support, Neon Database serverless driver
- **Validation**: Zod for runtime type validation, Drizzle-Zod for schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution, ESBuild for production bundling

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Code Quality**: TypeScript strict mode, ESLint with React plugins, Prettier with Tailwind plugin
- **Database**: Drizzle Kit for migrations and schema management
- **Deployment**: Node.js production server with static file serving
- **VS Code Integration**: Complete VS Code setup with extensions, tasks, debugging, and settings
- **Local Development**: Optimized for local development with auto-formatting and linting

## Local Development Setup

### VS Code Configuration
- **Extensions**: Prettier, Tailwind CSS IntelliSense, TypeScript, ESLint, Auto Rename Tag
- **Auto-formatting**: Format on save with Prettier and Tailwind class sorting
- **Debugging**: Full-stack debugging with breakpoints for both client and server
- **Tasks**: Pre-configured tasks for building, linting, formatting, and type checking
- **Settings**: Optimized for React/TypeScript development with Tailwind CSS

### Development Commands
- `npm run dev` - Start development server (client + server)
- `npm run check` - TypeScript type checking
- `npx eslint . --ext .ts,.tsx,.js,.jsx --fix` - Lint and auto-fix
- `npx prettier --write "**/*.{ts,tsx,js,jsx,json,css,md}"` - Format code
- `npm run build` - Production build
- `npm run db:push` - Push database schema changes