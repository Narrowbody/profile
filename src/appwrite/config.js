import { Client, Databases } from 'appwrite';

const client = new Client();

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('672375e1001807d08290');

const databases = new Databases(client);

export { client, databases };
