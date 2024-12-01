<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	import clsx from 'clsx';

	let { children }: Props = $props();
	let styles = $derived(clsx('mt-6 mb-4 font-serif text-title ', {}));
</script>

<p class={styles}>{@render children()}</p>
