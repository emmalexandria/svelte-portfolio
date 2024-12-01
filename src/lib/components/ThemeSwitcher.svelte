<script lang="ts" module>
</script>

<script lang="ts">
	import Palette from 'lucide-svelte/icons/palette';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import { onMount } from 'svelte';
	import { ThemeOption } from '$lib/themes.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Contrast } from 'lucide-svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { fly, slide } from 'svelte/transition';

	let dark = new ThemeOption('dark', 'dark', '(prefers-color-scheme: dark)');
	let highContrast = new ThemeOption('high-contrast', 'high-contrast', '(prefers-contrast: more)');

	import { clickOutside } from '$lib';

	let shown = $state(false);

	onMount(() => {
		dark.init();
		highContrast.init();
	});
</script>

<svelte:head>
	<script>
		//Code to prevent theme flickering on load
		if (document) {
			let dark = localStorage.getItem('dark') || 'false';
			if (dark === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('dark', 'true');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('dark', 'false');
			}
		}
	</script>
</svelte:head>

<div
	class="relative"
	use:clickOutside={() => {
		shown = false;
	}}
>
	<button
		class="text-mono-700 h-full dark:text-mono-200 hover:text-mono-950 hover:dark:text-mono-50 p-2 rounded-full transition-all"
		onclick={() => {
			shown = !shown;
		}}><Palette class="stroke-regular h-5" strokeWidth="2px" /></button
	>
	{#if shown}
		<div
			transition:fly={{ delay: 50, duration: 100 }}
			class="flex justify-center items-center flex-col gap-4 absolute end-0 top-0 translate-y-1/2 translate-x-[18px] p-4 bg-mono-50 dark:bg-mono-950 border-thick border-mono-950 dark:border-mono-50 rounded-large"
		>
			<ThemeToggle theme={dark}>
				<Moon class="stroke-regular" size="24px"></Moon>
			</ThemeToggle>
			<ThemeToggle theme={highContrast}>
				<Contrast class="stroke-regular" size="24px"></Contrast>
			</ThemeToggle>
			<Button
				size="small"
				onClick={() => {
					dark.resetToAutomatic();
					highContrast.resetToAutomatic();
				}}>Automate</Button
			>
		</div>
	{/if}
</div>
