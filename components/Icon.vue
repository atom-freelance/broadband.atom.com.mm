<template>
	<svg
		class="inline-block fill-current stroke-current stroke-0"
		:style="{ width: props.size, height: props.size }"
	>
		<use :xlink:href="href"></use>
	</svg>
</template>

<script setup lang="ts">
const props = defineProps({
	name: {
		type: String as PropType<IconName>,
		required: true,
	},
	size: {
		type: String as PropType<string>,
		required: false,
		default: '1.5rem',
	},
})

const href = computed(() => `/icons.svg#icon-${props.name}`)
</script>
