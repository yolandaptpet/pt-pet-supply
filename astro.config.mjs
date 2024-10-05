// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    react(),
    alpinejs(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: true,
    port: 4321
  }
});