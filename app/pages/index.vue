<!--
    Copyright (c) 2026 The Aridity Team, all rights reserved.
    Licensed under the BSD 3-Clause License
-->

<script setup lang="ts">
const brandingImages = computed(() => {
	const glob = import.meta.glob("~/assets/img/branding/*.png", {
		eager: true,
	});

	return Object.fromEntries(
		Object.entries(glob).map(([path, module]) => {
			const fileName = path.split("/").pop()?.replace(".png", "") || "";

			return [fileName, (module as { default: string }).default];
		}),
	);
});
</script>

<template>
	<div class="bg-gray-200 dark:bg-gray-900 rounded-lg grow border border-gray-300 dark:border-slate-800">
		<div class="p-4 w-full flex flex-col gap-2 items-center text-center">
			<img 
				:src="brandingImages.AridityLogo_Transparent"
				width="512"
				height="256" />
			<h1 class="text-5xl font-bold p-3">
				The <span class="text-cyan-400">Aridity</span> Team
			</h1>
			<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400 p-2">
				The Aridity Team is a group of people (specifically from South-East Asia)
				that likes to develop software just for fun. We support free and open-source
				software!
			</p>
			<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400 p-2">
				See our projects here in our <a class="text-cyan-500 hover:underline hover:cursor-pointer" href="https://github.com/aridityteam">GitHub</a>!
			</p>
			<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400 p-2">
				We also handle a few affiliates and subsidiaries. See <a class="text-cyan-500 hover:underline hover:cursor-pointer" href="/network">Network</a>.
			</p>
		</div>
	</div>
</template>