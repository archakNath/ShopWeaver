import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),],
})
