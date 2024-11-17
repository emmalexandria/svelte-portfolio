<script lang="ts">
	import { type Post } from '$lib';
	import Button from '../button/Button.svelte';
	import TagDisplay from './TagDisplay.svelte';
	import { page } from '$app/stores';
	interface Props {
		post: Post;
	}

	let { post }: Props = $props();

	let href = $derived(`${$page.url.pathname}/${post.slug}`);
</script>

<div
	class="flex flex-col bg-mono-50 dark:bg-mono-950 border border-mono-950 dark:border-mono-50 rounded"
>
	{#if post.image}
		<img src={post.image.src} alt={post.image.alt} />
	{/if}
	<div class="p-4">
		<h2 class="text-subsubheader">
			{post.title}
		</h2>
		<p class="text-body-small text-mono-gray-light my-1 dark:text-mono-gray-dark">{post.date}</p>
		<p class="text-body mb-4 mt-1">
			{post.summary}
		</p>
		<Button {href}>Read more</Button>
		<span class="flex flex-row mt-4 gap-2">
			{#each post.tags as tag}
				<TagDisplay href="" {tag} />
			{/each}
		</span>
	</div>
</div>
