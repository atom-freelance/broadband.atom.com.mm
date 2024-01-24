<script setup lang="ts">
const props = defineProps({
	enableClose: { type: Boolean, default: false },
})

const el = computed(() => (props.enableClose ? 'form' : 'div'))
</script>

<template>
	<component :is="el" method="dialog" class="modal-backdrop">
		<slot />
	</component>
</template>
