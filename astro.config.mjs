// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://diegopefer.github.io",
  base: "/portfolio/",
  vite: {
    plugins: [tailwindcss()],
    // Añade esto:
    build: {
      assetsInlineLimit: 0,
    }
  },
});