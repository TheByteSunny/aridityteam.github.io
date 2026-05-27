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
	app: {
		head: {
			title: 'The Aridity Team website',
			fallbackTitle: 'The Aridity Team Website',
			link: [
		        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		    ],
		}
	},
	css: ["~/assets/css/styles.css"],
	modules: [
		"@nuxt/devtools",
		"@nuxt/eslint",
		"@nuxtjs/i18n"
	],
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', file: 'en.json' }
			{ code: 'pt-br', language: 'pt-BR', file: 'pt-br.json' },
			{ code: 'sp', language: 'es-ES', file: 'sp.json' },
		],
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
	}
});
