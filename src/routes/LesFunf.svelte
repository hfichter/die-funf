<script lang="ts">
	import type { Player } from "$lib/types";

	export let players: Player[];
</script>

<h1 class="text-3xl text-orange-500">Les Funf</h1>
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
