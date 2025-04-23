React + Typescript + Vite

1.1. Crear el proyecto
npm create vite@latest nombre-del-proyecto -- --template react-ts
cd nombre-del-proyecto
npm install


1.2. Estructura de carpetas recomendada
src/
├── assets/               # Imágenes, logos, íconos
├── components/           # Componentes reutilizables (botones, inputs, etc.)
├── features/             # Features/domains del negocio (ej: auth, users)
├── hooks/                # Custom hooks
├── layouts/              # Layouts generales
├── lib/                  # Utils, validadores, funciones generales
├── pages/                # Páginas vistas completas
├── routes/               # Configuración de rutas
├── services/             # Conexión a APIs u otras capas
├── store/                # Estado global (ej: Zustand o Redux)
├── types/                # Tipos globales
└── App.tsx               # Punto de entrada principal



2.1. Eslint + Prettier (para código limpio)
npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import


Tailwindcss
3.  npm install -D tailwindcss postcss autoprefixer
en index.css colocar: 
@import "tailwindcss";

Instala el plugin de Vite para Tailwind CSS:
npm install -D @tailwindcss/vite

Actualiza tu archivo vite.config.ts:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

React Router
4. npm install react-router-dom

4.1. Sweetalert2
npm install sweetalert2
npm install sweetalert2-react-content

4.2. react-hook-form
npm install react-hook-form

5. api con axios
   npm install axios
   npm install @types/axios

6. testing

Usaremos:

Las librerías más utilizadas y recomendadas para testing en React son:

React Testing Library (Para testing de componentes)

Jest (Como test runner y marco de assertions)

Testing Library User Event (Para simular interacciones de usuario)


🔧 Instalación.

npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest

npx ts-jest config:init

npm install --save-dev jest-environment-jsdom


En tu package.json, agrega esto:
"scripts": {
"test": "jest"
}

7. Construye tu app para producción

npm run build

Esto genera la carpeta dist/ que contiene HTML, JS y CSS optimizado.


