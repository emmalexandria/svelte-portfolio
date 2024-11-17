<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ThemeOption } from '$lib/themes.svelte';

	interface Props {
		children: Snippet;
		theme: ThemeOption;
	}
	let { children, theme }: Props = $props();
</script>

<label class="inline-flex items-center cursor-pointer">
	<input
		type="checkbox"
		class="sr-only peer"
		bind:checked={theme.enabled}
		oninput={() => {
			theme.toggle();
		}}
	/>
	<div
		class="relative w-12 h-6 box-border bg-mono-50 dark:bg-mono-950 outline-none border border-mono-950 dark:border-mono-50 rounded-large peer
    after:content-[''] after:absolute after:top-[2.5px] after:hover:bg-mono-950 after:hover:dark:bg-mono-50 after:peer-checked:bg-mono-950 after:peer-checked:dark:bg-mono-50 after:start-[4px] peer-checked:after:translate-x-[24px]
    peer-checked:after:start-auto after:border after:border-mono-950 dark:after:border-mono-50 after:box-border after:rounded-large after:h-4 after:w-4
    after:transition-all peer-checked:bg-primary-500 dark:peer-checked:bg-primary-500"
	></div>
	<span
		class="ml-2 opacity-50 text-mono-950 dark:text-mono-50 peer-checked:opacity-100 transition-all"
		>{@render children()}</span
	>
</label>
