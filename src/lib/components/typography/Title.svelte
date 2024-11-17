<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('text-mono-950 text-title font-bold dark:text-mono-50', {}));
</script>

<p class={styles}>{@render children()}</p>
