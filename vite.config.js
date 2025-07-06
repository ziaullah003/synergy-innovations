import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      config: {
        content: [
          './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    })
  ],
})
