<script module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import ThemeToggleComponent from './ThemeToggle.svelte';
	import { ThemeOption } from '../themes.svelte';
	import Sun from 'lucide-svelte/icons/sun';

	const { Story } = defineMeta({
		title: 'Atoms/ThemeToggle',
		component: ThemeToggleComponent,
		args: {
			theme: new ThemeOption('', '', '')
		}
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
	{@const { content, ...rest } = args}
	<ThemeToggleComponent {...rest}>
		{#snippet children()}
			<Sun class="stroke-regular" />
		{/snippet}
	</ThemeToggleComponent>
{/snippet}

<Story name="ThemeToggle" args={{}} />
