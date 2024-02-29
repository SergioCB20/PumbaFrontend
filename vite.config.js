import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://SergioCB20.github.io/PumbaFrontend/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        import: ["./src/index.css"],
      },
    },
  },
});
