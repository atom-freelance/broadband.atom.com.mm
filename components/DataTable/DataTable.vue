<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
})
</script>

<template>
	<div class="flex flex-col gap-4">
		<h1 v-show="props.title" class="text-title-section font-semibold">
			{{ props.title }}
		</h1>
		<p v-show="props.description" class="text-sm">
			{{ props.description }}
		</p>

		<div class="overflow-x-auto">
			<table class="table">
				<thead class="bg-gray-100">
					<slot name="thead" />
				</thead>
				<tbody>
					<slot name="tbody" />
				</tbody>
				<tfoot class="bg-gray-100">
					<slot name="tfoot" />
				</tfoot>
			</table>
		</div>
	</div>
</template>

<style scope>
th,
td {
	border: 1px solid #0e0f0c1f;
	border-collapse: collapse;
}

th:first-child,
td:first-child {
	border-left: none;
}

th:last-child,
td:last-child {
	border-right: none;
}
</style>
