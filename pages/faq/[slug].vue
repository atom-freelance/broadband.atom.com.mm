<script setup lang="ts">
const faqPages = FAQLinks

const faqSections = FAQSections

const route = useRoute()

const pageTitle = computed(() => {
	return faqPages.flat().find((p) => p.to === route.path)?.title || ''
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
	<main
		class="container relative mb-40 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-8"
	>
		<!-- Left Side FAQ Pages -->
		<nav
			class="hidden lg:sticky lg:top-28 lg:col-span-2 lg:block lg:self-start"
		>
			<article v-for="section in faqPages" class="mb-8 flex flex-col gap-1">
				<template v-for="link in section">
					<!-- Render Text when type is label -->
					<h6
						v-if="link.type === 'label'"
						class="border-l-[3px] border-transparent pl-4 text-title-body font-semibold"
					>
						{{ link.title }}
					</h6>

					<!-- Render Link when type is link -->
					<NuxtLink
						v-if="link.type === 'link'"
						:to="link.to"
						class="block border-l-[3px] border-transparent py-2 pl-4 text-body-large hover:text-interactive-accent"
						exact-active-class="text-interactive-accent !border-interactive-accent"
					>
						{{ link.title }}
					</NuxtLink>
				</template>
			</article>
		</nav>

		<!-- FAQs -->
		<section class="lg:col-span-4">
			<h3 class="text-title-screen font-semibold">{{ pageTitle }}</h3>

			<section v-for="section in faqSections" class="pt-14">
				<h5
					:id="snakeCase(section.sectionTitle)"
					class="mb-2 text-title-body font-semibold text-content-primary"
				>
					{{ section.sectionTitle }}
				</h5>

				<Accordion v-for="faq in section.faqs" :title="faq.title">
					{{ faq.description }}
				</Accordion>
			</section>
		</section>

		<!-- Right Side Table of Contents -->
		<aside
			class="hidden lg:sticky lg:top-28 lg:col-span-2 lg:block lg:self-start"
		>
			<h5 class="mb-4 pl-4 text-title-body font-semibold text-content-primary">
				Quick Search
			</h5>

			<article class="flex flex-col gap-1">
				<a
					v-for="section in faqSections"
					:href="`#${snakeCase(section.sectionTitle)}`"
					@click.prevent="scrollToId(snakeCase(section.sectionTitle))"
					class="flex cursor-pointer items-center gap-2 text-body-large text-content-tertiary hover:text-interactive-accent-hover"
					:class="{
						'text-interactive-accent':
							visitedHash === snakeCase(section.sectionTitle),
					}"
				>
					<i
						class="size-2 rounded-full"
						:class="{
							'bg-interactive-accent':
								visitedHash === snakeCase(section.sectionTitle),
						}"
					/>
					<span>{{ section.sectionTitle }}</span>
				</a>
			</article>
		</aside>
	</main>
</template>
