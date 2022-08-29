import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://gpsarathy.github.io',
  base: '/portfolio-front-end',
  integrations: [tailwind(), react(), solid()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});