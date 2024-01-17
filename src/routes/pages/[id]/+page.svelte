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


{#if profile && profile.public}
  <h1>{profile.id}</h1>
  <p>{profile.description}</p>
{:else}
  <p>Loading profile...</p>
{/if}
