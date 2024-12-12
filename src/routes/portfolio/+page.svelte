<script>
	import NicePortfolio from '$src/lib/components/portfolio/NicePortfolio.svelte';
	import PortfolioGrid from '$src/lib/components/portfolio/PortfolioGrid.svelte';
	import PortfolioItem from '$src/lib/components/portfolio/PortfolioItem.svelte';

	import Image from 'svimg/Image.svelte';
</script>

<section class="px-4">
	<PortfolioGrid>
		<PortfolioItem
			title="fRCON"
			github={{ href: 'https://github.com/emmalexandria/frcon', icon: 'fa6-brands:github' }}
			technologies={['Rust']}
			description="CLI utility built in Rust for interacting with the RCON protocol"
			img="https://www.placeholder.co/300x200"
		>
			<Image src="frcon.png" />
		</PortfolioItem>
		<PortfolioItem
			title="m3tw"
			technologies={['Svelte', 'Typescript', 'TailwindCSS']}
			description="Web utility for generating Material Design colors in a Tailwind config format"
			img="https://www.placeholder.co/300x200"
		>
			<Image src="m3tw.png" />
		</PortfolioItem>
		<PortfolioItem
			title="fRCON"
			technologies={['Rust']}
			description="CLI utility built in Rust for interacting with the RCON protocol"
			img="https://www.placeholder.co/300x200"
		>
			<Image src="bmicalc.png" />
		</PortfolioItem>
		<PortfolioItem
			title="fRCON"
			technologies={['Rust']}
			description="CLI utility built in Rust for interacting with the RCON protocol"
			img="https://www.placeholder.co/300x200"
		>
			<Image src="optimg.png" />
		</PortfolioItem>
	</PortfolioGrid>
</section>
