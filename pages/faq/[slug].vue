<script setup lang="ts">
const faqPages = FAQLinks
</script>

<template>
	<main class="container mb-40 mt-10 grid grid-cols-1 lg:grid-cols-8">
		<nav class="hidden lg:col-span-2 lg:block">
			<article v-for="section in faqPages" class="flex flex-col gap-1">
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

		<section class="lg:col-span-4">
			<h3 class="mb-10 text-title-screen font-semibold">General FAQs</h3>

			<Accordion title="Lorem ipsum dolor sit amet">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam id
				eos, minima aut rem officiis perspiciatis reiciendis explicabo tempora
				provident harum accusantium dolorum eum aliquid sed dolorem, et
				recusandae quasi.
			</Accordion>
		</section>

		<aside class="hidden lg:col-span-2 lg:block"></aside>
	</main>
</template>
