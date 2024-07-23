// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: "404.html",
      precompress: true,
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? process.env.BASE_PATH : "",
    },
    alias: {
      $atoms: "./src/lib/components/atoms",
      $assets: "./src/lib/assets",
      $components: "./src/lib/components",
      $data: "./src/lib/data",
    },
  },
};

export default config;
