# AI Agent Instructions for Btech Ruchulu Project

## Project Overview
This is a React + TypeScript e-commerce website for Btech Ruchulu, selling authentic Indian food products. The project uses:
- Vite as the build tool
- React 18 with TypeScript
- shadcn/ui component library with Tailwind CSS
- React Router for navigation
- TanStack Query for data management

## Key Architecture Patterns

### Component Structure
- UI components are in `src/components/ui/` using shadcn/ui patterns
- Page components are in `src/pages/`
- Shared utilities in `src/lib/utils.ts`
- Hooks in `src/hooks/`

### Styling Approach
- Uses Tailwind CSS with custom theme configuration
- Color scheme uses CSS variables through shadcn/ui theming
- Common classes:
  - `bg-background` for main background
  - `text-muted-foreground` for secondary text
  - `gradient-hero` for gradient effects
  - `border-border` for borders

### Navigation
- Route definitions in `src/App.tsx`
- Uses `<Navigation />` component on each page
- Add new routes above the catch-all `*` route

### Component Patterns
- Use `cn()` utility from `@/lib/utils` for className merging
- Follow shadcn/ui component patterns for new UI components
- Use Radix UI primitives for accessible components
- Wrap primitive components in `React.forwardRef()`

## Development Workflow

### Setup
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### File Organization
- New UI components go in `src/components/ui/`
- New pages go in `src/pages/`
- Add type definitions in component files
- Use TypeScript path aliases (e.g., `@/components/`)

### Best Practices
- Use TypeScript types/interfaces for props
- Follow existing component patterns
- Keep components focused and composable
- Use React Query for data fetching
- Maintain accessibility patterns from Radix UI

## Important Paths & Files
- `src/App.tsx` - Main routing setup
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind & theming config
- `vite.config.ts` - Build configuration
- `src/lib/utils.ts` - Shared utilities

## Common Tasks
- Adding a new page:
  1. Create component in `src/pages/`
  2. Add route in `src/App.tsx`
  3. Include `<Navigation />` component
- Adding new UI component:
  1. Follow shadcn/ui patterns
  2. Use TypeScript + Radix UI primitives
  3. Place in `src/components/ui/`