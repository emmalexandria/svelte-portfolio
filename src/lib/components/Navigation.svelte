<script>
	import Logo from './Logo.svelte';
	import NavItem from './NavItem.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<div class="p-4 w-full">
	<nav
		class=" bg-mono-50 dark:bg-mono-950 p-4 flex flex-row items-center border-thick rounded-giant border-mono-950 dark:border-mono-50"
	>
		<a href="/" class="grow w-12 h-12 text-mono-950 dark:text-mono-50">
			<Logo />
		</a>
		<ul class="flex flex-row items-center gap-4 mr-4">
			<NavItem href="/portfolio">Portfolio</NavItem>
			<NavItem href="/blog">Blog</NavItem>
			<NavItem href="/contact">Contact</NavItem>
		</ul>
		<ThemeSwitcher />
	</nav>
</div>
