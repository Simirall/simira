import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'

export default defineConfig({
  plugins: [tailwindcss(), cloudflare(), ssrPlugin()],
  server: {
    port: 5667,
    host: true,
  },
  resolve: {
    alias: {
      react: "hono/jsx",
      "react-dom": "hono/jsx",
      "react/jsx-runtime": "hono/jsx/jsx-runtime",
      "react/jsx-dev-runtime": "hono/jsx/jsx-dev-runtime",
    },
  },
});
