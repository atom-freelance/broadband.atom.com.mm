<script setup lang="ts">
const props = defineProps({
	title: { type: String, required: true },
})
</script>

<template>
	<div class="collapse rounded-none border-b-2 border-gray-100">
		<input type="checkbox" />

		<div class="collapse-title flex items-center gap-4 p-0 text-body-large">
			<Icon name="plus" size="1.4rem" class="icon-off" />
			<Icon name="minus" size="1.4rem" class="icon-on" />

			<span>{{ props.title }}</span>
		</div>

		<div class="collapse-content p-0">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.icon-on {
	display: none;
}

input:hover + .collapse-title {
	font-weight: 600;
}

input:checked + .collapse-title {
	font-weight: 600;
}

input:checked + .collapse-title > .icon-off {
	display: none;
}

input:checked + div > .icon-on {
	display: block;
}
</style>
