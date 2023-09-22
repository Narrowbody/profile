import { z, defineCollection } from 'astro:content';

export const collections = {
	experience: defineCollection({
		type: 'content',
		schema: z.object({
			company: z.string(),
			location: z.string(),
			fromDate: z.coerce.date(),
			toDate: z.coerce.date(),
			position: z.string(),
			logo: z.string(),
			tags: z.array(z.string()),
		}),
	}),
	services: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
