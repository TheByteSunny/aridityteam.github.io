/*
    Copyright (c) 2026 The Aridity Team, all rights reserved.
    Licensed under the BSD 3-Clause License
*/

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	compatibilityDate: '2025-07-15',
  	devtools: { enabled: true },
	postcss: {
		plugins: {
			"@tailwindcss/postcss": {},
			autoprefixer: {},
		},
	},
	vite: {
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
			]
		}
	},
	css: ["~/assets/css/styles.css"],
	modules: [
		"@nuxt/eslint",
	]
})
