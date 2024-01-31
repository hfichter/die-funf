import { PB_URL } from '$lib/config.js';
import PocketBase, { type RecordModel } from 'pocketbase';


export const prerender = true;

export async function load(data) {

	const pb = new PocketBase(PB_URL);
	let player: RecordModel = await pb.collection('players').getOne(data.params.id);
	return { player };
}
