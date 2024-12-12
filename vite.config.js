import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 4173,  // Set a fixed port (you can change this number)
        open: true,   // Open the browser automatically when the server starts
        strictPort: true,  // Ensure Vite doesn't pick another available port if 4173 is taken
    },
});
