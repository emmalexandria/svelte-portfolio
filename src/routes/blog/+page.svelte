<script lang="ts">
	import PostCard from '$src/lib/components/blog/PostCard.svelte';

	let { data } = $props();
</script>

<section class="text-body font-sans max-w-content mx-auto mt-8">
	{#each data.posts as post}
		<PostCard {post} />
	{/each}
</section>
