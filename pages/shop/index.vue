<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Fiber from '~/components/Shop/FiberPlans.vue'
import Wireless from '~/components/Shop/WirelessPlans.vue'
import FlexiNet from '~/components/Shop/FlexiNetPlans.vue'
import AvailableService from './available-service.vue'
import NoService from './no-service.vue'
import AllService from './all-service.vue'

type LinkType = 'Fiber' | 'Wireless' | 'FlexiNet' | 'MiniPro'

const activeLink = ref(0)
const menuLinks = reactive<LinkType[]>([
	'Fiber',
	'Wireless',
	'FlexiNet',
	'MiniPro',
])

const route = useRoute()

const serviceCheck = computed(() => {
	return {
		check: Boolean(route.query.check),
		available: route.query.township === 'tarmwe',
	}
})

const { check, available } = serviceCheck.value
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
		<AllService v-if="!check" />

		<AvailableService v-else-if="available" />

		<NoService v-else />

		<!-- set height for fixed hero block -->
		<div
			class="h-[calc(85vh-10rem)]"
			v-if="(check && available) || !check"
		></div>

		<div class="relative bg-white" v-if="(check && available) || !check">
			<div id="shop-plans" class="container z-10 py-20">
				<!-- sticky service menu links -->
				<div class="sticky top-28 z-10 flex items-center justify-center">
					<div
						class="rounded-full bg-white px-6 py-5 shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] max-sm:px-2 max-sm:py-5"
					>
						<button
							v-for="(link, index) in menuLinks"
							:key="link"
							@click="handleChangeLink(index)"
							:class="[
								{ 'text-interactive-accent-active': activeLink === index },
								'mx-3 cursor-pointer px-6 text-xs text-content-primary max-sm:mx-0 max-sm:px-3 lg:text-base',
							]"
						>
							{{ link }}
						</button>
					</div>
				</div>

				<component :is="components[activeLink]"></component>
			</div>

			<!-- Service available locations -->
			<CheckServiceAvailability />
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
