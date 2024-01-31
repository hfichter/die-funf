<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	import { converter } from '$lib/globals.js';
	import PocketBase, { type RecordModel } from 'pocketbase';

	export let data;

	const pb = new PocketBase(PB_URL);
	let player: RecordModel = data.player;
</script>

<div class="text-column">
	<h1 class="text-3xl mb-3">{player.name}</h1>
	<p>{@html converter.makeHtml(player.data.description)}</p>
</div>
