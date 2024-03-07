<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	sections: {
		type: Array as PropType<FAQSection[]>,
		required: true,
	},
})
</script>

<template>
	<!-- FAQs -->
	<section class="lg:col-span-4">
		<h3 class="text-title-screen font-semibold">{{ props.title }}</h3>

		<section v-for="section in props.sections" class="pt-14">
			<h5
				v-if="section.title"
				:id="snakeCase(section?.title || '')"
				class="mb-2 text-title-body font-semibold text-content-primary"
			>
				{{ section.title }}
			</h5>

			<Accordion v-for="faq in section.faqs" :title="faq.summary">
				<div class="prose" v-html="faq.detail || ''"></div>
			</Accordion>
		</section>
	</section>
</template>
