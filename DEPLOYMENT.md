# Deployment Guide for GitHub Pages

This document provides instructions for deploying the Portfolio Website to GitHub Pages.

## Prerequisites

- Git installed locally
- A GitHub repository with the project
- Node.js and npm installed

## Branch Strategy

- **`master`** (or `main`) - Source code branch with development work
- **`gh-pages`** - Production deployment branch where built files are stored

The `gh-pages` package automatically creates and manages the `gh-pages` branch when you run the deploy command.

## Deployment Steps

### 1. Build the Project

Before deploying, ensure your project builds without errors:

```bash
npm run build
```

This creates the `dist` folder with production-ready files.

### 2. Deploy to GitHub Pages

Run the following command to deploy the built files to the `gh-pages` branch:

```bash
npm run deploy
```

This command:
- Builds the project (via `predeploy` script)
- Creates/pushes a `gh-pages` branch with the `dist` folder contents
- Commits the built files to that branch

### 3. GitHub Pages Settings

After deployment:

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Branch**, select `gh-pages` as the source branch
4. Click **Save**
5. Wait a few minutes for the site to be published

Your site will be available at:
```
https://sanjjiiev.github.io/Portfolio_Website/
```

## Complete Deployment Workflow

For a full deployment cycle:

```bash
# 1. Commit all changes to master
 git add .
 git commit -m "Your commit message"
 git push origin master

# 2. Deploy to gh-pages
 npm run deploy
```

## Troubleshooting

### Build Fails

If `npm run build` fails:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails

If `npm run deploy` fails:

```bash
# Force deploy to overwrite gh-pages
npm run deploy -- --force

# Or manually push to gh-pages
npm run build
npx gh-pages -d dist --branch gh-pages --force
```

### Site Not Updating

If changes don't appear after deployment:

- Clear your browser cache (Ctrl+Shift+Delete)
- Wait 2-5 minutes for GitHub Pages CDN to propagate
- Check GitHub Actions for any deployment errors

## Automation with GitHub Actions

For automatic deployment on every push to `master`, create a workflow file:

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Vite Configuration for GitHub Pages

Make sure your `vite.config.js` has the correct base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Website/', // Must match your repository name
})
```

The `homepage` field in `package.json` should also be set:

```json
{
  "homepage": "https://sanjjiiev.github.io/Portfolio_Website"
}
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run deploy -- --force` | Force deploy (overwrites gh-pages) |

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite GitHub Pages Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [gh-pages npm Package](https://www.npmjs.com/package/gh-pages)

---

**Last Updated:** August 30, 2026
