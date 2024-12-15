<script>
	import Logo from './Logo.svelte';
	import NavItems from './NavItems.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import Icon from '@iconify/svelte';
	import { clickOutside } from '$lib/index.ts';
	import { fly } from 'svelte/transition';

	let shown = $state(false);
</script>

<div class="px-4 pt-4 w-full">
	<nav
		class=" shadow-hard-high bg-mono-50 dark:bg-mono-950 p-4 flex flex-row items-center border-thick rounded-giant border-mono-950 dark:border-mono-50"
	>
		<a
			href="/"
			aria-label="Link to home"
			class="md:mr-auto w-12 h-12 text-mono-950 dark:text-mono-50"
		>
			<Logo />
		</a>
		<div
			class="relative w-full md:w-fit mx-auto md:mx-0"
			use:clickOutside={() => {
				shown = false;
			}}
		>
			<button
				class="mx-auto p-2 flex flex-row gap-1 md:hidden md:aria-hidden"
				onclick={() => (shown = !shown)}
				aria-label="Navigation toggle"
				aria-controls="navigationMenu"
				aria-expanded={shown}
			>
				<Icon height={24} icon="lucide:menu" />
				<p class="font-bold">Menu</p>
			</button>
			{#if shown}
				<ul
					in:fly={{ duration: 250, y: -25 }}
					out:fly={{ duration: 250, y: -25 }}
					id="navigationMenu"
					class="flex w-full rounded flex-col p-4 md:hidden absolute bg-mono-50 dark:bg-mono-950 shadow-hard-high border-thick border-mono-950 dark:border-mono-50 left-1/2 top-0 translate-y-20 -translate-x-1/2 gap-4"
				>
					<NavItems></NavItems>
				</ul>
			{/if}
			<ul class="flex-col hidden md:flex md:flex-row items-center gap-4">
				<NavItems></NavItems>
			</ul>
		</div>
		<ThemeSwitcher />
	</nav>
</div>
