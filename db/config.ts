import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Contact = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
		email: column.text(),
		msg: column.text(),
	},
});

export default defineDb({
	tables: { Contact },
});
