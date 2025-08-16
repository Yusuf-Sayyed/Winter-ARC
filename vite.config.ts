import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// REMOVE the tailwindcss import

export default defineConfig({
  // REMOVE tailwindcss() from the plugins array
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})