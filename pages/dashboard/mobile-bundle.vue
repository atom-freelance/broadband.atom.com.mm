<script setup lang="ts">
const { showModal, closeModal } = useModal()
</script>

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
								@click="() => showModal('claim')"
							/>
						</DashboardBenefitItem>

						<DashboardBenefitItem subTitle="+959976356548" title="Phone number">
							<DashboardActionButton
								btnText="Change"
								@click="() => showModal('phone-number')"
							/>
						</DashboardBenefitItem>
					</DashboardBenefitList>
				</div>
			</div>
		</section>
	</article>

	<!-- Change Phone number Modal Section -->
	<ModalRoot id="phone-number">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body">Change phone number</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-black lg:text-lg"
				@click="() => closeModal('phone-number')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-black">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Current phone number</span>
					</div>
					<input
						type="text"
						class="input input-bordered w-full border-2 focus:border-black"
						placeholder="09 976356548"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">New phone number</span>
					</div>
					<input
						type="text"
						class="input input-bordered w-full border-2 focus:border-black"
					/>
				</label>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5">
			<div class="w-full text-center">
				<DashboardActionButton
					type="submit"
					btnText="Send verification code"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('phone-number')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Claim Modal Section -->
	<ModalRoot id="claim">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body">Claim the benefit</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-black lg:text-lg"
				@click="() => closeModal('claim')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-black">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Phone number</span>
					</div>
					<input
						type="text"
						class="input input-bordered w-full border-2 focus:border-black"
						placeholder="09 976356548"
					/>
				</label>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5">
			<div class="w-full text-center">
				<DashboardActionButton
					type="submit"
					btnText="Claim"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('claim')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>
</template>
