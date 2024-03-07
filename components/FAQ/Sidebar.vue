<script setup lang="ts">
const faqPages = FAQLinks
</script>

<template>
	<nav class="hidden lg:sticky lg:top-28 lg:col-span-2 lg:block lg:self-start">
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
				<NuxtLinkLocale
					v-if="link.type === 'link'"
					:to="link.to"
					class="block border-l-[3px] border-transparent py-2 pl-4 text-body-large hover:text-interactive-accent"
					exact-active-class="text-interactive-accent !border-interactive-accent"
				>
					{{ link.title }}
				</NuxtLinkLocale>
			</template>
		</article>
	</nav>
</template>
