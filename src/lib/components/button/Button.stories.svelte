<script module lang="ts">
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

{#snippet sharedTemplate(args: any)}
	<Button {...args}>
		{#snippet children()}
			Button
		{/snippet}
	</Button>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->

<Story name="Default" args={{}} />

<Story name="Primary" args={{ primary: true }} />

<Story name="Small" args={{ primary: false, size: 'small' }} />
<Story name="Medium" args={{ primary: false, size: 'medium' }} />
<Story name="Large" args={{ primary: false, size: 'large' }} />
