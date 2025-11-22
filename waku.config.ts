import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "waku/config";

export default defineConfig({
  vite: {
    server: {
      port: 5667,
      host: true,
    },
    plugins: [tailwindcss()],
  },
});
