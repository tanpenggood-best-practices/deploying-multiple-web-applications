import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'

// 为了在index.html中使用环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: getViteEnv(mode, "VITE_BASE_PATH"),
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
            title: getViteEnv(mode, "VITE_APP_TITLE"),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, "./src")
      }
    },
  })
