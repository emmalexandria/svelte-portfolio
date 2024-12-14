<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';

	import { fade } from 'svelte/transition';

	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/vollkorn';
	import '@fontsource/vollkorn-sc/400.css';
	import '@fontsource/vollkorn-sc/600.css';
	import '@fontsource/vollkorn-sc/700.css';
	import '@fontsource/vollkorn-sc/900.css';
	import type { LayoutData } from './$types.js';
	import type { Snippet } from 'svelte';

	interface Props {
		data: LayoutData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
</script>

<header class="sticky top-0 z-[5]">
	<Navigation />
</header>
{#key data.pathname}
	<main in:fade={{ duration: 100, delay: 200 }} out:fade={{ duration: 100 }}>
		{@render children()}
	</main>
{/key}
