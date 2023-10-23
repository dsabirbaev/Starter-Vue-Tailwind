import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from "url";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url))},
            {find: "@cmp", replacement: fileURLToPath(new URL("./src/components", import.meta.url))},
            {find: "@pg", replacement: fileURLToPath(new URL("./src/pages", import.meta.url))},
        ],
    },
});
