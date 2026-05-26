<!--
    Copyright (c) 2026 The Aridity Team, all rights reserved.
    Licensed under the BSD 3-Clause License
-->

<script setup lang="ts">
const networkBrandingImages = computed(() => {
	const glob = import.meta.glob("~/assets/img/branding/networks/*.png", {
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
		<div class="p-8 w-full flex flex-col gap-2 items-center text-center">
			<h1 class="text-5xl font-bold p-2">Network</h1>
			<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400">
				The Aridity Team manages a network of projects, teams,
				and communities. Subsidiaries are initiatives where the Aridity
				Team maintains majority ownership and direction, while affiliates
				remain independently operated projects supported through partnership,
				intellectual property protection, and shared community standards.
			</p>

			<section id="affiliates">
				<h2 class="text-4xl font-bold p-2">Affiliates</h2>
				<div class="flex flex-row gap-2 items-center">
					<div class="w-100 min-h-100 bg-gray-300 dark:bg-gray-800 border-2 border-gray-400 dark:border-slate-700 rounded-sm flex flex-col shadow-2xs">
						<div class="flex flex-col gap-2 items-center text-center px-8 py-4">
							<img
								:src="networkBrandingImages.hl2sbpp"
								width="128"
								height="128" />
							<p class="text-2xl font-bold">Half-Life 2: Sandbox++</p>
							<p class="text-gray-600 dark:text-gray-500">YourLocalMoon</p>
							<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400">
								Half-Life 2: Sandbox++ is a remake of Half-Life 2: Sandbox, available
								for Android, Linux and Windows computers, using a modified Source Engine
								by nillerusr.
							</p>
						</div>
						<div class="bg-gray-400 dark:bg-gray-900 p-2 w-full grow flex flex-row gap-4 justify-center items-center">
							<a class="text-cyan-500 hover:underline hover:cursor-pointer" href="https://discord.gg/69HWzqVBDE">
								Discord
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="subsidiaries">
				<h2 class="text-4xl font-bold p-2">Subsidiaries</h2>
				<div class="flex flex-row gap-2 items-center">
					<div class="w-100 min-h-100 bg-gray-300 dark:bg-gray-800 border-2 border-gray-400 dark:border-slate-700 rounded-sm flex flex-col shadow-2xs">
						<div class="flex flex-col gap-2 items-center text-center px-8 py-4">
							<img
								:src="networkBrandingImages.if"
								width="128"
								height="128" />
							<p class="text-2xl font-bold">Illustrative Fortress</p>
							<p class="text-gray-600 dark:text-gray-500">The Illustrative Fortress Team</p>
							<p class="max-w-prose md:text-lg text-gray-500 dark:text-gray-400">
								Illustrative Fortress is a TF2 Source Mod that aims to emulate the beta
								version of the game during late 2006 to early 2007, heavily inspired by
								the Early Illustrative Rendering phase of TF2 beta.
							</p>
						</div>
						<div class="bg-gray-400 dark:bg-gray-900 p-2 w-full grow flex flex-row gap-4 justify-center items-center">
							<a class="text-cyan-500 hover:underline hover:cursor-pointer" href="https://hl2sbpp.github.io">
								Website
							</a>
							<a class="text-cyan-500 hover:underline hover:cursor-pointer" href="https://discord.gg/3DkET6fqXr">
								Discord
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>