<script setup lang="ts">
const sectionLinks = FooterLinks
</script>

<template>
	<footer class="relative bg-interactive-accent-hover pb-20 pt-6 text-white">
		<section class="container grid grid-cols-1 space-y-4 lg:grid-cols-4">
			<article>
				<NuxtLinkLocale
					to="/"
					class="block w-2/3 rounded-lg bg-white px-6 py-4"
				>
					<img src="/broadband_logo.jpeg" />
				</NuxtLinkLocale>
			</article>

			<article
				v-for="(section, key) in sectionLinks"
				:class="['flex flex-col gap-4', { 'justify-between': key === 'three' }]"
			>
				<div v-for="links in section" class="flex flex-col gap-2">
					<template v-for="link in links">
						<p
							v-if="link.type === 'label'"
							class="text-title-body font-semibold"
						>
							{{ $t(link.title) }}
						</p>

						<NuxtLinkLocale
							v-if="link.type === 'link'"
							class="text-body-large text-categories-salary hover:text-white"
							:to="link.to"
						>
							{{ $t(link.title) }}
						</NuxtLinkLocale>
					</template>
				</div>

				<div :class="['space-y-4 text-body', key !== 'three' ? 'hidden' : '']">
					<p>{{ $t('footer.tax_info') }}</p>
					<p>{{ $t('footer.usage_policy') }}</p>
				</div>
			</article>
		</section>

		<section class="container mt-20 grid grid-cols-1 gap-4 lg:grid-cols-4">
			<FooterBackToTop class="self-center justify-self-start" />

			<div class="self-center lg:col-span-3">
				<p class="flex flex-wrap items-center gap-1 text-body-large">
					<span>{{ $t('common.copyright') }}</span>
					<span>|</span>
					<span>{{ $t('common.contact_us') }} :</span>
					<a href="tel:+959780008080">+959780008080</a>
					<span>{{ $t('footer.contact_note') }}</span>
				</p>
			</div>
		</section>
	</footer>
</template>
