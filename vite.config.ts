import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig(async () => {
  const plugins = [
    react(),
  ];

  // Dynamically import Replit plugins only in development on Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
    plugins.push(runtimeErrorOverlay() as any);
    const cartographerModule = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographerModule.cartographer() as any);
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    // Base path: '/' for root domain (username.github.io repo)
    base: '/',
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
