// @ts-check
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  integrations: [
    react(),
    alpinejs(),
    tailwind({
      applyBaseStyles: false,
    }),
    auth(),
  ],
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
  vite: {
    build: {
      rollupOptions: {
        external: ['react-quill/dist/quill.snow.css']
      },
    }
  }
});
