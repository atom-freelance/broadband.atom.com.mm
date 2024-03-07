<script setup lang="ts">
const props = defineProps({
	sections: {
		type: Array as PropType<string[]>,
		required: true,
	},
})

const visitedHash = ref('')

function scrollToId(id: string) {
	visitedHash.value = id
	document.getElementById(id)?.scrollIntoView({
		behavior: 'smooth',
		block: 'center', // vertical alignment
	})
}
</script>

<template>
	<!-- Right Side Table of Contents -->
	<aside
		class="hidden lg:sticky lg:top-28 lg:col-span-2 lg:block lg:self-start"
	>
		<h5 class="mb-4 pl-4 text-title-body font-semibold text-content-primary">
			Quick Search
		</h5>

		<article class="flex flex-col gap-1">
			<template v-for="section in props.sections">
				<a
					v-if="section.length > 0"
					:href="`#${snakeCase(section)}`"
					@click.prevent="scrollToId(snakeCase(section))"
					class="flex cursor-pointer items-center gap-2 text-body-large text-content-tertiary hover:text-interactive-accent-hover"
					:class="{
						'text-interactive-accent': visitedHash === snakeCase(section),
					}"
				>
					<i
						class="size-2 rounded-full"
						:class="{
							'bg-interactive-accent': visitedHash === snakeCase(section),
						}"
					/>
					<span>{{ section }}</span>
				</a>
			</template>
		</article>
	</aside>
</template>
