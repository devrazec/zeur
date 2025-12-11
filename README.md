# Zeur Project

Urban Services / City Request Management App. Type of system where residents submit issues (potholes, trash, lighting, noise, etc.) and the municipality reviews, assigns, and resolves them.

# Commands

```
-- Create App

npx create-next-app@15 .

✔ Would you like to use TypeScript? … No
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … No
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … No
? Would you like to customize the import alias (`@/*` by default)? › No

-- Setup prettier and lint

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

-- Copy files from nextjs-15-app-router

.env.local
.eslintrc.json
.prettierignore
.prettierrc
next.config.mjs

-- Setup package.json

"scripts": {
"dev": "next dev & sleep 2 && open http://localhost:3000/zeur",
"build": "next build && next export",
"start": "next start",
"lint": "next lint",
"format": "prettier --write .",
"predeploy": "echo > out/.nojekyll",
"deploy": "gh-pages -d out"
},

"repository": {
"type": "git",
"url": "git+https://github.com/devrazec/zeur.git"
},

"homepage": "https://github.com/devrazec/zeur",

-- Deploy

npm i -D gh-pages

npm run predeploy
npm run deploy

-- Create Files

gh-pages/.nojekyll
gh-pages/_next/.nojekyll

-- Material UI

npm i -S @mui/material @emotion/react @emotion/styled

-- Primereact UI

npm i -S primereact primeicons primeflex

-- Fonts

npm i -S @fontsource/roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

-- Icons

npm i -S flag-icons @mui/icons-material iconsax-react @iconify/react react-icons

-- Components

npm i -S @mui/x-date-pickers dayjs @mui/x-data-grid @mui/x-data-grid-generator uuid

-- Maps

npm i -S leaflet leaflet-draw react-leaflet@next react-leaflet-cluster react-leaflet-draw

-- Database

npm i -S mongodb
npm i -S firebase
npm i -S better-sqlite3


-- Create Global React Context


-- Copy files to app folder
robot
sidemap
not-found

npm run format
npm run lint
npm run build
npm run deploy

```

# Demo
https://devrazec.github.io/zeur

# Project
https://github.com/devrazec/zeur