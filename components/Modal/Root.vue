<script setup lang="ts">
const props = defineProps({
	id: { type: String, required: true },
	isFullWidth: {
		type: Boolean,
		required: false,
		default: false,
	},
})
</script>

<template>
	<dialog :id="props.id" class="modal">
		<div :class="[{ 'min-w-full': props.isFullWidth }, 'modal-box py-0']">
			<slot />
		</div>
	</dialog>
</template>
