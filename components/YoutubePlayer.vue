<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const props = defineProps({
	src: { type: String, required: true },
	autoplay: { type: Boolean, required: false, default: false },
})

const src = ref('')

onMounted(() => {
	const url = new URL(props.src)
	url.searchParams.delete('autoplay')
	src.value = url.toString()
})

watch(
	targetIsVisible,
	(visible) => {
		const url = new URL(props.src)

		if (visible && props.autoplay) url.searchParams.set('autoplay', '1')
		src.value = url.toString()
	},
	{ once: true },
)
</script>

<template>
	<iframe
		:key="src"
		ref="target"
		class="aspect-video w-full"
		:src="src"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
</template>
