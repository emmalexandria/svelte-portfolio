<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		icon: string;
		height?: string | number;
	}

	let { icon, height = '24' }: Props = $props();
</script>

<Icon class="hover:text-primary-500 " {icon} {height} />
