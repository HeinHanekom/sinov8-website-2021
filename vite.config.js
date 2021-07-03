// vite.config.js
/*import {defineConfig} from 'vite'*/
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({command}) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    server: {
        open: true,
    },
    plugins: [vue()],
    build: {
        manifest: true,
        outDir: 'public',
        rollupOptions: {
            input: 'src/main.js',
        },
    },
    css: {
        postCss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
});


/*
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  },
})
*/
