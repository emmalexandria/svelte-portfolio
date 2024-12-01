<script module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Atoms/Button',
		component: Button,
		args: {
			content: 'Button'
		}
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
	{@const { content, ...rest } = args}
	<Button {...rest}>
		{#snippet children()}
			{content}
		{/snippet}
	</Button>
{/snippet}

<Story name="Default" args={{}} />

<Story name="Primary" args={{ primary: true }} />
