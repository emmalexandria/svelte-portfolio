<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		id?: string;
	}
	import clsx from 'clsx';

	let { children, id }: Props = $props();
	let styles = $derived(clsx('mt-4 mb-2 text-header  font-serif ', {}));
</script>

<h2 {id} class={styles}>{@render children()}</h2>
