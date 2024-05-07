import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/portafoglio/',
  plugins: [vue()],
  //ToDo: aggiungere resolve alias per @
})
