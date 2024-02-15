<script setup>
const sectionLinks = {
	one: [
		[
			{ type: 'label', title: 'Fiber' },
			{ type: 'link', title: "ATOM's Home Plan", to: '' },
			{ type: 'link', title: "ATOM's Business Plan", to: '' },
		],

		[
			{ type: 'label', title: 'Wireless (Standard & Battery)' },
			{ type: 'link', title: 'Starter Kit', to: '' },
			{ type: 'link', title: 'Renewal Plan', to: '' },
			{ type: 'link', title: 'Data Add-Ons', to: '' },
			{ type: 'link', title: 'Special Data Pack (24 Hours Validity)', to: '' },
		],

		[
			{ type: 'label', title: 'Flexi Net' },
			{ type: 'link', title: 'Starter', to: '' },
			{ type: 'link', title: 'Renewal Plan', to: '' },
		],
	],

	two: FAQLinks,

	three: [
		[
			{ type: 'label', title: 'Other' },
			{ type: 'link', title: 'Privacy policy', to: '' },
			{ type: 'link', title: 'Terms & conditions apply', to: '' },
		],
	],
}
</script>

<template>
	<footer class="relative bg-interactive-accent-hover pb-20 pt-6 text-white">
		<section class="container grid grid-cols-1 space-y-4 lg:grid-cols-4">
			<article>
				<NuxtLink to="/" class="block w-2/3 rounded-lg bg-white px-6 py-4">
					<img src="/broadband_logo.jpeg" />
				</NuxtLink>
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
							{{ link.title }}
						</p>

						<NuxtLink
							v-if="link.type === 'link'"
							class="text-body-large text-categories-salary hover:text-white"
							:to="link.to"
						>
							{{ link.title }}
						</NuxtLink>
					</template>
				</div>

				<div :class="['space-y-4 text-body', key !== 'three' ? 'hidden' : '']">
					<p>All internet services will be subject to Commercial Tax of 15%</p>
					<p>
						*3000 On-net SMS Fair Usage Policy Applied for SMS benefit Usage
						beyond daily Fair Usage Policy will charge with standard rate.
					</p>
				</div>
			</article>
		</section>

		<section class="container mt-20 grid grid-cols-1 gap-4 lg:grid-cols-4">
			<FooterBackToTop class="self-center justify-self-start" />

			<div class="self-center lg:col-span-3">
				<p class="flex flex-wrap items-center gap-1 text-body-large">
					<span>© Copyright 2023 All rights reserved by ATOM Myanmar.</span>
					<span>|</span>
					<span>Contact Us :</span>
					<a href="tel:+959780008080">+959780008080</a>
					<span>(ATOM User Only)</span>
				</p>
			</div>
		</section>
	</footer>
</template>
