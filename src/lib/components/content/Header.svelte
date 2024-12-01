<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('mt-4 mb-2 text-header  font-serif ', {}));
</script>

<h2 class={styles}>{@render children()}</h2>
