// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	experimental: { typedPages: true },
	devServer: { port: 4000 },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	css: ['flag-icons/css/flag-icons.min.css'],
	app: {
		head: {
			title: 'ATOM Myanmar',
			meta: [{ name: 'theme-color', media: '(prefers-color-scheme: light)' }],
			bodyAttrs: {
				class: 'text-content-primary scroll-smooth',
			},
		},
	},
})
