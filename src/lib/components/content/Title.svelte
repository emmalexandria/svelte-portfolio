<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('text-mono-950 font-serif text-title dark:text-mono-50', {}));
</script>

<p class={styles}>{@render children()}</p>
