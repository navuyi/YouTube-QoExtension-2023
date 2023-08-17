import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import copyContentStyle from './utils/plugins/copy-content-style'
import makeManifest from './utils/plugins/make-manifest'
import copyResource from './utils/plugins/copy-resource'

const root = resolve(__dirname, 'src')
const pagesDir = resolve(root, 'pages')
const assetsDir = resolve(root, 'assets')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')

export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [
    react(),
    makeManifest(),
    copyContentStyle(),
    copyResource(['src', 'templates', 'qualityScoreUI.html'], 'qualityScoreUI.html'),
  ],
  publicDir,
  build: {
    outDir,
    assetsDir,
    sourcemap: process.env.__DEV__ === 'true',
    rollupOptions: {
      input: {
        //devtools: resolve(pagesDir, 'devtools', 'index.html'),
        //panel: resolve(pagesDir, 'panel', 'index.html'),
        content: resolve(pagesDir, 'content', 'index.ts'),
        background: resolve(pagesDir, 'background', 'index.ts'),
        setup: resolve(pagesDir, 'setup', 'index.html'),
        //popup: resolve(pagesDir, 'popup', 'index.html'),
        //newtab: resolve(pagesDir, 'newtab', 'index.html'),
        //options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
})
