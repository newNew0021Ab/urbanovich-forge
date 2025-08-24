# Replit Configuration

## Overview

This is a full-stack web application for "Кузнечная мастерская Сергея Урбановича" (Sergey Urbanovich's Blacksmith Workshop) - a premium blacksmithing business based in Grodno, Belarus. The application serves as a showcase website featuring portfolio work, services, process information, case studies, and contact details. The project implements a modern Russian-language interface with an industrial design aesthetic inspired by metalworking and craftsmanship.

The application uses a monorepo structure with separate client and server directories, implementing a React-based frontend with Express.js backend, designed for professional blacksmithing services presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system implementing industrial aesthetics (concrete, steel, copper color palette)
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack Query (React Query) for server state management
- **Design System**: Custom CSS variables and Tailwind configuration with industrial theme (concrete backgrounds, steel accents, copper highlights)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite integration
- **API Structure**: RESTful API endpoints prefixed with `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for schema migrations located in `/migrations` directory
- **Connection**: Neon Database serverless PostgreSQL via environment variables

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store
- **User Schema**: Simple user model with id, username, and password fields
- **Validation**: Zod schemas for input validation integrated with Drizzle

### Component Architecture
- **UI Components**: Comprehensive shadcn/ui component library with 40+ components
- **Pages**: Multi-page application with Index, Portfolio, Services, Process, Cases, and Contacts pages
- **Navigation**: Responsive navigation component with scroll-based styling changes
- **Theming**: Custom CSS design system with industrial color palette and typography

### Build and Development
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Development**: Concurrent development with Vite HMR and Express server
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Asset Management**: Public assets directory with robots.txt and placeholder images

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations
- **Drizzle Zod**: Schema validation integration

### UI and Design
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide Icons**: Icon library for consistent iconography
- **Google Fonts**: Typography stack (Inter, Libre Baskerville, JetBrains Mono)

### Development Tools
- **Vite**: Frontend build tool with HMR and plugin ecosystem
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **React Hook Form**: Form handling with validation
- **TanStack Query**: Server state management and caching

### Replit Integration
- **Cartographer Plugin**: Replit-specific development tooling
- **Runtime Error Modal**: Development error handling
- **Development Banner**: Replit environment detection