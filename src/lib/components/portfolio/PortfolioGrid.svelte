<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="masonry max-w-full mt-8">
	{@render children()}
</div>

<style lang="scss">
	.masonry {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.masonry {
			margin-top: 2rem;
			height: 1000px;
			display: flex;
			gap: 0rem;
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
	}
</style>
