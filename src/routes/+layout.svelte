<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	let { children } = $props();

	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/vollkorn';
	import '@fontsource/vollkorn-sc/400.css';
	import '@fontsource/vollkorn-sc/600.css';
	import '@fontsource/vollkorn-sc/700.css';
	import '@fontsource/vollkorn-sc/900.css';
</script>

<header class="sticky top-0 z-[5]">
	<Navigation />
</header>
<main>
	<img
		class="sticky left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-70"
		src="/under-construction.gif"
	/>

	{@render children()}
</main>
