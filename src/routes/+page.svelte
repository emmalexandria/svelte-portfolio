<script>
	import Button from '$lib/components/button/Button.svelte';
	import Review from '$lib/components/Review.svelte';
	import Body from '$src/lib/components/content/Body.svelte';
	import BodyHeader from '$src/lib/components/content/BodyHeader.svelte';
	import Header from '$src/lib/components/content/Header.svelte';
	import Subheader from '$src/lib/components/content/Subheader.svelte';
	import ArrowDown from 'lucide-svelte/icons/arrow-down';
</script>

<section class="select-none text-center md:mt-48 w-fit mx-auto">
	<h2 class="text-subsubheader font-serif">Hi, I'm Emma Alexandria</h2>
	<h1 class="font-sc text-hero-mobile md:text-hero">
		high quality <br />
		<span
			class="selection:drop-shadow-none text-primary-600 dark:text-primary-400 drop-shadow-primary-layers"
			>code and design</span
		>
	</h1>
	<span class="mt-8 flex flex-row gap-4 mx-auto w-fit">
		<Button href="/contact" primary>Work with me</Button>
		<Button href="#about-me">About me <ArrowDown size="1rem" /></Button>
	</span>
</section>
<section
	class="px-4 mt-64 bg-primary-500 text-mono-950 dark:text-mono-50 py-8 shadow-hard shadow-primary-700"
>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<Review author="Danijel Korent">
			"Emma delivered excellent work, exceptionally fast! Her clear communication and proactive
			approach made the entire process smooth and efficient. Would hire again!"
		</Review>
		<Review author="Liam Baisley">
			"Emma is incredibly hard working and knowledgeable ... You can tell that she takes a lot of
			pride in her work, it absolutely shows in the final product. I would gladly work with Emma
			again in the future."
		</Review>
		<Review author="Achim Huag">
			"Emma has very broad coding skills, and can work in a variety of different programming
			languages. Very responsive, friendly and enthusiastic worker."
		</Review>
	</div>
</section>
<section
	class="max-w-content font-sans text-body mx-auto border-2 border-mono-950 rounded-md p-4 mt-16"
>
	<Header id="about-me">About me</Header>
	<Body>
		I'm a passionate web developer and designer. I have a particular passion for web typgraphy.
		Outside of work, I enjoy developing command-line tools and applications. I have experience in a
		wide variety of technologies, ranging from Rust to Python. In my free time, I enjoy
		argumentative writing, listening to albums, and making whatever pops into my mind.
	</Body>
	<Subheader>Technologies</Subheader>
	<Body>
		I work with a wide variety of technologies. My favourite combination on the frontend is
		SvelteKit, TailwindCSS, and Storybook. I find most backends are served well enough by a
		PocketBase instance. However, I also have extensive experience with Next.js and Hugo. I
		typically design mockups in Figma, and logos and other assets in Illustrator.
	</Body>
</section>
