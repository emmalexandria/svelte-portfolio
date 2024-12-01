<script lang="ts">
	interface Props {
		data: { content: any; meta: any };
	}

	let { data }: Props = $props();
</script>

<data.content />
