<script setup lang="ts">
import type { FAQPage } from '~/utils/FAQs'

const { locale } = useI18n()
const route = useRoute()

const HomeWireless = FAQsHomeWireless
const PowerFiber = FAQsPowerFiber
const MiniPro = FAQsMiniPro

const pageMeta = computed(() => {
	const slug: string = (route.params as any).slug || ''
	const [pageIndex = '', sectionIndex = ''] = slug.split('-')
	return { pageIndex, sectionIndex }
})

// Compute Page Data

const pageContent = computed(() => {
	const { pageIndex, sectionIndex } = pageMeta.value

	let page: FAQPage = HomeWireless
	if (pageIndex === 'home_wireless') page = HomeWireless
	if (pageIndex === 'power_fiber') page = PowerFiber
	if (pageIndex === 'mini_pro') page = MiniPro

	const pageLocale = locale.value === 'mm' ? page.mm : page.en
	return pageLocale[sectionIndex]
})
const pageTOC = computed(() => {
	const sections = pageContent.value?.sections || []
	return sections.map((s) => s?.title || '')
})
</script>

<template>
	<main
		class="container relative mb-40 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-8"
	>
		<FAQSidebar />

		<FAQContent
			:title="pageContent?.title || ''"
			:sections="pageContent?.sections || []"
		/>

		<FAQTableOfContent :sections="pageTOC" />
	</main>
</template>
