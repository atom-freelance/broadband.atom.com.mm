<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps({
	title: {
		type: String as PropType<string>,
		required: true,
	},
	subTitle: {
		type: String as PropType<string>,
		required: true,
	},
	icon: {
		type: String as PropType<IconName>,
		required: true,
	},
	class: {
		type: String as PropType<string>,
		required: true,
	},
})
</script>

<template>
	<section
		:class="
			twMerge(
				'h-32 overflow-hidden rounded-2xl lg:relative lg:flex',
				props.class,
			)
		"
	>
		<div
			class="flex h-full flex-col items-center justify-center gap-2 text-center lg:items-start lg:justify-end lg:p-4"
		>
			<h5 class="text-sm font-semibold lg:text-2xl">
				{{ props.title }}
			</h5>
			<p class="text-center text-xs font-medium lg:text-sm">
				{{ props.subTitle }}
			</p>
		</div>

		<Icon
			:name="props.icon"
			size="153px"
			class="absolute bottom-0 right-0 hidden translate-x-1/4 translate-y-7 font-extrabold opacity-20 lg:block"
		/>
	</section>
</template>
