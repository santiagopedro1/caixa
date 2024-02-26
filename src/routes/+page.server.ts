import { db } from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const users = await db.query.user.findMany();
	return {
		users
	};
}) satisfies PageServerLoad;
