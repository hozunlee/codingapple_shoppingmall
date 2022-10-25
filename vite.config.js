import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
// 절대경로 설정
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@src", replacement: resolve(__dirname, "src") },
            {
                find: "@components",
                replacement: resolve(__dirname, "src/components"),
            },
            { find: "@styles", replacement: resolve(__dirname, "src/styles") },
        ],
    },
});
