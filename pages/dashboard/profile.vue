<script setup lang="ts">
const { showModal, closeModal } = useModal()

let showPassword = ref(false)
let showNewPassword = ref(false)
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

	<!-- Change phone number Modal Section -->
	<ModalRoot id="phone-number">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body font-semibold">Change phone number</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('phone-number')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Current phone number</span>
					</div>
					<input
						type="text"
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
						placeholder="09 976356548"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">New phone number</span>
					</div>
					<input
						type="text"
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
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
							showModal('phone-code-id')
						}
					"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Enter Phone Code Modal Section -->
	<ModalRoot id="phone-code-id">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body font-semibold">Change phone number</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('phone-code-id')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
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
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
						placeholder=""
					/>
				</label>

				<span class="font-semibold text-black underline underline-offset-2"
					>I didn't receive a code</span
				>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5">
			<div class="w-full text-center">
				<DashboardActionButton
					type="submit"
					btnText="Submit"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('phone-code-id')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Change Email Modal Section -->
	<ModalRoot id="email-address">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body font-semibold">Change email address</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('email-address')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Current email address</span>
					</div>
					<input
						type="email"
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
						placeholder="aungminsoe.cumyeik@gmail.com"
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">New email address</span>
					</div>
					<input
						type="email"
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
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
							closeModal('email-address')
							showModal('email-code-id')
						}
					"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Enter Email Code Modal Section -->
	<ModalRoot id="email-code-id">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body font-semibold">Change email address</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('email-code-id')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<p class="font-normal text-content-primary">
					Enter the 6-digit code we just send ams@atom.com.mm.
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
						class="input input-bordered w-full border-2 focus:border-neutral focus:outline-none"
						placeholder=""
					/>
				</label>

				<span class="font-semibold text-black underline underline-offset-2"
					>I didn't receive a code</span
				>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5">
			<div class="w-full text-center">
				<DashboardActionButton
					type="submit"
					btnText="Submit"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('email-code-id')"
				/>
			</div>
		</ModalAction>
	</ModalRoot>

	<!-- Change Password Modal Section -->
	<ModalRoot id="password">
		<div class="flex items-center justify-between pt-4">
			<h3 class="text-title-body font-semibold">Change password</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('password')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<label class="form-control">
					<div class="label">
						<span class="label-text">Current password</span>
					</div>
					<div class="relative">
						<input
							:type="showPassword ? 'text' : 'password'"
							class="input input-bordered input-sm w-full md:input-md focus:border-neutral focus:outline-none"
							value="1234"
						/>

						<div
							class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
						>
							<Icon
								name="eye"
								class="1rem lg:1.5rem hover:cursor-pointer"
								@click="() => (showPassword = true)"
								v-show="!showPassword"
							/>

							<Icon
								name="eye-closed"
								class="1rem lg:1.5rem hover:cursor-pointer"
								@click="() => (showPassword = false)"
								v-show="showPassword"
							/>
						</div>
					</div>
				</label>

				<label class="form-control">
					<div class="label">
						<span class="label-text">New password</span>
					</div>
					<div class="relative">
						<input
							:type="showNewPassword ? 'text' : 'password'"
							class="input input-bordered input-sm w-full md:input-md focus:border-neutral focus:outline-none"
						/>

						<div
							class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
						>
							<Icon
								name="eye"
								class="1rem lg:1.5rem hover:cursor-pointer"
								@click="() => (showNewPassword = true)"
								v-show="!showNewPassword"
							/>

							<Icon
								name="eye-closed"
								class="1rem lg:1.5rem hover:cursor-pointer"
								@click="() => (showNewPassword = false)"
								v-show="showNewPassword"
							/>
						</div>
					</div>
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
