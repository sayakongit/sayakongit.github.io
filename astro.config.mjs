import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  },
  redirects: {
    '/talks/deconstructing-the-monolith': 'https://docs.google.com/presentation/d/1dl3hP_eDORShqzBBAja03Ou9dhy5kACE-LyJHn6n72c'
  }
});