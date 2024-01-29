<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	let show = false;

	type contact = {
		title: string;
		link: string;
		icon: string | null;
	};

	const contacts: contact[] = [
		{
			title: 'Github',
			link: 'https://github.com/t0ngk',
			icon: 'tabler:brand-github'
		},
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/t0ng.kh/',
			icon: 'tabler:brand-facebook'
		},
		{
			title: ' (Twitter)',
			link: 'https://twitter.com/t0ng_k',
			icon: 'tabler:brand-x'
		},
    {
      title: 'Email',
      link: 'mailto:t0ng.k.dev@gmail.com',
      icon: 'tabler:mail'
    }
	];

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 300);
	});
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center bg-black transition">
	{#if show}
		<h1
			transition:slide={{
				duration: 700
			}}
			class="font-chakra-petch text-8xl text-gull-gray-500 md:text-9xl"
		>
			T0NG
		</h1>
	{/if}
	<div class="flex w-full flex-col items-center space-y-2 overflow-hidden p-4 transition md:w-fit">
		{#each contacts as contact, index}
			{#if show}
				<a
					class="w-full border border-gull-gray-500 px-2 py-1 text-center font-chakra-petch text-xl text-gull-gray-500
          transition
          active:bg-gull-gray-700
          active:text-black
          md:w-80
          md:hover:bg-gull-gray-600
          md:hover:text-black
          flex items-center justify-center gap-1"
					href={contact.link || "#"}
					transition:slide={{
						duration: 250,
						delay: 700 * (index + 1) - index * 250
					}}
				>
        {#if contact.icon}
          <span class="flex justify-center items-center">
            <Icon icon={contact.icon} />
          </span>
        {/if}
        {contact.title}
				</a>
			{/if}
		{/each}
	</div>
</div>
