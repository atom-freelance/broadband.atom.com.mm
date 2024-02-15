<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: 'Upload file',
	},
	subTitle: {
		type: String,
		default: 'Drag and drop a file',
	},
})
const fileInput = ref<HTMLInputElement | null>(null)

const handleClick = () => {
	fileInput.value?.click()
}
</script>
<template>
	<div
		class="rounded-xl bg-neutral-200 px-3 py-6 text-center"
		@click="handleClick"
	>
		<button class="mb-4 h-14 w-14 rounded-full bg-white outline-none">
			<Icon name="upload-alt" />
		</button>
		<h3 class="mb-1 font-medium">{{ props.title }}</h3>
		<p class="mb-4 text-sm text-slate-600">{{ props.subTitle }}</p>
		<button
			class="btn w-36 rounded-full bg-interactive-accent px-4 py-2 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
		>
			Or Select file
		</button>
		<input ref="fileInput" type="file" class="hidden" />
	</div>
</template>
