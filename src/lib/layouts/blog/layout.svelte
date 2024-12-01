<script module>
	import { h1, h2, h3, h4, h5, p } from '$lib/components/content';
	export { h1, h2, h3, h4, h5, p };
</script>

<script lang="ts">
	import type { Post } from '$lib';
	import type { Snippet } from 'svelte';

	interface Props extends Post {
		children: Snippet;
	}

	let { children, ...post }: Props = $props();
</script>

<div class="text-body font-sans max-w-content mx-auto mt-8">
	<h1 class="text-title font-serif">{post.title}</h1>
	<p class="text-body">{post.date}</p>

	{@render children()}
</div>
