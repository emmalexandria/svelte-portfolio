<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Star } from 'lucide-svelte';

	interface Props {
		children: Snippet;
		author: string;
	}

	let { children, author }: Props = $props();
</script>

<div class="bg-mono-50 dark:bg-mono-950 p-4 rounded-small flex flex-col border-2 border-mono-950">
	<span class="flex flex-row gap-2 mb-2">
		{#each { length: 5 } as _, i}
			<Star class="fill-primary-500 stroke-regular" />
		{/each}
	</span>
	<p class="text-body font-sans mb-4">{@render children()}</p>
	<p class="text-body-small font-sans italic mt-auto">{author}</p>
</div>
