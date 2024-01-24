<script setup lang="ts">
const props = defineProps({
	id: { type: String, required: true },
})
</script>

<template>
	<dialog :id="props.id" class="modal">
		<div class="modal-box">
			<slot />
		</div>
	</dialog>
</template>
