import { db, Contact } from 'astro:db';

// https://astro.build/db/seed
export default async function () {
	await db.insert(Contact).values([
		{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@gmail.com',
			msg: 'Please call me',
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'Jane.doe@gmail.com',
			msg: 'Please call John Doe',
		},
	]);
}
