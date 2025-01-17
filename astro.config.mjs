import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import cloudflare from '@astrojs/cloudflare';
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify/functions";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'server',
  adapter: vercel()
});