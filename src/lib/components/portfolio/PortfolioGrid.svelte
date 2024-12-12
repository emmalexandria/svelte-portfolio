<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="masonry">
	{@render children()}
</div>

<style lang="scss">
	.masonry {
		margin-top: 2rem;
		height: 1000px;
		display: flex;
		align-content: space-between;
		flex-flow: column wrap;

		&::after,
		&::before {
			content: '';
			flex-basis: 100%;
			width: 0;
			order: 2;
		}
	}
</style>
