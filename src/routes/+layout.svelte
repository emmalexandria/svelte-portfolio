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

<header class="sticky top-0 z-[5] bg-mono-50 dark:bg-mono-950">
	<Navigation />
</header>
<main>
	{@render children()}
</main>
