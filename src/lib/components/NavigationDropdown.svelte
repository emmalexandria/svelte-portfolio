<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import { clickOutside } from '$lib';
	import { on } from 'svelte/events';
	import { fly } from 'svelte/transition';

	interface Props {
		children: Snippet;
		title: String;
	}
	import clsx from 'clsx';

	let { children, title }: Props = $props();

	let open: boolean = $state(false);
</script>

<li
	class="relative"
	use:clickOutside={() => {
		open = false;
	}}
>
	<button
		class="leading-none flex h-full flex-row gap-1 items-center p-2 font-serif text-body-large text-mono-gray-light dark:text-mono-gray-dark hover:dark:text-mono-50 hover:text-mono-950"
		onclick={() => {
			open = !open;
		}}
		aria-expanded={open}
	>
		{title}
		{#if open}
			<ChevronUp class="h-5" />
		{:else}
			<ChevronDown class="h-5 " />
		{/if}
	</button>
	{#if open}
		<ul
			transition:fly={{ delay: 50, duration: 100 }}
			class="absolute p-2 gap-2 flex flex-col top-0 translate-y-1/2 border-thick border-mono-950 w-full rounded"
		>
			{@render children()}
		</ul>
	{/if}
</li>
