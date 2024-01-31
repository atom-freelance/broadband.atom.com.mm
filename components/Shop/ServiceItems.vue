<script lang="ts" setup>
import { reactive } from 'vue'

const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])

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
			class="w-72 rounded-full bg-neutral-100 px-3 py-2 text-center max-sm:w-full md:w-full md:py-6 md:text-2xl lg:w-full lg:py-11 lg:text-5xl"
			v-for="link in menuLinks"
			:key="link"
		>
			{{ link }}
		</div>
	</div>
</template>
