<script lang="ts" setup>
import { reactive } from 'vue'
import { fiberHomePlans, fiberBusinessPlans } from '../../utils/data'

const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])
</script>

<template>
	<div class="relative bg-white">
		<!-- banner hero text and service menu -->
		<div
			class="container fixed left-0 right-0 top-16 flex h-[calc(100vh-10rem)] flex-col justify-center gap-10"
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
		<div class="h-[calc(100vh-10rem)]"></div>

		<div class="relative bg-white">
			<div class="container z-10 py-20">
				<!-- sticky service menu links -->
				<div class="sticky top-6 z-10 flex items-center justify-center">
					<div
						class="rounded-full bg-white px-6 py-5 shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] max-sm:px-2 max-sm:py-3"
					>
						<a
							href="#"
							class="mx-3 px-6 text-base text-content-primary max-sm:mx-2 max-sm:px-2"
							v-for="link in menuLinks"
							:key="link"
						>
							{{ link }}
						</a>
					</div>
				</div>

				<!-- Home plan package lists -->
				<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
					ATOM’s Home Plan
				</h1>
				<div class="divider mb-9 mt-0"></div>

				<div
					class="grid grid-cols-1 gap-6 gap-y-36 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
				>
					<!-- Fiber plan card lists -->
					<div
						class="group w-full cursor-pointer bg-base-100"
						v-for="plan in fiberHomePlans"
						:key="plan.label"
					>
						<div
							class="flex h-72 origin-center items-end bg-[#1F2051] p-6 transition duration-300 group-hover:bg-[#78C9FF]"
						>
							<p
								class="origin-bottom-left text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051]"
							>
								ATOM
							</p>
						</div>
						<div class="py-2">
							<p class="text-lg font-semibold">{{ plan.label }}</p>
							<p class="text-base">{{ plan.tax }}</p>
							<p class="mt-3">
								<span class="text-lg font-semibold">{{ plan.price }} </span>
								<span>/ {{ plan.day }} days</span>
							</p>
						</div>
					</div>
				</div>

				<!-- Business plan package lists -->
				<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
					ATOM’s Business Plan
				</h1>
				<div class="divider mb-9 mt-0"></div>

				<div
					class="grid grid-cols-1 gap-6 gap-y-36 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
				>
					<!-- Fiber plan card lists -->
					<div
						class="group w-full cursor-pointer bg-base-100"
						v-for="plan in fiberBusinessPlans"
						:key="plan.label"
					>
						<div
							class="flex h-72 origin-center items-end bg-[#1F2051] p-6 transition duration-300 group-hover:bg-[#78C9FF]"
						>
							<p
								class="origin-bottom-left text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051]"
							>
								ATOM
							</p>
						</div>
						<div class="py-2">
							<p class="text-lg font-semibold max-sm:text-base">
								{{ plan.label }}
							</p>
							<p class="text-base max-sm:text-sm">{{ plan.tax }}</p>
							<p class="mt-3">
								<span class="text-lg font-semibold max-sm:text-base"
									>{{ plan.price }}
								</span>
								<span>/ {{ plan.day }} days</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Service available locations -->
			<ShopServiceAvailable />
		</div>
	</div>
</template>
