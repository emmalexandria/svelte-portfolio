<script>
	import Button from '$lib/components/button/Button.svelte';
	import Review from '$lib/components/Review.svelte';
	import ArrowDown from 'lucide-svelte/icons/arrow-down';
</script>

<section class="text-center md:mt-48 w-fit mx-auto">
	<h2 class="text-subsubheader font-serif">Hi, I'm Emma Alexandria</h2>
	<h1 class="font-sc text-hero-mobile md:text-hero">
		high quality <br /> <span class="text-primary-600 dark:text-primary-400">code and design</span>
	</h1>
	<span class="mt-8 flex flex-row gap-4 mx-auto w-fit">
		<Button href="/contact" primary size="large">Work with me</Button>
		<Button href="#about-me" size="large">About me <ArrowDown size="1rem" /></Button>
	</span>
</section>
<section class="px-4 mt-64 bg-primary-500 text-mono-950 dark:text-mono-50 py-8">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<Review author="Danijel Korent">
			"Emma delivered excellent work, exceptionally fast! Her clear communication and proactive
			approach made the entire process smooth and efficient. Would hire again!"
		</Review>
		<Review author="Liam Baisley">
			"Emma is incredibly hard working and knowledgeable. She updated me regularly, but worked very
			independently without needing much input from me. You can tell that she takes a lot of pride
			in her work, it absolutely shows in the final product. I would gladly work with Emma again in
			the future."
		</Review>
		<Review author="Achim Huag">
			"Emma has very broad coding skills, and can work in a variety of different programming
			languages. Very responsive, friendly and enthusiastic worker."
		</Review>
	</div>
</section>
<section class="w-full md:w-1/2 mx-auto border-2 border-mono-950 rounded-md p-4 mt-16">
	<h2 class="font-serif text-header" id="about-me">About me</h2>
	<p class="font-sans text-body">
		I'm a passionate web developer and designer. I have a particular passion for web typgraphy.
		Outside of work, I enjoy developing command-line tools and applications. I have experience in a
		wide variety of technologies, ranging from Rust to Python. In my free time, I enjoy
		argumentative writing, listening to albums, and making whatever pops into my mind.
	</p>
</section>
