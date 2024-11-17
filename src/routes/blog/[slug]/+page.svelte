<script lang="ts">
	interface Props {
		data: { content: any; meta: any };
	}

	let { data }: Props = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<data.content />
