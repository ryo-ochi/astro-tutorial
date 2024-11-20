import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryo-ochi.github.io',
  base: '/astro-tutorial',
  integrations: [preact(), react()],
});