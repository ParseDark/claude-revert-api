import { defineConfig } from "father";

export default defineConfig({
  esm: {
    input: "src",
    platform: "node",
    transformer: "esbuild",
  },
  cjs: {
    input: "src", // 默认编译目录
    platform: "node", // 默认构建为 Node.js 环境的产物
    transformer: "esbuild", // 默认使用 esbuild 以获得更快的构建速度
  },
});
