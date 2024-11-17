<script lang="ts">
	let { data } = $props();
</script>

{#each data.posts as post}
	<h1>{post.title}</h1>
{/each}
