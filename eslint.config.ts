/*
    Copyright (c) 2026 The Aridity Team, all rights reserved.
    Licensed under the BSD 3-Clause License
*/

import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.ts","**/*.js"],
		ignores: ["__tests/**",".nuxt/**"],
		rules: {
			"no-console": "error",
		},
	},
])