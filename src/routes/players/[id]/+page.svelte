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
		<h1 class="text-3xl text-orange-500">{player.name}</h1>
		<p class="text-slate-500">{@html converter.makeHtml(player.data.description)}</p>
	{:else}
		<p>Chargement du funf...</p>
	{/if}
</div>
