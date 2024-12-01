<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('text-subsubheader font-serif ', {}));
</script>

<h4 class={styles}>{@render children()}</h4>
