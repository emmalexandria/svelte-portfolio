<script lang="ts">
	import { type Snippet } from 'svelte';
	import { clsx } from 'clsx';

	interface Props {
		children: Snippet;
		icon?: Snippet;
		href: string;
	}

	let { children, icon, href }: Props = $props();
</script>

<li>
	<a class="flex flex-row gap-1 items-center" {href}>
		{#if icon}
			{@render icon()}
		{/if}
		{@render children()}
	</a>
</li>
