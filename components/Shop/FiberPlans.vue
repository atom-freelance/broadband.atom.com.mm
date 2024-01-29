<script setup>
import { fiberHomePlans, fiberBusinessPlans } from '../../utils/data'
</script>

<template>
	<div>
		<!-- Home plan package lists -->
		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			ATOM’s Home Plan
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<!-- Fiber plan card lists -->
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in fiberHomePlans"
				:key="plan.label"
			>
				<ShopPlanCard :plan="plan" :planType="'fiber'" />
			</div>
		</div>

		<!-- Business plan package lists -->
		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			ATOM’s Business Plan
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<!-- Fiber plan card lists -->
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in fiberBusinessPlans"
				:key="plan.label"
			>
				<ShopPlanCard :plan="plan" :planType="'fiber'" />
			</div>
		</div>
	</div>
</template>
