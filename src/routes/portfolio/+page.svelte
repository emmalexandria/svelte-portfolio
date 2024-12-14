<script>
	import NicePortfolio from '$src/lib/components/portfolio/NicePortfolio.svelte';
	import PortfolioGrid from '$src/lib/components/portfolio/PortfolioGrid.svelte';
	import PortfolioItem from '$src/lib/components/portfolio/PortfolioItem.svelte';

	import Image from 'svimg/Image.svelte';
</script>

<section class="px-4">
	<PortfolioGrid>
		<PortfolioItem
			title="m3tw"
			technologies={['Svelte', 'Typescript', 'TailwindCSS']}
			description="Web utility for generating Material Design colors in a Tailwind config format"
			icons={[
				{ href: 'https://m3tw.emmalexandria.dev', icon: 'lucide:link' },
				{ href: 'https://github.com/emmalexandria/material-tailwind', icon: 'fa6-brands:github' }
			]}
		>
			<Image src="m3tw.png" />
		</PortfolioItem>
		<PortfolioItem
			title="fRCON"
			icons={[{ href: 'https://github.com/emmalexandria/frcon', icon: 'fa6-brands:github' }]}
			technologies={['Rust']}
			description="CLI utility built in Rust for interacting with the RCON protocol"
		>
			<Image src="frcon.png" />
		</PortfolioItem>

		<PortfolioItem
			title="New BMI calculator"
			technologies={['Svelte', 'Typescript', 'TailwindCSS']}
			description="Simple BMI calculator which implements the New BMI formula."
			icons={[
				{ href: 'https://newbmi.emmalexandria.dev', icon: 'lucide:link' },
				{ href: 'https://github.com/emmalexandria/newbmi', icon: 'fa6-brands:github' }
			]}
		>
			<Image src="bmicalc.png" />
		</PortfolioItem>
		<PortfolioItem
			title="optimg"
			technologies={['Go']}
			description="CLI utility which resizes images for use in srcset in images"
			icons={[{ href: 'https://github.com/emmalexandria/optimg', icon: 'fa6-brands:github' }]}
		>
			<Image src="optimg.png" />
		</PortfolioItem>
		<PortfolioItem
			title="terminal-ts"
			technologies={['Typescript']}
			description="Typescript library for building terminal-style user interfaces with virtual file systems."
			icons={[{ href: 'https://github.com/emmalexandria/terminal-ts', icon: 'fa6-brands:github' }]}
		>
			<Image src="terminalts.png" />
		</PortfolioItem>
	</PortfolioGrid>
</section>
