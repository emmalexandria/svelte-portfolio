<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		size?: 'small' | 'regular' | 'large';
	}
	import clsx from 'clsx';

	let { children, size = 'regular' }: Props = $props();
	let styles = $derived(
		clsx('text-mono-950 dark:text-mono-50', {
			'text-body mt-2 mb-4': size == 'regular',
			'text-body-small mb-2 mt-1': size == 'small',
			'text-body-large mt-2 mb-4': size == 'large'
		})
	);
</script>

<p class={styles}>{@render children()}</p>
