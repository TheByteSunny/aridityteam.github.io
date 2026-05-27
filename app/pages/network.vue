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

useHead({
	title: $t('network'),
	meta: [
		{ name: 'description', content: 'A portfolio website for The Aridity Team.' }
	]
});
</script>

<template>
	<div
		class="bg-gray-200 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-slate-800 w-full"
	>
		<div class="px-4 py-10 sm:px-6 lg:px-8">
			<div class="w-full flex flex-col items-center text-center gap-10">
				<div class="space-y-4 max-w-3xl">
					<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold">
						{{ $t('network') }}
					</h1>

					<p
						class="max-w-3xl text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
					>
						{{ $t('network_description') }}
					</p>
				</div>

				<section id="affiliates" class="w-full space-y-6">
					<h2 class="text-3xl sm:text-4xl font-bold">
						Affiliates
					</h2>

					<div
						class="grid grid-cols-[repeat(auto-fit,minmax(320px,400px))] justify-center gap-6 w-full"
					>
						<NetworkCard
							:title="$t('networks.hl2sbpp')"
							author="YourLocalMoon"
							:image="networkBrandingImages.hl2sbpp"
							:description="$t('networks.hl2sbpp_desc')"
							:links="[
								{
									label: 'Website',
									href: 'https://hl2sbpp.github.io'
								},
								{
									label: 'Discord',
									href: 'https://discord.gg/3DkET6fqXr'
								}
							]"
						/>
					</div>
				</section>

				<section id="subsidiaries" class="w-full space-y-6">
					<h2 class="text-3xl sm:text-4xl font-bold">
						Subsidiaries
					</h2>

					<div
						class="grid grid-cols-[repeat(auto-fit,minmax(320px,400px))] justify-center gap-6 w-full"
					>
						<NetworkCard
							:title="$t('networks.if')"
							author="The Illustrative Fortress Team"
							:image="networkBrandingImages.if"
							:description="$t('networks.if_desc')"
							:links="[
								{
									label: 'Discord',
									href: 'https://discord.gg/69HWzqVBDE'
								}
							]"
						/>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>