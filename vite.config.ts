import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isSSG = process.env.SSG === 'true';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      // Add SSG plugin if needed
    ].filter(Boolean as unknown as (<T>(x: T | false) => x is T)),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // For SSG builds, use a different entry point
      rollupOptions: isSSG ? {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          server: path.resolve(__dirname, 'src/entry-server.tsx'),
        },
      } : undefined,
    },
  };
});
