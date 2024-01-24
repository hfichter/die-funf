<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	import { converter } from '$lib/globals.js';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';

	export let data;

	const pb = new PocketBase(PB_URL);
	let player: RecordModel | null = null;

	async function fetchPlayer() {
		player = await pb.collection('players').getOne(data.id);
	}
	onMount(() => {
		fetchPlayer();
	});
</script>

<div class="text-column">
	{#if player}
		<h1 class="text-3xl mb-3">{player.name}</h1>
		<p>{@html converter.makeHtml(player.data.description)}</p>
	{:else}
		<p>Chargement du funf...</p>
	{/if}
</div>
