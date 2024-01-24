<script setup lang="ts">
const props = defineProps({
	imgUrl: { type: String, required: true },
	title: { type: String, required: true },
	subTitle: { type: String, required: true },
})
</script>

<template>
	<figure class="flex flex-col gap-1">
		<img
			:src="props.imgUrl"
			:alt="props.title"
			class="aspect-square object-cover object-center"
		/>
		<h5 class="text-title-subsection font-semibold">{{ props.title }}</h5>
		<p class="mb-3 text-body-large">{{ props.subTitle }}</p>

		<slot />
	</figure>
</template>
