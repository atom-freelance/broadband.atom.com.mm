<script setup lang="ts">
const props = defineProps({
	imgUrl: { type: String, required: true },
	title: { type: String, required: true },
	subTitle: { type: String, required: true },
})
</script>

<template>
	<figure class="flex cursor-pointer flex-col gap-1">
		<div class="overflow-hidden">
			<img
				:src="props.imgUrl"
				:alt="props.title"
				class="aspect-square object-cover object-center transition-all duration-300 hover:scale-105"
			/>
		</div>
		<h5 class="text-title-subsection font-semibold">{{ props.title }}</h5>
		<p class="mb-3 text-body-large">{{ props.subTitle }}</p>

		<slot />
	</figure>
</template>
