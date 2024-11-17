<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('text-mono-950 text-subsubheader font-serif dark:text-mono-50', {}));
</script>

<h4 class={styles}>{@render children()}</h4>
