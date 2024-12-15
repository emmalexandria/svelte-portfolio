<script>
	import NicePortfolio from '$src/lib/components/portfolio/NicePortfolio.svelte';
	import PortfolioGrid from '$src/lib/components/portfolio/PortfolioGrid.svelte';
	import PortfolioItem from '$src/lib/components/portfolio/PortfolioItem.svelte';

	import Image from 'svimg/Image.svelte';
</script>

<svelte:head>
	<title>Emma Alexandria | Portfolio</title>
	<meta name="description" content="Emma Alexandria's project portfolio" />
</svelte:head>

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
			<Image src="m3tw.png" alt="Picture of the m3tw site" />
		</PortfolioItem>
		<PortfolioItem
			title="fRCON"
			icons={[{ href: 'https://github.com/emmalexandria/frcon', icon: 'fa6-brands:github' }]}
			technologies={['Rust']}
			description="CLI utility built in Rust for interacting with the RCON protocol"
		>
			<Image src="frcon.png" alt="Screenshot of fRCON running" />
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
			<Image src="bmicalc.png" alt="Screenshot of the BMI calculator" />
		</PortfolioItem>
		<PortfolioItem
			title="optimg"
			technologies={['Go']}
			description="CLI utility which resizes images for use in srcset in images"
			icons={[{ href: 'https://github.com/emmalexandria/optimg', icon: 'fa6-brands:github' }]}
		>
			<Image src="optimg.png" alt="Screenshot of the command line arguments for optimg" />
		</PortfolioItem>
		<PortfolioItem
			title="terminal-ts"
			technologies={['Typescript']}
			description="Typescript library for building terminal-style user interfaces with virtual file systems."
			icons={[{ href: 'https://github.com/emmalexandria/terminal-ts', icon: 'fa6-brands:github' }]}
		>
			<Image src="terminalts.png" alt="The terminal-ts logo" />
		</PortfolioItem>
	</PortfolioGrid>
</section>
