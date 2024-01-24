<script lang="ts">
	import type { Player } from '$lib/types';
	export let players: Player[];
</script>

<div class="mb-4">
	<h1 class="text-3xl mb-3">Les Fünf</h1>
	{#if players}
		<ul>
			{#each players as player}
				<li>
					<a href="/players/{player.id}">{player.name}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
