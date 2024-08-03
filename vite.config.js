import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    { enforce: 'pre'},
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
  ],
})