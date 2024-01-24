<script lang="ts">
	import { PB_URL } from '$lib/config';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase(PB_URL);

	let profiles: RecordModel[] | null = null;
	async function fetchProfiles() {
		profiles = await pb.collection('profiles').getFullList({
			sort: '-created',
			filter: 'public = true'
		});
	}
	onMount(() => {
		fetchProfiles();
	});
</script>

<div class="mb-4">
	<h1 class="text-3xl mb-3">Profiles</h1>
	{#if profiles}
		{#each profiles as profile}
			<ul>
				{#if profile.public}
					<li>
						<a href="/pages/{profile.id}">{profile.name}</a>
					</li>
				{/if}
			</ul>
		{/each}
	{:else}
	<p>Loading...</p>
	{/if}
</div>
