<script lang="ts" setup>
import { reactive, type PropType } from 'vue'

// { title: string; subtitle: string; tax: string; price: string; day: number; priceForBattery?: undefined; }
export type PlanType = {
	title: String
	power?: String
	subtitle?: String
	tax: String
	price?: String
	price_day?: String
	priceForBattery?: String
	day?: Number
}
const props = defineProps({
	plan: {
		type: Object as PropType<PlanType>,
		required: true,
	},
	planType: {
		type: String,
		required: true,
	},
	isStandard: {
		type: Boolean,
		default: () => true,
	},
	imagePath: {
		type: String,
		default: () => '/shop/Fiber-Starter-Kit-1.jpg',
	},
})
const { plan, planType } = props

const bgClass = reactive({
	'bg-[#1F2051] group-hover:bg-[#78C9FF]': planType === 'fiber',
	'bg-[#FFEB69] group-hover:bg-[#664B00]': planType === 'wireless',
	'bg-[#A0E1E1] group-hover:bg-[#0E5858]': planType === 'flexiNet',
})
const textClass = reactive({
	'text-[#78C9FF] group-hover:text-[#1F2051]': planType === 'fiber',
	'text-[#664B00] group-hover:text-[#FFEB69]': planType === 'wireless',
	'text-[#0E5858] group-hover:text-[#A0E1E1]': planType === 'flexiNet',
})
</script>

<template>
	<div>
		<div class="h-60 overflow-hidden">
			<div
				:class="[
					'flex h-60 w-full origin-bottom items-end bg-cover bg-no-repeat transition duration-300 group-hover:scale-110',
				]"
				:style="{ 'background-image': `url(${props.imagePath})` }"
			>
				<!-- <p
				:class="[
					textClass,
					'origin-bottom-left text-6xl font-black transition duration-300 group-hover:scale-150',
				]"
			>
				ATOM
			</p> -->
			</div>
		</div>
		<div class="py-3.5">
			<div class="flex items-center justify-between">
				<p class="text-lg font-semibold">
					<span v-if="plan.power">{{ $t(plan.power as string) }}</span>
					{{ $t(plan.title as string) }}
				</p>
				<Icon
					:name="'info-circle'"
					class="rounded-full bg-interactive-accent text-white"
				/>
			</div>
			<p v-if="plan.subtitle" class="my-1 leading-6 text-content-primary">
				{{ $t(plan.subtitle as string) }}
			</p>
			<p class="leading-6 text-content-primary">{{ $t(plan.tax as string) }}</p>
			<p class="mt-4">
				<span class="text-lg font-semibold"
					>{{
						!isStandard && plan.priceForBattery
							? $t(plan.priceForBattery as string)
							: plan.price_day
								? $t(plan.price_day as string)
								: plan.price
					}}
				</span>
				<span v-if="plan.day">/ {{ plan.day }} days</span>
			</p>
		</div>
	</div>
</template>
