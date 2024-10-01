import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	output: 'server',
	adapter: cloudflare({
		imageService: 'cloudflare',
	}),
});
