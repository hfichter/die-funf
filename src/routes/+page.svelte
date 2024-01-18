<script>
	import LesFunf from './LesFunf.svelte';
	import PageList from './PageList.svelte';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="magnetescope" />
</svelte:head>

<section>
	<LesFunf players={data.players} />
	<!-- <PageList /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
