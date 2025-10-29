import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, rollupVersion } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), dts({
    include: ['app/entities/*.ts'],
    rollupTypes: true
  })],
});
