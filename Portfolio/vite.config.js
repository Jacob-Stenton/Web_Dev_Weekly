// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'Pages/projects.html'),
                threeD: resolve(__dirname, 'Pages/3D.html'),
                mm: resolve(__dirname, 'Pages/mm.html'),
                contact: resolve(__dirname, 'Pages/contact.html'),
            },
        },
    },
})