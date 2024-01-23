<script setup lang="ts">
const props = defineProps({
	icon: {
		type: String as PropType<IconName>,
		required: true,
	},
	title: {
		type: String,
		require: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
	iconPosition: {
		type: String as PropType<'vertical' | 'horizontal'>,
		required: false,
		default: 'vertical',
	},
})
</script>

<template>
	<article
		:class="[
			{ 'h-article': props.iconPosition === 'horizontal' },
			'w-[clamp(300px, 360px, 360px)] relative cursor-pointer space-y-4 overflow-hidden rounded-2xl px-8 py-6',
		]"
	>
		<div class="h-[48px]">
			<Icon :name="props.icon" size="48px" class="icon" />
		</div>

		<div class="space-y-2 font-semibold">
			<h3 class="text-title-section">
				{{ props.title }}
			</h3>
			<h5 class="text-body-large text-content-tertiary">
				{{ props.subTitle }}
			</h5>
		</div>
	</article>
</template>

<style scoped>
article {
	--translate-x: 16rem;
	--translate-y: 1.5rem;
	--horizontal-icon-opacity: 0.2;
	--horizontal-icon-size: 140px;

	transition: all ease-in-out 200ms;
}

.icon {
	transition: all ease-in-out 200ms;
}

article:hover * {
	color: white;
}

article:hover .icon {
	position: absolute;
	width: var(--horizontal-icon-size) !important;
	height: var(--horizontal-icon-size) !important;
	transform: translate3d(var(--translate-x), var(--translate-y), 0);
	opacity: var(--horizontal-icon-opacity);
}

.h-article * {
	color: white;
}

.h-article .icon {
	position: absolute;
	width: var(--horizontal-icon-size) !important;
	height: var(--horizontal-icon-size) !important;
	transform: translate3d(var(--translate-x), var(--translate-y), 0);
	opacity: var(--horizontal-icon-opacity);
}
</style>
