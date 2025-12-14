// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    assets: "./app/assets",
  },
  css: ["./app/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
