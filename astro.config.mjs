import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import 'animate.css';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});