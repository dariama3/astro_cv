import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dariama3.github.io',
  base: '/astro_cv',
  vite: {
    plugins: [tailwindcss()],
  },
});
