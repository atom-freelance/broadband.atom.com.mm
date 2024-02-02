<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	class: {
		type: String as PropType<string>,
		required: false,
	},
})
</script>

<template>
	<ul
		:class="twMerge('flex flex-col gap-4 text-content-secondary', props.class)"
	>
		<slot />
	</ul>
</template>
