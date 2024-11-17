<script module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import BodyComponent from './Body.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Typography/Body',
		component: BodyComponent,
		args: {
			size: 'regular'
		},
		argTypes: {
			size: {
				control: {
					type: 'select'
				}
			}
		}
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
	{@const { content, ...rest } = args}
	<BodyComponent {...rest}>
		{#snippet children()}
			{content}
		{/snippet}
	</BodyComponent>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Body"
	args={{
		content:
			'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt dictumst platea velit consectetur dictum laoreet eu. Scelerisque etiam dignissim tempus; sed vulputate praesent erat curabitur ac. Per ullamcorper convallis himenaeos enim ornare quam. Porttitor tortor enim penatibus facilisis lorem eleifend ridiculus faucibus egestas. Vivamus magnis consectetur fringilla litora at facilisis id molestie. Tellus ullamcorper sapien nibh etiam ultrices amet varius. Eget sem eu augue aliquam quisque vestibulum.'
	}}
/>
