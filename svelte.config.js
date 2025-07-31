import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Add this edge function configuration
      runtime: 'edge',
      split: false
    })
  }
};

export default config;
