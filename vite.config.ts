
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // This ensures assets are loaded relative to the index.html file
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Inlines assets smaller than 10kb to reduce HTTP requests
    assetsInlineLimit: 10240,
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Minimize output for production
    minify: true,
  }
}));
