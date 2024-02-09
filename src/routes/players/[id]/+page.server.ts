import { PB_URL } from '$lib/config.js';
import PocketBase, { type RecordModel } from 'pocketbase';
import type { EntryGenerator } from './$types';
import type { RouteParams } from '../$types';

export const prerender = true;
export const entries: EntryGenerator = async () => {
	const pb = new PocketBase(PB_URL);
	const players = await pb.collection('players').getFullList({ sort: '-created' });
	return players.map(player => ({ id: player.id }));
};

export async function load(data) {

	const pb = new PocketBase(PB_URL);
	let player: RecordModel = await pb.collection('players').getOne(data.params.id);
	return { player };
}
