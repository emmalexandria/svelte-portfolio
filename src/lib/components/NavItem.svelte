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
		clsx(
			'leading-none md:p-2 md:shadow-none md:border-none font-serif text-body-large border border-mono-950 dark:border-mono-50 rounded shadow-hard-low ',
			{
				'transition-all text-mono-950 underline-offset-2  underline decoration-transparent dark:text-mono-50 hover:decoration-primary-500 hover:decoration-2 hover:underline-offset-2':
					!active,
				'text-mono-950 dark:text-mono-50 decoration-primary-500 underline decoration-2 underline-offset-2':
					active
			}
		)
	);
</script>

<li class={classes}>
	<a class="block w-full p-4 md:p-0" {href} {target}>
		{@render children()}
	</a>
</li>
