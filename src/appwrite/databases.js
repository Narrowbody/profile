import { databases } from './config';
import { ID } from 'appwrite';

const db = {};

const collections = [
	{
		dbId: '67237847000f5624d0b7',
		id: '672379130022351840c4',
		name: 'notes',
	},
];

collections.forEach((col) => {
	db[col.name] = {
		create: (payload, permissions, id = ID.unique()) =>
			databases.createDocument(
				col.dbId,
				col.id,
				id,
				payload,
				permissions
			),

		update: (id, payload, permissions) =>
			databases.updateDocument(
				col.dbId,
				col.id,
				id,
				payload,
				permissions
			),

		list: (queries = []) =>
			databases.listDocuments(col.dbId, col.id, queries),

		get: (id) => databases.getDocument(col.dbId, col.id, id),

		delete: (id) => databases.deleteDocument(col.dbId, col.id, id),
	};
});

export default db;
