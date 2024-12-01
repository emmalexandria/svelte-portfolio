<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		title: string;
		technologies: string[];
		description: string;
		href: string;
		github?: string;
		img?: string;
	}

	let { children, title, technologies, description, href, github, img }: Props = $props();
</script>

<div
	class="w-fit flex flex-col justify-center border border-mono-950 dark:border-mono-50 p-4 rounded break-inside-avoid"
>
	<img src={img} class="h-full" />
	<h2 class="text-body-header font-serif font-bold">{title}</h2>
	<p>{@render children()}</p>
	<span class="flex flex-row flex-wrap">
		{#each technologies as tech}
			<p class="text-body-small">{tech}</p>
		{/each}
	</span>
</div>
