<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	export let data;

	// import type  { RecordModel } from 'pocketbase';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase(PB_URL);
	let profile: RecordModel | null = null;

	async function fetchProfile() {
		profile = await pb.collection('profiles').getOne(data.id);
	}
	onMount(() => {
		fetchProfile();
	});
</script>

<div class="text-column">
	{#if profile && profile.public}
		<h1 class="text-3xl text-orange-500">{profile.name}</h1>
		<p class="text-sky-500">{profile.content}</p>
	{:else}
		<p  class="text-sky-500">Loading profile...</p>
	{/if}
</div>
