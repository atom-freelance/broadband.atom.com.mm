<script setup lang="ts">
const props = defineProps({
	name: {
		type: String as PropType<string>,
		required: true,
	},
	productName: {
		type: String as PropType<string>,
		required: true,
	},
})
</script>

<template>
	<label class="label cursor-pointer rounded-xl border px-2">
		<div class="flex flex-wrap items-center gap-4">
			<input type="radio" :name="props.name" class="radio checked:bg-primary" />

			<span class="text-xs lg:text-sm">{{ props.productName }}</span>
		</div>

		<slot />
	</label>
</template>
