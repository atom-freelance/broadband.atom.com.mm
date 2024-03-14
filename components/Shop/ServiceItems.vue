<script lang="ts" setup>
import { reactive } from 'vue'

type LinkType = 'Fiber' | 'Wireless' | 'FlexiNet' | 'MiniPro'
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
		label: 'FlexiNet',
		class: 'bg-secondary-bright-yellow text-content-primary',
	},
	{
		label: 'MiniPro',
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
		class="grid grid-cols-4 justify-items-center gap-4 max-md:gap-2 max-sm:gap-1"
	>
		<div
			v-for="link in menuLinks"
			:key="link.label"
			class="w-full rounded-full px-3 py-2 text-center sm:text-sm md:py-6 md:text-2xl lg:py-11 lg:text-5xl"
			:class="link.class"
		>
			{{ link.label }}
		</div>
	</div>
</template>
