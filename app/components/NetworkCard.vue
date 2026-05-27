<script setup lang="ts">
interface Link {
	label: string
	href: string
}

defineProps<{
	title: string
	author: string
	description: string
	image: string
	links?: Link[]
}>()
</script>

<template>
	<div
		class="flex flex-col rounded-xl border border-gray-300 dark:border-slate-700 bg-gray-300 dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
	>
		<div
			class="flex flex-col items-center text-center gap-4 px-6 py-8 flex-1"
		>
			<img
				:src="image"
				:alt="`${title} Logo`"
				class="w-24 h-24 sm:w-32 sm:h-32 object-contain"
			/>

			<div class="space-y-1">
				<h3 class="text-2xl font-bold">
					{{ title }}
				</h3>

				<p class="text-sm text-gray-600 dark:text-gray-500">
					{{ author }}
				</p>
			</div>

			<p
				class="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
			>
				{{ description }}
			</p>
		</div>

		<div
			class="bg-gray-400 dark:bg-gray-900 px-4 py-3 flex flex-wrap justify-center gap-4"
		>
			<a
				v-for="link in links"
				:key="link.label"
				:href="link.href"
				target="_blank"
				rel="noopener noreferrer"
				class="text-cyan-500 hover:text-cyan-400 hover:underline transition-colors"
			>
				{{ link.label }}
			</a>
		</div>
	</div>
</template>