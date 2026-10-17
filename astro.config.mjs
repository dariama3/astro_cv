import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/astro_cv/' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
}));
