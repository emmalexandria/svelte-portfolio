<script module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
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

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ content: 'Button' }} />

<Story name="Primary" args={{ primary: true, content: 'Button' }} />

<Story name="Small" args={{ primary: false, size: 'small', content: 'Button' }} />
<Story name="Medium" args={{ primary: false, size: 'medium', content: 'Button' }} />
<Story name="Large" args={{ primary: false, size: 'large', content: 'Button' }} />
