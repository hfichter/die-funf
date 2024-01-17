<script lang="ts">
	import { PB_URL } from '$lib/config';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase(PB_URL);

	let players: RecordModel[] | null = null;
	async function fetchPlayers() {
		players = await pb.collection('players').getFullList({ sort: '-created' });
	}
	onMount(() => {
		fetchPlayers();
	});
</script>

<h1 class="text-3xl text-orange-500">Les Funf:</h1>
{#if players}
		<ul class="text-sky-500">
			{#each players as player}
			<li>
				<a href="/players/{player.id}">{player.name}</a>
			</li>
			{/each}
		</ul>
{:else}
	<p class="text-sky-500">Loading...</p>
{/if}
