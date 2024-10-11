import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import db from '@astrojs/db';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), db(), react()],
	output: 'hybrid',
	adapter: cloudflare({}),
});
