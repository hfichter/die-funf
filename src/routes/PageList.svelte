<script lang="ts">
	import { PB_URL } from '$lib/config';
	import PocketBase, { type RecordModel } from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase(PB_URL);

	let profiles: RecordModel[] | null = null;
	async function fetchProfiles() {
		profiles = await pb.collection('profiles').getFullList({ sort: '-created' });
	}
	onMount(() => {
		fetchProfiles();
	});
</script>

<h1>Profiles:</h1>
{#if profiles}
	{#each profiles as profile}
		<ul>
			{#if profile.public}
				<li>
					<a href="/pages/{profile.id}">{profile.id}</a>
				</li>
			{/if}
		</ul>
	{/each}
{:else}
	<p>Loading...</p>
{/if}
