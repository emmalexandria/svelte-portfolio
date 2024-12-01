<script>
	import Logo from './Logo.svelte';
	import NavigationDropdown from './NavigationDropdown.svelte';
	import NavigationDropdownItem from './NavigationDropdownItem.svelte';
	import NavItem from './NavItem.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import Email from 'lucide-svelte/icons/mail';
</script>

<div class="px-4 pt-4 w-full">
	<nav
		class=" bg-mono-50 dark:bg-mono-950 p-4 flex flex-row items-center border-thick rounded-giant border-mono-950 dark:border-mono-50"
	>
		<a href="/" class="mr-auto w-12 h-12 text-mono-950 dark:text-mono-50">
			<Logo />
		</a>
		<ul class="flex flex-row items-center gap-4">
			<NavItem href="/portfolio">Portfolio</NavItem>
			<NavItem href="/blog">Blog</NavItem>
			<NavigationDropdown title="Contact">
				<NavigationDropdownItem href="mailto:emma.jellemabutler@gmail.com">
					{#snippet icon()}
						<Email class="h-6" />
					{/snippet}
					Email
				</NavigationDropdownItem>

				<NavigationDropdownItem href="mailto:emma.jellemabutler@gmail.com">
					{#snippet icon()}
						<Email class="h-6" />
					{/snippet}
					Email
				</NavigationDropdownItem>
				<NavigationDropdownItem href="mailto:emma.jellemabutler@gmail.com">
					{#snippet icon()}
						<Email class="h-6" />
					{/snippet}
					Email
				</NavigationDropdownItem>
				<NavigationDropdownItem href="mailto:emma.jellemabutler@gmail.com">
					{#snippet icon()}
						<Email class="h-6" />
					{/snippet}
					Email
				</NavigationDropdownItem>
			</NavigationDropdown>
		</ul>
		<ThemeSwitcher />
	</nav>
</div>
