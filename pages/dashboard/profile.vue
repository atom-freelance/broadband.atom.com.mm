<script setup lang="ts">
const { showModal, closeModal } = useModal()
</script>

<template>
	<div class="flex flex-col gap-4">
		<h1 class="text-title-section font-semibold">Account settings</h1>

		<div>
			<p class="text-sm">Manage and your personal information</p>

			<span class="divider mb-0 mt-2" />
		</div>

		<DashboardBenefitList>
			<DashboardBenefitItem title="Name" subTitle="Aung Min Soe" />

			<DashboardBenefitItem
				title="Account ID"
				subTitle="5000198"
				icon="hashtag"
			/>

			<DashboardBenefitItem
				title="Phone number"
				subTitle="+959976356548"
				icon="phone"
			>
				<DashboardActionButton
					class="bg-interactive-accent text-white hover:bg-interactive-accent-hover"
					btnText="Change"
					@click="() => showModal('phone-number')"
				/>
			</DashboardBenefitItem>

			<DashboardBenefitItem
				title="Email address"
				subTitle="aungminsoe@gmail.com"
				icon="envelope"
			>
				<DashboardActionButton
					class="bg-interactive-accent text-white hover:bg-interactive-accent-hover"
					btnText="Change"
					@click="() => showModal('email-address')"
				/>
			</DashboardBenefitItem>

			<DashboardBenefitItem title="Password" subTitle="*********" icon="lock">
				<DashboardActionButton
					class="bg-interactive-accent text-white hover:bg-interactive-accent-hover"
					btnText="Change"
					@click="() => showModal('password')"
				/>
			</DashboardBenefitItem>
		</DashboardBenefitList>
	</div>

	<!-- Send Verification Code Modal Section -->
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
					@click="
						() => {
							closeModal('phone-number')
							showModal('code-id')
						}
					"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Enter Code Modal Section -->
	<ModalRoot id="code-id">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body">Change phone number</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-black lg:text-lg"
				@click="() => closeModal('code-id')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-black">
				<p class="font-normal text-content-primary">
					Enter the 6-digit code we just send +95 912345678.
					<span class="text-sm font-semibold underline underline-offset-4"
						>change</span
					>
				</p>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">6-digit code</span>
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
					btnText="Submit"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('code-id')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Change Email Modal Section -->
	<ModalRoot id="email-address">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body">Change email address</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-black lg:text-lg"
				@click="() => closeModal('email-address')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-black">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Email Address</span>
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
					btnText="Submit"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('email-address')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Change Password Modal Section -->
	<ModalRoot id="password">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body">Change password</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-black lg:text-lg"
				@click="() => closeModal('password')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-black">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Password</span>
					</div>
					<input
						type="password"
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
					btnText="Submit"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('password')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>
</template>
