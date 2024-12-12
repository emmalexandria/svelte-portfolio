<script>
	import ContactCard from '$src/lib/components/ContactCard.svelte';
</script>

<section class="text-center mt-8 w-fit mx-auto">
	<h1 class="font-sc text-title">contact me</h1>
	<div class="flex flex-col gap-4">
		<ContactCard
			href="https://bsky.app/profile/emmalexandria.dev"
			icon="ri:bluesky-fill"
			name="Bluesky"
			text="@emmalexandria.dev"
		/>
		<ContactCard
			href="mailto:emma.jellemabutler@gmail.com"
			icon="mdi:email"
			name="E-mail"
			text="emma.jellemabutler@gmail.com"
		/>
		<ContactCard
			href="https://www.upwork.com/freelancers/~01cacad3f6882a8903"
			icon="fa6-brands:upwork"
			name="Upwork"
			text="Emma Jellema-Butler"
		/>
		<ContactCard
			href="https://www.linkedin.com/in/emma-jb/"
			icon="fa6-brands:linkedin"
			name="LinkedIn"
			text="emma-jb"
		/>
	</div>
</section>
