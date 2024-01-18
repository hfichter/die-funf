import { PB_URL } from '$lib/config';
import type { Player } from '$lib/types';
import PocketBase, { type RecordModel } from 'pocketbase';

export const prerender = true;

export async function load(): Promise<{ players: (Player & RecordModel)[] }> {
    const pb = new PocketBase(PB_URL);
    return { players: await pb.collection('players').getFullList({ sort: '-created' }) };
}