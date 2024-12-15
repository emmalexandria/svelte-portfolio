<script>
	import Button from '$lib/components/button/Button.svelte';
	import Review from '$lib/components/Review.svelte';
	import Body from '$src/lib/components/content/Body.svelte';
	import BodyHeader from '$src/lib/components/content/BodyHeader.svelte';
	import Header from '$src/lib/components/content/Header.svelte';
	import Subheader from '$src/lib/components/content/Subheader.svelte';
	import WindowButtons from '$src/lib/components/WindowButtons.svelte';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Emma Alexandria | Web designer & developer</title>
	<meta name="description" content="Emma Alexandria's portfolio & personal website" />
</svelte:head>

<section class="px-4 select-none text-center mt-8 md:mt-32 w-fit mx-auto">
	<div
		class="bg-mono-50 dark:bg-mono-950 p-8 md:p-16 rounded-large shadow-hard shadow-mono-950 dark:shadow-mono-50 border-thick border-mono-950 dark:border-mono-50"
	>
		<h2 class="text-body-header md:text-subsubheader font-serif">Hi, I'm Emma Alexandria</h2>
		<h1 class="font-sc text-hero-mobile md:text-hero">
			high quality <br />
			<span
				class="selection:drop-shadow-none text-primary-600 dark:text-primary-400 drop-shadow-primary-layers"
				>code & design</span
			>
		</h1>
		<span class="mt-8 flex flex-row gap-4 mx-auto w-fit">
			<Button href="/contact" primary>Work with me</Button>
			<Button href="#about-me">
				<span class="flex flex-row items-center gap-2">
					About me <Icon icon="lucide:arrow-down" />
				</span>
			</Button>
		</span>
	</div>
</section>
<section class="px-4 mt-16 md:mt-72 bg-primary-500 text-mono-950 dark:text-mono-50 py-8">
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
<section class="px-4 bg-mono-100 dark:bg-mono-900 py-16">
	<div
		class="max-w-content bg-mono-50 dark:bg-mono-950 p-8 rounded-large border-thick shadow-hard shadow-mono-950 dark:shadow-mono-50 font-sans text-body mx-auto border-mono-950 dark:border-mono-50"
	>
		<WindowButtons />
		<Header class="drop-shadow-primary dark:drop-shadow-primary-dark" id="about-me">About me</Header
		>
		<Body>
			I'm a passionate web developer and designer. I have a particular passion for web typgraphy.
			Outside of work, I enjoy developing command-line tools and applications. I have experience in
			a wide variety of technologies, ranging from Rust to Python. In my free time, I enjoy
			argumentative writing, listening to albums, and making whatever pops into my mind.
		</Body>
		<Subheader class="drop-shadow-primary dark:drop-shadow-primary-dark">Technologies</Subheader>
		<Body>
			I work with a wide variety of technologies. My favourite frontend combination is Svelte with
			TailwindCSS. I find most backends are served well enough by a PocketBase instance. However, I
			also have considerable experience with Next.js and Hugo. I'm currently learning Vue and
			Nuxt.js. I typically design mockups in Figma, and logos and other assets in Illustrator.
		</Body>
		<Subheader class="drop-shadow-primary dark:drop-shadow-primary-dark">Freelancing</Subheader>
		<Body>
			I currently work as a Freelancer through Upwork, which is where you should contact me if
			you're interested in collaboration.
		</Body>
	</div>
</section>
