import { z, defineCollection } from 'astro:content';

export const collections = {
	experience: defineCollection({
		type: 'content',
		schema: z.object({
			company: z.string(),
			location: z.string(),
			position: z.string(),
			fromDate: z.coerce.date(),
			toDate: z.coerce.date(),
			logo: z.string(),
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

	courses: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			duration: z.string(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			preview: z.string().optional(),
			keywords: z.array(z.string()),
			publishDate: z.coerce.date(),
		}),
	}),

	about: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			position: z.string(),
			specialization: z.string(),
			headline: z.string(),
			professionalExperience: z.string(),
			education: z.string(),
			affiliations: z.string(),
			licenses: z.string(),
			languages: z.string(),
			publishDate: z.coerce.date(),
		}),
	}),
};
