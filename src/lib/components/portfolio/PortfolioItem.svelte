<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type Snippet } from 'svelte';
	import Image from 'svimg/Image.svelte';
	import PortfolioIconLink from './PortfolioIconLink.svelte';

	export interface IconLink {
		href: string;
		icon: string;
	}

	export interface PortfolioItemProps {
		children: Snippet;
		title: string;
		technologies: string[];
		description: string;
		href: string;
		icons?: IconLink[];
	}

	let { children, title, technologies, description, href, icons }: PortfolioItemProps = $props();
</script>

<div
	class="grid-item flex flex-col justify-center border shadow-hard bg-mono-50 dark:bg-mono-950 border-mono-950 dark:border-mono-50 p-4 rounded break-inside-avoid"
>
	<div class="w-full h-auto rounded overflow-clip mb-4">
		{@render children()}
	</div>
	<span class="flex flex-row items-center">
		<h2 class="text-body-header font-serif font-bold mr-auto">{title}</h2>
		{#if icons}
			<div class="flex flex-row items-center gap-2">
				{#each icons as icon}
					<a class="hover:star-dark p-2" target="_blank" href={icon.href}>
						<PortfolioIconLink icon={icon.icon} height={16} />
					</a>
				{/each}
			</div>
		{/if}
	</span>
	<p>{description}</p>
	<span class="flex flex-row flex-wrap gap-2">
		{#each technologies as tech}
			<p
				class="text-mono-gray-light dark:text-mono-gray-dark high-contrast:text-mono-950 dark:high-contrast:text-mono-50 text-body-small"
			>
				{tech}
			</p>
		{/each}
	</span>
</div>

<style>
	@media (min-width: 768px) {
		.grid-item {
			margin-bottom: 2%;
			width: 32%;
		}

		.grid-item:nth-child(3n + 1) {
			order: 1;
		}
		.grid-item:nth-child(3n + 2) {
			order: 2;
		}
		.grid-item:nth-child(3n) {
			order: 3;
		}
	}
</style>
