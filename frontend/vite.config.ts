import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';
import vitePluginImp from "vite-plugin-imp";

export default defineConfig({
    // vite config
    root: process.cwd(),

    server: {
        port: 3000
    },

    build: {
        outDir: "",
        assetsDir: ""
    },

    plugins: [
        react(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/lib/${name}/style/index.less`,
                },
            ],
        })
    ],

    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') }
        ]
    }
});
