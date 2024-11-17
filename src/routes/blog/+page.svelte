<script lang="ts">
	import PostCard from '$src/lib/components/blog/PostCard.svelte';

	let { data } = $props();
</script>

{#each data.posts as post}
	<PostCard {post} />
{/each}
