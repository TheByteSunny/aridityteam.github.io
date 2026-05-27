<!--
    Copyright (c) 2026 The Aridity Team, all rights reserved.
    Licensed under the BSD 3-Clause License
-->

<script setup lang="ts">
const links = [
	{ name: $t('home'), path: "/" },
	{ name: $t('network'), path: "/network" },
];

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
	<div
		class="min-h-screen bg-white text-black p-3 dark:bg-slate-950 dark:text-white flex flex-col gap-2"
	>
		<nav
			class="bg-gray-200 dark:bg-gray-900 rounded-lg px-4 h-14 shadow-sm border border-gray-300 dark:border-slate-800"
			aria-label="Main navigation"
		>
			<div class="h-full flex items-center justify-between">
				<NuxtLink to="/" class="group inline-flex items-center">
					<img
						:src="brandingImages.AridityLogo_Transparent"
						width="96"
						height="32"
						alt="Logo"
						class="transition-transform duration-200 group-hover:scale-105"
					>
				</NuxtLink>

				<ul class="flex items-center gap-2">
					<li v-for="link in links" :key="link.path">
						<NuxtLink
							:to="link.path"
							class="px-4 py-2 rounded-md font-medium transition-all hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</nav>

		<!-- Main content -->
		<main
			class="flex grow"
		>
			<slot />
		</main>

		<footer
			class="bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm border border-gray-300 dark:border-slate-800 p-2"
			aria-label="Main footer">
			<div class="w-full flex flex-col justify-center items-center text-center">
                <p class="max-w-prose text-gray-500 dark:text-gray-400 text-center">
                    The
                    <img alt="Aridity Logo" :src="brandingImages.AridityLogo_Transparent" 
                    class="inline w-16 align-middle">
                    Team
                </p>
                <div class="flex gap-4 text-sm mt-2">
                    <a href="https://github.com/aridityteam" class="hover:underline">GitHub</a>
                    <a href="https://discord.gg/ETWffBqy8C" class="hover:underline">Discord</a>
                </div>
                <p class="max-w-prose text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                    Copyright &copy; {{ new Date().getFullYear() }} The Aridity Team, all rights reserved.
                </p>
            </div>
		</footer>
	</div>
</template>
