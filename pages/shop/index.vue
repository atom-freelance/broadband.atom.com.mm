<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Fiber from '~/components/Shop/FiberPlans.vue'
import Wireless from '~/components/Shop/WirelessPlans.vue'
import FlexiNet from '~/components/Shop/FlexiNetPlans.vue'

type LinkType = 'Fiber' | 'Wireless' | 'Flexi net' | 'Mini Pro'

const activeLink = ref(0)
const menuLinks: LinkType[] = reactive([
	'Fiber',
	'Wireless',
	'Flexi net',
	'Mini Pro',
])

const components = [Fiber, Wireless, FlexiNet]
const handleChangeLink = (link: number) => {
	activeLink.value = link
	const el = document.getElementById('shop-plans')
	if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<div class="relative bg-white">
		<!-- banner hero text and service menu -->
		<div
			class="container fixed left-0 right-0 top-16 flex h-[calc(95vh-10rem)] flex-col justify-center gap-10"
		>
			<div class="hero">
				<div class="hero-content text-center">
					<div class="relative">
						<h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
							Let’s find <span class="font-bold italic">the best plans</span>
							<br />
							and <span class="font-bold italic">services</span> now!
						</h1>
						<p class="py-6 text-base max-sm:text-sm">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							<br />
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<img
							src="~/assets/img/rocket-launch.svg"
							alt="rocket"
							class="absolute -right-20 top-20 h-16 w-16 max-sm:-right-10 max-sm:top-10 max-sm:h-11 max-sm:w-11"
						/>
					</div>
				</div>
			</div>

			<!-- service btn group -->
			<ShopServiceItems />
		</div>

		<!-- set height for fixed hero block -->
		<div class="h-[calc(85vh-10rem)]"></div>

		<div class="relative bg-white">
			<div id="shop-plans" class="container z-10 py-20">
				<!-- sticky service menu links -->
				<div class="sticky top-28 z-10 flex items-center justify-center">
					<div
						class="rounded-full bg-white px-6 py-5 shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] max-sm:px-2 max-sm:py-3"
					>
						<button
							v-for="(link, index) in menuLinks"
							:key="link"
							@click="handleChangeLink(index)"
							:class="[
								{ 'text-interactive-accent-active': activeLink === index },
								'mx-3 cursor-pointer px-6 text-base text-content-primary max-sm:mx-2 max-sm:px-2',
							]"
						>
							{{ link }}
						</button>
					</div>
				</div>

				<Transition name="fade" mode="out-in" appear>
					<component :is="components[activeLink]"></component>
				</Transition>
			</div>

			<!-- Service available locations -->
			<ShopServiceAvailable />
		</div>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
