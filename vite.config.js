import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',

                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png)$/.test(name ?? '')){
                        return 'assets/images/[name]-[hash][extname]';
                    }

                    if (/\.(svg)$/.test(name ?? '')){
                        return 'assets/svg/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return 'assets/[name]-[hash][extname]';
                },
            },
        }
    },
    server: {
        open: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, './src/partials'),
            reloadOnPartialChange: true,

            context: {
                title: 'Hello, world!',
            },
        }),
    ],
}
