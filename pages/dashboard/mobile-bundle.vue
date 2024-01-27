<template>
	<article class="flex flex-col gap-6">
		<h1 class="text-title-section font-semibold">Mobile bundle</h1>
		<p class="text-sm">
			Congratulation !!! You are eligible to claim the mobile benefits.
		</p>

		<section class="bg-neutral-100">
			<div class="flex items-center gap-4 border border-l-0 border-r-0 p-4">
				<Icon name="hard-drive" />
				<h3 class="text-xs lg:text-lg">CPE Device(IMEI) : 3YGN211021722</h3>
			</div>

			<div class="container flex flex-col gap-8 px-6 py-8">
				<div>
					<span class="font-normal">You can get the following benefits:</span>

					<div class="grid grid-cols-1 gap-8 p-2 lg:grid-cols-3">
						<DashboardBenefitCard
							title="100GB"
							subTitle="Monthly data"
							icon="wifi"
							class="bg-benefit-card-wifi"
						/>
						<DashboardBenefitCard
							title="300 min"
							subTitle="Voice call"
							icon="phone-call"
							class="bg-benefit-card-pone-call"
						/>
						<DashboardBenefitCard
							title="5 simcard"
							subTitle="Total device"
							icon="sim-card"
							class="bg-benefit-card-sim-card"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<span class="font-normal"
						>To share your benefits with family & friends, please type in ATOM
						Phone Number to share the benefits :</span
					>

					<DashboardBenefitList>
						<DashboardBenefitItem subTitle="+959976356548" title="Phone number">
							<DashboardActionButton
								class="bg-interactive-accent text-white hover:bg-interactive-accent-hover"
								btnText="Claim"
							/>
						</DashboardBenefitItem>

						<DashboardBenefitItem subTitle="+959976356548" title="Phone number">
							<DashboardActionButton btnText="Change" />
						</DashboardBenefitItem>
					</DashboardBenefitList>
				</div>
			</div>
		</section>
	</article>
</template>
