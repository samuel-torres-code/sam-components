# Sam Components

Universal JSX components that work in any JSX environment (Astro, React, Next.js, Eleventy, etc.).

## Installation

```bash
npm install sam-components
# or
yarn add sam-components
# or
pnpm add sam-components
```

## Usage

### React / Next.js

```tsx
import { Button } from 'sam-components';
import 'sam-components/styles.css'; // Import component styles

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

### Astro

```astro
---
import { Button } from 'sam-components';
import 'sam-components/styles.css';
---

<Button variant="primary" size="lg" client:load>
  Click me
</Button>
```

### Using Source Files (for environments that compile JSX)

Some environments like Astro can work directly with TypeScript source files:

```tsx
import { Button } from 'sam-components/src';
// CSS modules will be handled automatically by your build system
```

## Development

### Getting Started

```bash
# Install dependencies
npm install
```

### Development Workflows

This library provides multiple ways to develop and test components locally:

#### 1. Storybook (Recommended for Component Development)

Storybook is the best way to develop and document components in isolation:

```bash
# Start Storybook dev server
npm run storybook
```

This opens Storybook at `http://localhost:6006` where you can:
- See all components and their variants
- Interact with components in isolation
- Test different props and states
- View auto-generated documentation
- Develop components without a full app setup

#### 2. Demo App (Integration Testing)

The demo app lets you test components in a real React application:

```bash
# Start demo app
npm run demo
```

This opens a local app at `http://localhost:3000` where you can:
- Test components in a realistic environment
- See how components work together
- Test integration with other libraries
- Verify styling and layout

#### 3. Library Build (For Publishing)

Build the library for distribution:

```bash
# Build library (ESM + CJS)
npm run build

# Watch mode (rebuilds on changes)
npm run dev
```

#### 4. Testing in External Projects (npm link)

To test the library in another project:

```bash
# In this repository
npm link

# In your test project
npm link sam-components
```

Now your test project will use the local version. Changes to components will be reflected after rebuilding (`npm run build` or `npm run dev`).

### Available Scripts

- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook site
- `npm run demo` - Start demo app
- `npm run build` - Build the library
- `npm run dev` - Build library in watch mode
- `npm run type-check` - Type check without building

## Project Structure

```
sam-components/
├── src/
│   ├── components/          # Component source files
│   │   ├── Button.tsx
│   │   └── Button.stories.tsx  # Storybook stories
│   └── index.ts             # Main export file
├── demo/                     # Demo app for integration testing
│   ├── App.tsx
│   ├── main.tsx
│   └── index.html
├── dist/                     # Built files (generated)
├── .storybook/               # Storybook configuration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component Guidelines

- Components should be framework-agnostic and work with standard JSX
- Use TypeScript for type safety
- Export both the component and its props type
- Keep components self-contained and reusable
- Follow React best practices for maximum compatibility

## License

MIT

