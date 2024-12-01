<script lang="ts">
	import { type Post } from '$lib';
	interface Props {
		data: { posts: Post[] };
	}

	let { data }: Props = $props();
	$effect(() => {
		console.log(data);
	});
</script>
