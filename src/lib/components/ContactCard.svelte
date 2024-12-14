<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		href: string;
		name: string;
		text: string;
		icon: string;
	}

	let { href, name, text, icon }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	class="group flex flex-row items-center text-left gap-4 border bg-mono-50 dark:bg-mono-950 border-mono-950 dark:border-mono-50 shadow-hard shadow-mono-950 dark:shadow-mono-50 hover:shadow-none hover:translate-y-[3px] transition-all rounded p-2"
>
	<span class="group-hover:text-primary-500 group-hover:dark:text-primary-400 transition-all">
		<Icon width="48" height="48" {icon} />
	</span>
	<span class="flex flex-col">
		<p class="font-bold my-0 leading-none">{name}</p>
		<p class="italic text-mono-gray-light dark:text-mono-gray-dark my-0 leading-none">{text}</p>
	</span>
</a>
