// @ts-check
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';

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
  adapter: cloudflare()
});
