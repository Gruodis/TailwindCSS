import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, './src/partials'),
        }),
    ],
    root: 'src',
    build: {
        outDir: '../dist',
    },
    server: {
        open: true
    }
}
