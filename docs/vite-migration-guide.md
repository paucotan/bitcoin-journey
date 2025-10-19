# Vite Migration Guide

This document captures the high-level plan for migrating the project from Create React App (CRA) to [Vite](https://vitejs.dev/). Use it as a reference when you are ready to tackle the toolchain swap.

## Goals
- Replace the deprecated CRA build pipeline with Vite for faster builds, modern dependencies, and improved DX.
- Preserve existing runtime behavior (routing, analytics, markdown rendering, etc.) while changing only the tooling.

## Effort Overview
- **Estimated time:** ~0.5–1 working day for someone comfortable with CRA and React tooling.
- **Risk level:** Low-to-medium. Expect to validate routing, data fetching, and analytics after the migration because the dev server and bundler change.

## Migration Steps

### 1. Update Dependencies and Scripts
1. Remove `react-scripts` and related CRA-only packages (e.g., `@testing-library/jest-dom` if unused).
2. Add the following dev dependencies:
   - `vite`
   - `@vitejs/plugin-react`
3. Update `package.json` scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```
4. Keep existing runtime dependencies (React, React Router, analytics SDKs, etc.).

### 2. Convert the Entry Point
1. Rename `src/index.js` to `src/main.jsx` (or keep `.js` if preferred).
2. Replace the CRA bootstrap code with Vite's recommended pattern:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```
3. Reattach any providers or instrumentation (e.g., `<SpeedInsights />`, `<Analytics />`).

### 3. Move the HTML Shell
1. Create `index.html` at the project root using the contents of `public/index.html`.
2. Ensure the file contains the `div` with `id="root"` and any required `<script>` or `<link>` tags.
3. Update references:
   - Replace CRA placeholders like `%PUBLIC_URL%` with absolute `/` paths.
   - Swap `process.env.REACT_APP_*` usage for `import.meta.env.VITE_*` where needed.
4. Keep static assets in `public/`; Vite serves them from the root (`/asset.png`).

### 4. Environment Variables
1. Rename any environment variables that should be exposed to the client from `REACT_APP_*` to `VITE_*`.
2. Update code references to use `import.meta.env.VITE_*`.

### 5. Testing and Verification
1. Run `npm run dev` (or `pnpm run dev`) and verify local HMR, routing, and analytics events.
2. Run `npm run build` to ensure the production bundle succeeds.
3. Test the production preview via `npm run preview` or by deploying to a staging environment.
4. Smoke-test critical pages, navigation, and external integrations after deployment.

## Optional Enhancements
- Configure module path aliases in `vite.config.js` for cleaner imports.
- Enable SVG/asset imports as React components via Vite plugins if needed.
- Consider adding TypeScript gradually (Vite supports it out of the box) if you plan to expand types.

## Follow-Up Considerations
- Update CI/CD workflows to use the new scripts (`vite build`).
- Remove CRA-specific documentation or scripts once the migration is complete.
- Monitor dependencies for additional cleanup (deprecated packages should drop from the tree after CRA removal).

## References
- Vite React guide: <https://vitejs.dev/guide/#scaffolding-your-first-vite-project>
- CRA-to-Vite migration article: <https://vitejs.dev/guide/why.html>

