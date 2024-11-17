import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import contentCollections from '@content-collections/vite'

export default defineConfig({
  plugins: [sveltekit(), contentCollections()]
});
