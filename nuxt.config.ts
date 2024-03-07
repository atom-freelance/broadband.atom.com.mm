// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true },
	experimental: { typedPages: true },
	devServer: { port: 4000 },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n'],
	css: ['flag-icons/css/flag-icons.min.css'],
	app: {
		head: {
			title: 'ATOM Myanmar',
			meta: [{ name: 'theme-color', media: '(prefers-color-scheme: light)' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+Myanmar:wght@100;200;300;400;500;600;700;800;900&display=swap',
				},
			],
			bodyAttrs: {
				class: 'text-content-primary scroll-smooth',
			},
		},
	},
	i18n: {
		strategy: 'prefix_except_default',
		langDir: 'i18n',
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				files: ['en.js', 'shop.en.js'],
			},
			{
				code: 'mm',
				files: ['mm.js', 'shop.mm.js'],
			},
		],
	},
})
