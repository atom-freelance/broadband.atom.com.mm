<script setup lang="ts">
const props = defineProps({
	iconName: {
		type: String as PropType<IconName>,
		required: true,
	},
	iconSize: {
		type: String as PropType<string>,
		required: false,
		default: '1rem',
	},
})
</script>

<template>
	<th>
		<div class="flex space-x-1">
			<Icon :name="props.iconName" :size="props.iconSize" />
			<span>
				<slot />
			</span>
		</div>
	</th>
</template>
