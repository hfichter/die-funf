<script lang="ts">
	import { PB_URL } from '$lib/config.js';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import { onMount } from 'svelte';
	import PocketBase, { type RecordModel } from 'pocketbase';

	export let data;

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
		<h1 class="text-3xl mb-3">{profile.name}</h1>
		<div class="markdown">
			{@html DOMPurify.sanitize(marked.parse(profile.content || '- no content -') as string)}
		</div>
	{:else}
		<p>Loading profile...</p>
	{/if}
</div>
