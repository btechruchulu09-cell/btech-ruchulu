import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // ✅ Important for Vercel deployment

  server: {
    host: "::",
    port: 8080,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  define: {
    "process.env": {}, // ✅ Prevents undefined env errors in Vercel
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));