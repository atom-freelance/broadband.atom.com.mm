<script lang="ts" setup>
import { reactive } from 'vue'

type LinkType = 'Fiber' | 'Wireless' | 'Flexi net' | 'Mini Pro'
type MenuLink = {
	label: LinkType
	class: string
}

const menuLinks = reactive<MenuLink[]>([
	{
		label: 'Fiber',
		class: 'bg-interactive-accent text-white',
	},
	{
		label: 'Wireless',
		class: 'bg-secondary-bright-blue text-content-primary',
	},
	{
		label: 'Flexi net',
		class: 'bg-secondary-bright-yellow text-content-primary',
	},
	{
		label: 'Mini Pro',
		class: 'bg-flag-red text-white',
	},
])

let interval: any
onMounted(() => {
	interval = setInterval(() => {
		const firstItem = menuLinks.shift()
		if (firstItem) menuLinks.push(firstItem)
	}, 1500)
})

onUnmounted(() => {
	if (interval) clearInterval(interval)
})
</script>

<template>
	<div
		class="grid grid-cols-4 justify-items-center gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"
	>
		<div
			v-for="link in menuLinks"
			:key="link.label"
			class="w-72 rounded-full px-3 py-2 text-center max-sm:w-full md:w-full md:py-6 md:text-2xl lg:w-full lg:py-11 lg:text-5xl"
			:class="link.class"
		>
			{{ link.label }}
		</div>
	</div>
</template>
