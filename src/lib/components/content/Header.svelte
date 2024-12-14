<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
		id?: string;
	}
	import clsx from 'clsx';

	let { children, class: className, id }: Props = $props();
	let styles = $derived(clsx('mt-4 mb-2 text-header  font-serif ', {}));
</script>

<h2 {id} class={`${styles} ${className}`}>{@render children()}</h2>
