// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.DOMAIN,
	// base: '/docs',
	// trailingSlash: 'always',
});
