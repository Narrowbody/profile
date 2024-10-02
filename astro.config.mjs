import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	output: 'server',
	imageService: 'cloudflare',
	adapter: cloudflare({
		imageService: 'cloudflare',
	}),
});
