// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// markdown rendering
import { mdsvex } from "mdsvex";
// syntax highlighting
import { getHighlighter } from "shiki";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
};

const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter({
      fallback: "index.html",
      precompress: true,
    }),

    paths: {
      base: process.env.NODE_ENV === "production" ? process.env.BASE_PATH : "",
    },
    alias: {
      $atoms: "./src/lib/components/atoms",
      $molecules: "./src/lib/components/molecules",
      $organisms: "./src/lib/components/organisms",
      $assets: "./src/lib/assets",
      $components: "./src/lib/components",
      $data: "./src/lib/data",
      $posts: "./src/lib/posts",
      $code: "./src/lib/data/code",
    },
  },
};

export default config;
