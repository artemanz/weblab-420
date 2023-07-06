import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react(), legacy({
    targets: ['defaults', 'ie >= 11'],
  }),],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  server: {
    port: 3333,
    host: true
  }
});
