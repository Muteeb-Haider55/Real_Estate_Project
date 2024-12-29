import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://locolhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
