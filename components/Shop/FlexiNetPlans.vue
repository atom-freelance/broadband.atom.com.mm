<template>
	<div>
		<h1 class="mt-8 text-[48px] font-semibold max-sm:text-3xl">Starter</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in flexiNetStarter"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'flexiNet'"
					:imagePath="plan?.imagePath"
				/>
			</div>
		</div>

		<h1 class="mt-16 text-[48px] font-semibold max-sm:text-3xl">
			Renewal plan
		</h1>
		<div class="divider mb-9 mt-0"></div>

		<div
			class="grid grid-cols-1 gap-6 gap-y-24 max-sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3"
		>
			<div
				class="group w-full cursor-pointer bg-base-100"
				v-for="plan in flexiNetRenewal"
				:key="plan.title"
			>
				<ShopPlanCard
					:plan="plan"
					:planType="'flexiNet'"
					:imagePath="plan?.imagePath"
				/>
			</div>
		</div>
	</div>
</template>
