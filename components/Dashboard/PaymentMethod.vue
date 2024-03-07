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
	show: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<label
		class="label cursor-pointer flex-col items-start rounded-xl border px-2"
	>
		<div class="flex flex-wrap items-center gap-4">
			<input type="radio" :name="props.name" class="radio checked:bg-primary" />

			<span class="text-xs lg:text-sm">{{ props.productName }}</span>
		</div>

		<div v-show="props.show" class="mt-5 flex justify-start gap-6 pb-6 pl-10">
			<slot />
		</div>
	</label>
</template>

<style scoped></style>
