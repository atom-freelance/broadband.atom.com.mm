<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	phoneNumber: {
		type: String as PropType<string>,
		required: true,
	},
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
	<li class="flex flex-wrap items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="rounded-full bg-gray-200 p-3"
				><Icon name="sim-card" />
			</span>

			<div class="flex flex-col items-start justify-center gap-1">
				<span>Phone number</span>
				<span>{{ props.phoneNumber }}</span>
			</div>
		</div>

		<button
			type="button"
			:class="twMerge('btn btn-xs rounded-2xl bg-white lg:btn-sm', props.class)"
		>
			{{ props.btnText }}
		</button>
	</li>
</template>
