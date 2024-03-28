<script setup lang="ts">
import type { PlanType } from './PlanCard.vue'

const { closeModal } = useModal()

const props = defineProps({
	plan: {
		type: Object as PropType<PlanType>,
		required: true,
	},
})

const planDetail = computed(() => {
	return props.plan
})
</script>

<template>
	<div class="w-full px-0 py-6">
		<div
			class="mb-4 grid w-full grid-cols-5 rounded-lg bg-red-500 px-4 py-2 max-md:space-y-3 max-md:px-2"
		>
			<div
				class="col-span-3 flex items-center gap-2 max-md:col-span-5 max-md:flex-col"
			>
				<Icon name="triangle-exclamation" class="text-white" />
				<p class="text-center text-sm text-white">
					This product is not available in <strong>San Chaung.</strong>
				</p>
			</div>
			<div
				class="col-span-2 flex items-center justify-end gap-2 max-md:col-span-5 max-md:w-full"
			>
				<button
					class="btn btn-ghost btn-sm text-white max-md:w-1/2"
					@click="() => closeModal('shop-plan-id')"
				>
					Change location
				</button>
				<button
					class="btn btn-sm bg-gray-100 text-red-500 max-md:w-1/2"
					@click="() => closeModal('shop-plan-id')"
				>
					Available products
				</button>
			</div>
		</div>

		<div class="mb-4 flex w-full justify-between">
			<p class="text-2xl font-semibold" v-if="planDetail?.power">
				{{ $t(planDetail?.power as string) }}
			</p>
			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('shop-plan-id')"
			>
				✕
			</button>
		</div>
		<div class="mb-6 flex w-full items-start gap-4">
			<Icon
				name="angles-right-small"
				class="mt-0.5 font-medium text-primary"
				size="24"
			/>
			<div class="grow">
				<p class="mb-3 text-lg font-medium">Information</p>
				<div class="flex items-center gap-4 max-md:justify-between">
					<p
						class="flex w-1/3 items-center gap-4 text-sm font-medium max-md:flex-1"
					>
						<Icon name="rocket-launch" size="22" />
						<span>Speed</span>
					</p>
					<p
						class="flex-1 text-sm font-medium max-md:flex-none"
						v-if="planDetail?.title !== ''"
					>
						{{ $t(planDetail?.title as string) }}
					</p>
				</div>
				<div class="mt-2 flex items-center gap-4 max-md:justify-between">
					<p
						class="flex w-1/3 items-center gap-4 text-sm font-medium max-md:flex-1"
					>
						<Icon name="dollar-circle" size="22" />
						<span>Installation charges</span>
					</p>
					<p class="flex-1 text-sm font-medium max-md:flex-none">FREE</p>
				</div>
			</div>
		</div>

		<div class="mb-6 flex w-full items-start gap-4">
			<Icon
				name="angles-right-small"
				class="mt-0.5 font-medium text-primary"
				size="24"
			/>
			<div class="grow space-y-2">
				<p class="mb-3 text-lg font-medium">Pricing</p>

				<div class="flex items-center gap-4 max-md:justify-between">
					<p
						class="flex w-1/3 items-center gap-4 text-sm font-medium max-md:flex-1"
					>
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>28,000 MMK</span>
					</p>
					<p class="flex-1 text-sm font-medium max-md:flex-none">for 30 days</p>
				</div>
				<div class="flex items-center gap-4 max-md:justify-between">
					<p
						class="flex w-1/3 items-center gap-4 text-sm font-medium max-md:flex-1"
					>
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>77,000 MMK</span>
					</p>
					<p class="flex-1 text-sm font-medium max-md:flex-none">for 60 days</p>
				</div>
				<div class="flex items-center gap-4 max-md:justify-between">
					<p
						class="flex w-1/3 items-center gap-4 text-sm font-medium max-md:flex-1"
					>
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>140,000 MMK</span>
					</p>
					<p class="flex-1 text-sm font-medium max-md:flex-none">
						for 180 days
					</p>
				</div>
			</div>
		</div>

		<div class="mb-6 flex w-full items-start gap-4">
			<Icon
				name="angles-right-small"
				class="mt-0.5 font-medium text-primary"
				size="24"
			/>
			<div class="grow">
				<p class="mb-3 text-lg font-medium">Benefits</p>
				<p class="mb-3 text-sm font-medium">
					<span v-if="planDetail?.power">{{
						$t(planDetail?.power as string)
					}}</span>
					ကို ဝယ်ယူ/သက်တမ်းတိုးပါက ဖုန်းနံပါတ် ၃ လုံးအထိ အောက်ပါအတိုင်း Gift
					များရရှိနိုင်ပါသည်။
				</p>
				<ul class="list-inside list-disc">
					<li class="mb-3 text-sm font-medium">အခမဲ့ ဒေတာ 1GB</li>
					<li class="mb-3 text-sm font-medium">
						On-net (ATOM to ATOM) ဖုန်းခေါ်ဆိုခြင်းအတွက် မိနစ် ၁၀၀ အခမဲ့
					</li>
					<li class="mb-3 text-sm font-medium">
						On-net (ATOM to ATOM) အကန့်အသတ်မဲ့ SMS ပေးပို့နိုင်ခြင်း
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-6 flex w-full items-start gap-4 bg-gray-100 p-4">
			<Icon
				name="quote"
				class="-scale-100 font-medium text-primary"
				size="24"
			/>
			<div class="grow">
				<p class="mb-3 text-xs">
					ဝယ်ယူထားသော သက်တမ်းပြည့်လျှင် Renew လုပ်ရန် လိုအပ်ပါသည်။
				</p>
				<p class="mb-3 text-xs">
					Renew လုပ်လျှင် Mobile Bundle ကို ထပ်မံ ရရှိပါမည်။
				</p>
			</div>
		</div>

		<div class="flex justify-end gap-2">
			<button
				class="btn btn-ghost btn-md"
				@click="() => closeModal('shop-plan-id')"
			>
				Cancel
			</button>
			<NuxtLinkLocale to="/checkout-123" class="btn btn-primary btn-md">
				Buy now
			</NuxtLinkLocale>
		</div>
	</div>
</template>
