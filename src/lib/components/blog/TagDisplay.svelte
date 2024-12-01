<script lang="ts">
	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();
</script>

<a
	href={`/blog/tags/${tag}`}
	class="text-body-small hover:underline hover:decoration-primary-500 decoration-0 hover:decoration-1 transition-all text-mono-gray-light dark:text-mono-gray-dark"
	><span class="text-primary-500 font-bold">#</span>{tag}</a
>
