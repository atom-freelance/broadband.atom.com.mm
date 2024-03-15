<script setup lang="ts">
import type { PlanType } from './PlanCard.vue'

const { showModal } = useModal()

let selectedPlan = reactive<{ plan: PlanType }>({
	plan: { title: '', tax: '' },
})

function handleOnclick(plan: PlanType) {
	selectedPlan.plan = plan
	showModal('shop-plan-id')
}
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
				:key="plan.title"
			>
				<ModalAction class="block" @click="handleOnclick(plan)">
					<ShopPlanCard
						:plan="plan"
						:planType="'fiber'"
						:imagePath="plan.imagePath"
					/>
				</ModalAction>
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
				:key="plan.title"
			>
				<ModalAction @click="handleOnclick(plan)">
					<ShopPlanCard
						:plan="plan"
						:planType="'fiber'"
						:imagePath="plan.imagePath"
					/>
				</ModalAction>
			</div>
		</div>
	</div>

	<ModalRoot id="shop-plan-id" class="max-w-[800px]">
		<ShopPlanDetail :plan="selectedPlan.plan" />
	</ModalRoot>
</template>

<style scoped>
.modal-action {
	display: block;
}
</style>
