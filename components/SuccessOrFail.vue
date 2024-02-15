<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
	},
	subTitle: {
		type: String,
	},
	onClose: {
		type: Function,
		required: true,
	},
	isError: {
		type: Boolean,
		default: false,
	},
})
</script>
<template>
	<div class="space-y-8 px-5 py-10 text-center">
		<div class="">
			<Icon
				:name="isError ? 'times-circle' : 'check-circle'"
				size="60"
				:class="isError ? 'text-rose-600' : 'text-green-800'"
			/>
		</div>
		<div>
			<p class="mb-2 font-semibold">{{ props.title }}</p>
			<p class="text-sm text-content-secondary">
				{{ props.subTitle }}
			</p>
		</div>
		<button
			class="btn w-36 rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
			@click="props.onClose"
		>
			OK
		</button>
	</div>
</template>
