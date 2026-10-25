import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const SITE = "https://alejandroslandscapes.com";

export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/landscaping/christmas-light-installation/"),
    }),
  ],
  trailingSlash: "always",
  image: {
    remotePatterns: [],
  },
});
