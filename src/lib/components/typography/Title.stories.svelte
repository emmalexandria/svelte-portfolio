<script module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import TitleComponent from './Title.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Typography/Title',
		component: TitleComponent
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
	{@const { content, ...rest } = args}
	<TitleComponent {...rest}>
		{#snippet children()}
			{content}
		{/snippet}
	</TitleComponent>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Title"
	args={{
		content: 'Sphinx of black quartz, judge my vow.'
	}}
/>
