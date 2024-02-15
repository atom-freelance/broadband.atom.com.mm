<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	id: { type: String, required: true },
	isFullWidth: {
		type: Boolean,
		required: false,
		default: false,
	},
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<dialog :id="props.id" class="modal">
		<div
			:class="[
				{ 'min-w-full': props.isFullWidth },
				twMerge('modal-box py-0', props.class),
			]"
		>
			<slot />
		</div>
	</dialog>
</template>
