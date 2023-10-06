import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:"https://luisdavid06.github.io/website-test/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
