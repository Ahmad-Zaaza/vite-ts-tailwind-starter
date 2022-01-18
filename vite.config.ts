import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import visualiser from "rollup-plugin-visualizer";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [visualiser({ open: true })]
    }
  },
  resolve: {
    alias: [{ find: /@\//, replacement: `${pathResolve("src")  }/` }]
  }
});
