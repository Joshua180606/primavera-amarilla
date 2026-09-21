import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    // Inlining sin límite para que las canciones y GIFs se conviertan a base64 inline
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
});
