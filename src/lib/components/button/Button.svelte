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

	let classes = $derived(
		clsx(
			'border-regular box-border w-fit transiton-all ease-in-out font-sans leading-none transition-all flex flex-row items-end gap-1 justify-center',
			{
				'border-primary-600 text-primary-600 dark:border-primary-500  dark:text-primary-500 hover:text-primary-950 hover:dark:bg-primary-500 hover:dark:border-primary-500 hover:boder-primary-600 hover:bg-primary-600':
					primary,
				'border-mono-950 dark:text-mono-50 hover:bg-mono-950 hover:text-mono-50 dark:border-mono-50  hover:dark:bg-mono-50 hover:dark:text-mono-950 ':
					!primary,
				'text-body-small p-2 rounded-normal font-bold': size == 'small',
				'text-body p-3 rounded-normal font-bold': size == 'medium',
				'text-body-large p-3 rounded-normal font-bold': size == 'large'
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
