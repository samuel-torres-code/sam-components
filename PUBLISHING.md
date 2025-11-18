# Publishing Guide

This guide will help you publish `sam-components` to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/signup) if you don't have one
2. **Login to npm**: Run `npm login` in your terminal

## Pre-Publishing Checklist

### 1. Update package.json

Before publishing, update these fields in `package.json`:

- **`author`**: Add your name/email (e.g., `"Your Name <your.email@example.com>"`)
- **`repository.url`**: Update with your actual GitHub repository URL
- **`bugs.url`**: Update with your repository issues URL
- **`homepage`**: Update with your repository homepage URL

### 2. Build the Library

Make sure everything builds correctly:

```bash
npm run build
```

This will:
- Compile TypeScript
- Build the library (ESM + CJS)
- Generate type definitions
- Bundle CSS into `dist/styles.css`

### 3. Verify the Build

Check that `dist/` contains:
- `index.js` (ESM)
- `index.cjs` (CommonJS)
- `index.d.ts` (TypeScript definitions)
- `styles.css` (Component styles)

### 4. Test Locally (Optional but Recommended)

Test the package locally before publishing:

```bash
# In this directory
npm pack

# This creates a .tgz file. In another test project:
npm install /path/to/sam-components-0.1.0.tgz
```

## Publishing Steps

### Option 1: Public Package (Recommended for first publish)

```bash
# Make sure you're logged in
npm whoami

# Publish (will run prepublishOnly script automatically)
npm publish
```

### Option 2: Scoped Package (if name is taken)

If you need to use a scoped package:

1. Update `package.json`:
   ```json
   "name": "@yourusername/sam-components"
   ```

2. Publish as public (scoped packages are private by default):
   ```bash
   npm publish --access public
   ```

### Option 3: Private Package

If you want to keep it private (requires paid npm account):

```bash
npm publish --access restricted
```

## Version Management

After publishing, use semantic versioning for updates:

- **Patch** (bug fixes): `npm version patch` → 0.1.1
- **Minor** (new features): `npm version minor` → 0.2.0
- **Major** (breaking changes): `npm version major` → 1.0.0

Then publish:
```bash
npm publish
```

## Post-Publishing

1. **Tag your release** in Git:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

2. **Create a GitHub release** (if using GitHub) with release notes

3. **Update documentation** if needed

## Troubleshooting

### "Package name already exists"
- Use a scoped package: `@yourusername/sam-components`
- Choose a different name

### "You must verify your email"
- Check your email and verify your npm account

### "Invalid package name"
- Package names must be lowercase
- Can contain hyphens and underscores
- Cannot start with a dot or underscore

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run type-check`
- Verify Vite config is correct

## Using Your Published Package

Once published, others (and you) can install it:

```bash
npm install sam-components
# or
npm install @yourusername/sam-components
```

Then use it:

```tsx
import { Button, Card } from 'sam-components';
import 'sam-components/styles.css';
```

## Updating the Package

1. Make your changes
2. Update version: `npm version patch|minor|major`
3. Build: `npm run build`
4. Publish: `npm publish`

---

Good luck with your first publish! 🚀

