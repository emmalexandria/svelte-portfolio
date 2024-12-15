<script lang="ts">
	import NavItem from './NavItem.svelte';
	import Icon from '@iconify/svelte';
</script>

<NavItem href="/portfolio">Portfolio</NavItem>
<NavItem href="/contact">Contact</NavItem>
<NavItem target="_blank" href="https://blog.emmalexandria.dev">
	<div class="flex flex-row items-center gap-2">
		Blog
		<Icon icon="lucide:square-arrow-out-up-right" height="16" />
	</div>
</NavItem>
