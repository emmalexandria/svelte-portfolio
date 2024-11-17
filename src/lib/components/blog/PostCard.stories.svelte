<script module lang="ts">
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import PostCardComponent from './PostCard.svelte';
	import { type Post } from '$lib';

	const defaultArgs: Post = {
		title: "How I got to ride the world's biggest monkey rides.",
		image: {
			src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			alt: 'A cute puppy'
		},
		summary:
			'My exhilerating story of amazing joy as I ride some big monkey rides at six flags amusement park. Featuring other rides such as The Three Kings and The Great Wall of China',
		slug: '',
		date: '17/11/2024',
		tags: ['Big monkey', 'Rides', 'Money']
	};

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Blog/PostCard',
		component: PostCardComponent,
		args: {
			post: defaultArgs
		}
	});
</script>

<script>
	setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args: any)}
	<PostCardComponent {...args} />
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->

<Story name="Default" args={{ post: { ...defaultArgs, image: undefined } }} />

<Story name="Image" args={{ post: { ...defaultArgs } }} />
