import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/task_management_webapp/',
  resolve: {
    alias: {      
      // 📢✨✅ [ Now only use for logo on navbar, but in future we can use it for all]
      "@": path.resolve(__dirname, "./src"), // ✅ write exactly same
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@task": path.resolve(__dirname, "./src/components/task"), // 📢
    },
  },
});
