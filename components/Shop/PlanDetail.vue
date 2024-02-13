<script setup lang="ts">
const { closeModal } = useModal()
</script>

<template>
	<div class="w-full px-0 py-6">
		<div class="mb-4 grid w-full grid-cols-5 rounded-lg bg-red-500 px-4 py-2">
			<div class="col-span-3 flex items-center gap-2">
				<Icon name="triangle-exclamation" class="text-white" />
				<p class="text-sm text-white">
					This product is not available in <strong>San Chaung.</strong>
				</p>
			</div>
			<div class="col-span-2 flex items-center justify-end gap-2">
				<button
					class="btn btn-ghost btn-sm text-white"
					@click="() => closeModal('shop-plan-id')"
				>
					Change location
				</button>
				<button
					class="btn btn-sm bg-gray-100 text-red-500"
					@click="() => closeModal('shop-plan-id')"
				>
					Available products
				</button>
			</div>
		</div>

		<div class="mb-4 flex w-full justify-between">
			<p class="text-2xl font-semibold">Power 15</p>
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
				<div class="grid grid-cols-6 items-center gap-4">
					<p class="col-span-2 flex items-center gap-4 text-sm font-medium">
						<Icon name="rocket-launch" size="22" />
						<span>Speed</span>
					</p>
					<p class="col-span-3 text-sm font-medium">Up to 15Mbps</p>

					<p class="col-span-2 flex items-center gap-4 text-sm font-medium">
						<Icon name="dollar-circle" size="22" />
						<span>Installation charges</span>
					</p>
					<p class="col-span-3 text-sm font-medium">FREE</p>
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
				<p class="mb-3 text-lg font-medium">Pricing</p>
				<div class="grid grid-cols-6 items-center gap-4">
					<p class="col-span-2 flex items-center gap-4 text-sm font-medium">
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>28,000 MMK</span>
					</p>
					<p class="col-span-3 text-sm font-medium">for 30 days</p>

					<p class="col-span-2 flex items-center gap-4 text-sm font-medium">
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>77,000 MMK</span>
					</p>
					<p class="col-span-3 text-sm font-medium">for 60 days</p>

					<p class="col-span-2 flex items-center gap-4 text-sm font-medium">
						<Icon name="hand-holding-dollar-circle" size="22" />
						<span>140,000 MMK</span>
					</p>
					<p class="col-span-3 text-sm font-medium">for 180 days</p>
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
					Power15 ကို ဝယ်ယူ/သက်တမ်းတိုးပါက ဖုန်းနံပါတ် ၃ လုံးအထိ အောက်ပါအတိုင်း
					Gift များရရှိနိုင်ပါသည်။
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
			<button
				class="btn btn-primary btn-md"
				@click="() => closeModal('shop-plan-id')"
			>
				Buy now
			</button>
		</div>
	</div>
</template>
