# zeur

Building Zeur Projects

# Project-1 Nextjs 15

npx create-next-app@15 .

✔ Would you like to use TypeScript? … No
✔ Which linter would you like to use? › ESLint … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … No
✔ Would you like to customize the import alias (`@/*` by default)? … No

Create Global React Context

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

Copy files from nextjs-15-app-router
.env.local
.eslintrc.json
.prettierignore
.prettierrc

Setup package.json

"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"format": "prettier --write ."
},

npx flowbite-react@latest init
npm i -S flowbite-react-icons
npm i -S tailwind-merge lucide-react tw-animate-css
npm i -S react-icons @iconify/react
npm i -D flowbite-typography

Copy files to app folder
robot
sidemap
not-found

npm i -S aos
npm i -S next-themes
npm i -S @tabler/icons-react

npm i -S leaflet
npm i -S @turf/turf
npm i -S react-leaflet@next
npm i -S react-leaflet-cluster

npm i -S firebase

# Project-2 React 18 cra-Template

npx create-react-app .

npm i -S react@18 react-dom@18

npm i -S react-router-dom

npm i -S ajv ajv-keywords

Create Global React Context

npm i -S eslint-plugin-react-refresh

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Project-3 Nodejs + React 18

npm init -y
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx eslint --init

✔ What do you want to lint? · javascript
✔ How would you like to use ESLint? · check syntax and find problems
✔ What type of modules does your project use? · esm (import/export)
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ Would you like to install them now? eslint, @eslint/js, globals, eslint-plugin-react · Yes
✔ Which package manager do you want to use? · npm

- Backend Node

npm i -D esbuild
npm i -S express

- Frontend React

npx create-vite@latest frontend -- --template react

Select a framework: React
Select a variant: JavaScript
Use rolldown-vite (Experimental)?: No
Install with npm and start now? Yes

npm i -S react@18 react-dom@18
npm i -S react-router-dom
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

Copy files from other project
.env
eslint.config.js
.prettierrc
.prettierignore

Setup package.json

"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"lint": "eslint . --ext js,jsx",
"lint:fix": "eslint . --ext js,jsx --fix",
"format": "prettier --write ."
},

npm run format
npm run lint
npm run build

npm i -D tailwindcss postcss autoprefixer

npm i -S tailwind-merge tw-animate-css

npm i -D @tailwindcss/postcss

Copy files from other project

postcss.config.cjs
tailwind.config.js

Create Global React Context

npx flowbite-react@latest init

npm i -D flowbite-typography

npm i -S flowbite-react-icons react-icons @iconify/react @tabler/icons-react

npm i -S leaflet
npm i -S leaflet-draw
npm i -S react-leaflet@next
npm i -S react-leaflet-cluster
npm i -S react-leaflet-draw

# Project-4 React 19

npx create-vite@latest . -- --template react

Select a framework: React
Select a variant: JavaScript
Use rolldown-vite (Experimental)?: No
Install with npm and start now? Yes

npm i -S react@18 react-dom@18
npm i -S react-router-dom

npm i -S leaflet
npm i -S leaflet-draw
npm i -S react-leaflet@next
npm i -S react-leaflet-cluster
npm i -S react-leaflet-draw

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

Copy files from other project
.env
eslint.config.js
.prettierrc
.prettierignore

Setup package.json

"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"lint": "eslint . --ext js,jsx",
"lint:fix": "eslint . --ext js,jsx --fix",
"format": "prettier --write ."
},