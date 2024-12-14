<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}
	import clsx from 'clsx';

	let { children, class: className }: Props = $props();
	let styles = $derived(clsx('mt-4 mb-2 text-subheader font-serif ', {}));
</script>

<h3 class={`${styles} ${className}`}>{@render children()}</h3>
