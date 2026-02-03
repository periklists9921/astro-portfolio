// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  // Remove Astro dev toolbar/overlay (the hover menu)
  devToolbar: {
    enabled: false,
  },
});
