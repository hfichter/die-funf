<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	export let data;

	// import type  { RecordModel } from 'pocketbase';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase(PB_URL);
	let player: RecordModel | null = null;

	import showdown  from 'showdown';
	let converter = new showdown.Converter();

	async function fetchPlayer() {
		player = await pb.collection('players').getOne(data.id);
	}
	onMount(() => {
		fetchPlayer();
	});
</script>

<div class="text-column">
	{#if player}
		<h1>{player.name}</h1>
		<p>{@html converter.makeHtml(player.data.description)}</p>
	{:else}
		<p>Chargement du funf...</p>
	{/if}
</div>
