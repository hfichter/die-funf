<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	export let data;

	// import type  { RecordModel } from 'pocketbase';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase(PB_URL);
	let player: RecordModel | null = null;

	async function fetchPlayer() {
		player = await pb.collection('players').getOne(data.id);
	}
	onMount(() => {
		fetchPlayer();
	});
</script>

{#if player}
	<h1>{player.name}</h1>
	<p>{player.name} est un gentil Funf</p>
{:else}
	<p>Chargement du funf...</p>
{/if}
