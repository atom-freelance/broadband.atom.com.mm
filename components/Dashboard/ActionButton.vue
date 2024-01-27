<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	class: {
		type: String as PropType<string>,
		required: false,
	},
	btnText: {
		type: String as PropType<string>,
		required: true,
	},
})
</script>

<template>
	<button
		type="button"
		:class="twMerge('btn btn-xs rounded-2xl bg-white lg:btn-sm', props.class)"
	>
		{{ props.btnText }}
	</button>
</template>
