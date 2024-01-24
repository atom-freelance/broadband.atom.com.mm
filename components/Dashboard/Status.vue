<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	name: {
		type: String as PropType<string>,
		required: true,
	},
	class: {
		type: String as PropType<string>,
		required: true,
	},
})
</script>

<template>
	<span
		:class="
			twMerge('rounded px-2 py-1 text-xs text-neutral lg:text-sm', props.class)
		"
	>
		{{ props.name }}
	</span>
</template>
