<script setup lang="ts">
import { ref } from 'vue'

const isStandard = ref(true)

const togglePlanType = () => {
	isStandard.value = !isStandard.value
}
</script>

<template>
	<div class="mt-10">
		<div class="flex justify-center">
			<div class="shadow-two w-56 rounded-xl bg-flag-gray p-0.5">
				<button
					:class="[
						{ 'bg-interactive-accent-active text-white': isStandard },
						'w-1/2 rounded-xl px-3 py-2 text-center',
					]"
					@click="togglePlanType"
				>
					Standard
				</button>
				<button
					:class="[
						{ 'bg-interactive-accent-active text-white': !isStandard },
						'w-1/2 rounded-xl px-3 py-2 text-center',
					]"
					@click="togglePlanType"
				>
					Battery
				</button>
			</div>
		</div>

		<h1 class="mt-8 text-[48px] font-semibold max-sm:text-3xl">Starter Kit</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in wirelessStarterPlans"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'wireless'"
					:isStandard="isStandard"
					:imagePath="plan.imagePath"
				/>
			</div>
		</div>

		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			Renewal Plan
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in wirelessRenewalPlans"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'wireless'"
					:imagePath="plan?.imagePath"
				/>
			</div>
		</div>

		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			Data Add-Ons
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in wirelessDataAddOn"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'wireless'"
					:imagePath="plan?.imagePath"
				/>
			</div>
		</div>

		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			Special data pack (24 hours validity)
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in specialDataPacks"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'wireless'"
					:imagePath="plan?.imagePath"
				/>
			</div>
		</div>
	</div>
</template>
