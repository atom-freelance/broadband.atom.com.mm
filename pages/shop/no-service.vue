<script setup lang="ts">
const route = useRoute()

const serviceCheck = computed(() => {
	return {
		check: Boolean(route.query.check),
		township: route.query.township,
	}
})

const { township } = serviceCheck.value
</script>
<template>
	<div class="container inset-0 flex h-screen pb-36">
		<div class="hero">
			<div class="hero-content text-center">
				<div class="relative">
					<h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
						We’re Sorry!
					</h1>
					<h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
						Any service not available <br />
						in <span class="font-bold capitalize italic">{{ township }}</span>
						area!
					</h1>
					<NuxtLinkLocale
						to="/check-service-availability"
						class="w-46 btn mt-10 rounded-full border-secondary-content bg-white px-4 py-2 text-base text-secondary-content hover:bg-interactive-accent-hover hover:text-white max-md:self-center"
					>
						Change location
					</NuxtLinkLocale>
					<img
						src="~/assets/img/rocket-launch.svg"
						alt="rocket"
						class="absolute -right-20 top-20 h-16 w-16 max-sm:-right-10 max-sm:top-10 max-sm:h-11 max-sm:w-11"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
