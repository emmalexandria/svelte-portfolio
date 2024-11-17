import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { bundledLanguages, getSingletonHighlighter } from 'shiki/index.mjs';
import { alexandriaLight, alexandriaDark, alexandriaHC } from './src/lib/shiki-themes.js';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const theme = 'catppuccin-latte'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  layout: 'src/lib/layouts/blog/layout.svelte',
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await getSingletonHighlighter({
        themes: [theme],
        langs: Object.keys(bundledLanguages)
      })

      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }))
      return `{@html \`${html}\` }`
    },
  },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug],
}



/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    alias: {
      $src: 'src'
    },
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter()
  },

  extensions: ['.svelte', '.md']
};

export default config;
