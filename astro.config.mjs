import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	output: 'hybrid',
	adapter: cloudflare({
		imageService: 'cloudflare',
	}),
});
