<script lang="ts" module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import TagDisplayComponent from './TagDisplay.svelte';

	const { Story } = defineMeta({
		title: 'Blog/TagDisplay',
		component: TagDisplayComponent,
		args: {
			tag: 'programming',
			href: ''
		}
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args: any)}
	<TagDisplayComponent {...args} />
{/snippet}

<Story name="TagDisplay" />
