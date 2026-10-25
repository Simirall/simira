import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "waku/config";

export default defineConfig({
  vite: {
    server: {
      port: 5667,
      host: "localhost",
    },
    plugins: [tailwindcss()],
    environments: {
      rsc: {
        resolve: {
          // Keep Waku's RSC transform active instead of loading this peer in Node.
          noExternal: ["react-server-dom-webpack"],
        },
      },
    },
  },
});
