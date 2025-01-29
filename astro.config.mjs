// @ts-check
import { defineConfig } from 'astro/config';
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
  ],
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
  vite: {
    ssr: {
      noExternal: ['react-quill']
    }
  }
});
