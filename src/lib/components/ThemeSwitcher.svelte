<script lang="ts" module>
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { ThemeOption } from '$lib/themes.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { fly, slide } from 'svelte/transition';

	let dark = new ThemeOption('dark', 'dark', '(prefers-color-scheme: dark)');
	let highContrast = new ThemeOption('high-contrast', 'high-contrast', '(prefers-contrast: more)');

	import { clickOutside } from '$lib';
	import Icon from '@iconify/svelte';

	let shown = $state(false);

	const toggleMenu = () => {
		shown = !shown;
	};

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
		class="text-mono-950 h-full dark:text-mono-50 hover:text-mono-950 hover:dark:text-mono-50 p-2 rounded-full transition-all"
		onclick={toggleMenu}
	>
		<Icon height={24} icon="lucide:palette" class="stroke-regular " />
	</button>
	{#if shown}
		<div
			in:fly={{ duration: 250, y: -25 }}
			out:fly={{ duration: 250, y: -25 }}
			class="flex shadow-hard-high justify-center items-center flex-col gap-4 absolute left-0 top-0 translate-y-20 -translate-x-1/2 p-4 bg-mono-50 dark:bg-mono-950 border-thick border-mono-950 dark:border-mono-50 rounded-large"
		>
			<ThemeToggle theme={dark}>
				<Icon icon="lucide:moon" height={24} />
			</ThemeToggle>
			<ThemeToggle theme={highContrast}>
				<Icon icon="lucide:contrast" class="stroke-regular" height={24} />
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
