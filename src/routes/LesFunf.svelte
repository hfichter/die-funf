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

<h1>Les Funf:</h1>
{#if players}
	{#each players as player}
		<ul>
			<li>
				<a href="/players/{player.id}">{player.name}</a>
			</li>
		</ul>
	{/each}
{:else}
	<p>Loading...</p>
{/if}
