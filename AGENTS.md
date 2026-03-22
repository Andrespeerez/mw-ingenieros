# AGENTS.md - Terminal Engineer App

## Project Overview

React + TailwindCSS retro terminal-style web app with left sidebar navigation and right content panel. Simulated login system (password: "republica") for VIP area feel.

## Commands

### Development
```bash
npm run dev      # Start Vite dev server (port 5173)
npm start        # Alias for dev
```

### Build & Preview
```bash
npm run build           # Production build with Vite
npm run preview         # Preview production build (port 5173)
```

### Testing
No test framework currently configured. To add tests:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

To run a single test file with Vitest:
```bash
npx vitest run src/components/VehicleCard.test.jsx
```

### Linting
No ESLint/Prettier configured. Consider adding:
```bash
npm install -D eslint eslint-plugin-react prettier eslint-config-prettier
```

## Code Style Guidelines

### File Organization
```
src/
├── components/     # Reusable UI components (PascalCase)
├── pages/          # Route pages, organized by category folder
├── data/           # Static data files (menuConfig.js, vehicles.js, etc.)
├── utils/          # Utility functions (cipherUtils.js, cryptoUtils.js)
├── auth/           # Authentication components and context
├── styles/         # Additional CSS files
└── main.jsx        # App entry point
```

### Component Structure
- Use functional components with arrow function or function declaration syntax
- Export default for page/component files
- Named exports for utilities and data

### Imports
```jsx
// React core
import React, { useState, useEffect, useMemo } from 'react'

// Router
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

// Local imports - relative paths
import Sidebar from './Sidebar'
import menuConfig from '../data/menuConfig'
import { useAuth } from '../auth/AuthContext'
```

### Naming Conventions
- **Components**: PascalCase (TerminalLayout, VehicleCard, DroidModal)
- **Files**: PascalCase for components, camelCase for utils/data
- **Functions**: camelCase
- **Constants**: camelCase or UPPER_SNAKE_CASE for magic values

### JSX & Tailwind
- Use self-closing tags for components without children
- Tailwind classes: utility-first, responsive with md: prefix
- Custom colors defined in colors.css (use semantic names like `text-green-500`)
- Retro terminal theme: green-on-black, panel backgrounds, CRT effects

### State Management
- Use `useState` for local component state
- Use `useContext` (AuthContext) for global auth state
- Use `useMemo` for expensive calculations (like menu flattening)
- Use `useEffect` for side effects (keyboard listeners, navigation)

### Error Handling
- Handle undefined props with default values where appropriate
- Use optional chaining (`?.`) for nested object access
- Return null or fallback UI for missing data

### Keyboard Navigation
- Support ArrowUp/ArrowDown for menu selection
- Enter to navigate, Escape to close modals/sidebar on mobile

## Project-Specific Patterns

### Adding New Pages
1. Create component in `src/pages/<Category>/<PageName>.jsx`
2. Add route in `src/main.jsx` under ProtectedRoute
3. Add menu item in `src/data/menuConfig.js`

### Vehicle System
- Data source: `src/data/vehicles.js`
- Components: VehicleCard (grid), VehicleModal (detail)
- Page: `src/pages/Vehiculos/Vehiculos.jsx`

### Droid System
- Data source: `src/data/droids.js`
- Components: DroidCard, DroidModal
- Page: `src/pages/Robotica/Unidades.jsx`

### Auth Flow
- Password: "republica" (hardcoded, simulated)
- AuthContext provides login/logout/isAuthenticated
- ProtectedRoute wraps authenticated routes

## Skills (Available)

| Skill | Purpose |
|-------|---------|
| react-testing | Testing patterns and setup |
| clean-code | Code quality guidelines |
| tailwind-css-patterns | Tailwind usage patterns |
| tailwindcss-animations | Animations/transitions |
| interface-design | UI/UX best practices |
| vercel-react-best-practices | React performance |

Load with: `/skill <name>` command

## Performance Notes

- Memoize expensive computations with useMemo
- Use lazy loading for heavy components if needed
- Keep bundle size small - no external UI libraries
- CRT overlay uses CSS pointer-events: none for performance