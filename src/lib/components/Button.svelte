<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		size?: 'small' | 'medium' | 'large';
		primary?: boolean;
		href?: string;
		target?: '_self' | '_parent' | '_top' | '_blank';
		type?: 'button' | 'submit';
		children: Snippet;
		onClick?: MouseEventHandler<HTMLElement>;
	}
	let {
		size = 'medium',
		primary = false,
		href,
		target = '_self',
		type = 'button',
		children,
		onClick
	}: Props = $props();
	import type { MouseEventHandler } from 'svelte/elements';
	import clsx from 'clsx';

	let classes = $state(
		clsx(
			'box-border text-mono-950 w-fit transiton-all ease-in-out font-sans leading-none transition-all border-regular flex flex-row items-end gap-1 justify-center',
			{
				'border-mono-950 bg-primary-500 hover:dark:bg-primary-400 hover:bg-primary-600': primary,
				'border-mono-950 dark:text-mono-50 hover:bg-mono-950 hover:text-mono-50 dark:border-mono-50 hover:dark:bg-mono-50 hover:dark:text-mono-950 ':
					!primary,
				'text-body-small p-2 rounded-normal font-bold': size == 'small',
				'text-body px-3 py-2 rounded-normal font-bold': size == 'medium',
				'text-body-large px-4 py-3 rounded-normal font-bold': size == 'large'
			}
		)
	);
</script>

{#if href}
	<a class={classes} {href} {target}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes} {type} onclick={onClick}>
		{@render children?.()}
	</button>
{/if}
