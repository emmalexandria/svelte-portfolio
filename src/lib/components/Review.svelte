<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Star } from 'lucide-svelte';

	interface Props {
		children: Snippet;
		author: string;
	}

	let { children, author }: Props = $props();
</script>

<div
	class="bg-mono-100 dark:bg-mono-900 p-4 rounded flex flex-col border-2 border-mono-950 shadow-inner-hard shadow-primary-700"
>
	<span class="flex flex-row gap-2 mb-2">
		{#each { length: 5 } as _, i}
			<Star class="drop-shadow-star dark:drop-shadow-star-dark fill-primary-500 stroke-thin" />
		{/each}
	</span>
	<p class="text-body font-sans mb-4">{@render children()}</p>
	<p class="text-body-small font-sans italic mt-auto">{author}</p>
</div>
