<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

const props = defineProps({
	to: {
		type: String as PropType<string>,
		required: true,
	},
	name: {
		type: String as PropType<string>,
		required: true,
	},
	iconName: {
		type: String as PropType<IconName>,
		required: true,
	},
	enableLeftSideBorder: {
		type: Boolean as PropType<boolean>,
		required: false,
		default: false,
	},
})

const route = useRoute()

const isRouteActive = computed(() => route.path.includes(props.to))
</script>

<template>
	<NuxtLinkLocale :to="props.to">
		<div class="flex gap-2">
			<span
				v-show="props.enableLeftSideBorder"
				:class="
					twMerge(
						'mr-2  border-l-[3px] border-l-transparent',
						isRouteActive && 'border-l-primary',
					)
				"
			/>
			<div
				class="flex items-center gap-2 text-xs duration-200 hover:font-bold hover:ease-in-out lg:text-lg"
				:class="isRouteActive ? 'text-primary' : ''"
			>
				<Icon :name="props.iconName" />
				<span class="text-sm">{{ props.name }}</span>
			</div>
		</div>
	</NuxtLinkLocale>
</template>
