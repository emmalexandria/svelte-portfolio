<script>
	import NicePortfolio from '$src/lib/components/portfolio/NicePortfolio.svelte';
	import PortfolioGrid from '$src/lib/components/portfolio/PortfolioGrid.svelte';
	import PortfolioItem from '$src/lib/components/portfolio/PortfolioItem.svelte';
</script>

<section class="px-4">
	<PortfolioGrid>
		<PortfolioItem title="fRCON" technologies={['Rust']} img="https://www.placeholder.co/300x200">
			CLI utility built in Rust for interacting with the fRCON protocol.
		</PortfolioItem>
		<PortfolioItem title="fRCON" technologies={['Rust']}>
			CLI utility built in Rust for interacting with the fRCON protocol.
		</PortfolioItem>
	</PortfolioGrid>
</section>
