# Dependency Status Overview

## Direct runtime dependencies
The runtime dependencies listed in `package.json` are all on actively maintained major versions. Packages such as `react@18.2.0`, `react-dom@18.2.0`, `react-router-dom@7.6.3`, and `react-markdown@10.1.0` do not have deprecation notices in the lockfile, so they remain safe to keep while you focus on other upgrades.

`@vercel/analytics@1.4.0` and `@vercel/speed-insights@1.2.0` are the latest Vercel SDKs and are not marked deprecated. They continue to work in Create React App once the React-specific analytics bundle is used.

## Dev dependencies
The TypeScript toolchain (`typescript@4.9.5`, `@types/react@18.2.15`, `@types/react-dom@18.2.7`) is older but still supported. You can postpone upgrading until you plan a broader tooling refresh because the current versions remain compatible with React 18 and CRA 5.

## Source of deprecation warnings
The `package-lock.json` shows deprecation notices for transitive packages such as legacy Babel proposal plugins, ESLint v8.56.0's internal helpers, and old tooling like `terser@5` and `svgo@1`. All of these are bundled by `react-scripts@5.0.1`, so the warnings persist as long as you stay on Create React App.

## Recommendation
You can keep shipping with the current stack, but plan to migrate away from Create React App (for example to Vite or Next.js) to reduce the deprecated transitive packages that CRA pulls in. A migration allows you to adopt newer Babel/Webpack tooling and eliminate the lockfile warnings. Until then, monitor security advisories and update minor versions when they appear.
