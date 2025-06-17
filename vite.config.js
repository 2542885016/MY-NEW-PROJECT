import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 确保 `@` 代表的是 `/src` 文件夹
    }
  }
})
