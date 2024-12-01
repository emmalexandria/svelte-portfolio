<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	interface Props {
		children: Snippet;
		href: string;
		target?: '_blank' | '_top' | '_self' | '_parent';
	}
	import clsx from 'clsx';

	let { children, href, target = '_self' }: Props = $props();
	let active = $derived($page.url.pathname == href);
	let classes = $derived(
		clsx('leading-none p-2 font-serif text-body-large', {
			'text-mono-gray-light dark:text-mono-gray-dark hover:dark:text-mono-50 hover:text-mono-950 high-contrast:text-mono-950 high-contrast:dark:text-mono-50':
				!active,
			'text-mono-950 dark:text-mono-50 decoration-primary-500 underline decoration-2 underline-offset-1':
				active
		})
	);
</script>

<li class={classes}>
	<a {href} {target}>
		{@render children()}
	</a>
</li>
