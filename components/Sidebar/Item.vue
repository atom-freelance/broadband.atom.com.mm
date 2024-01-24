<script setup lang="ts">
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
})

const route = useRoute()

const isRouteActive = computed(() => route.path.includes(props.to))
</script>

<template>
	<NuxtLink :to="props.to">
		<div class="flex gap-2">
			<span
				v-show="isRouteActive"
				class="mr-2 border-l-[3px] border-l-primary"
			/>
			<div
				class="flex items-center gap-2 text-xs lg:text-lg"
				:class="isRouteActive ? 'text-primary' : ''"
			>
				<Icon :name="props.iconName" /> {{ props.name }}
			</div>
		</div>
	</NuxtLink>
</template>
