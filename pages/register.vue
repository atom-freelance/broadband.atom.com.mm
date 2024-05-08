<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
	layout: 'login',
})

const { showModal, closeModal } = useModal()

const register = async () => {
	await navigateTo('/')
}
</script>

<template>
	<div class="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
		<section class="hidden lg:relative lg:block">
			<img src="/login_bg.png" class="h-screen" />
			<img src="/login_mascots.png" class="absolute bottom-0" />
		</section>
		<section
			class="flex flex-col justify-around space-y-48 px-8 lg:relative lg:-left-10 lg:space-y-0 lg:p-0"
		>
			<NuxtLink class="flex space-x-3 align-top" to="/">
				<Icon name="arrow-left" />
				<span>Back to home</span>
			</NuxtLink>

			<div class="flex flex-col space-y-3 md:space-y-6">
				<h3 class="text-xl font-bold md:text-3xl">Register</h3>
				<form
					@submit.prevent="register"
					class="flex flex-col space-y-2 md:space-y-6"
				>
					<label class="form-control">
						<div class="label">
							<span class="label-text">Primary phone</span>
						</div>
						<input
							type="text"
							placeholder="+959"
							class="input input-bordered input-sm md:input-md focus:border-interactive-secondary focus:outline-none"
						/>
					</label>

					<div class="flex w-full flex-col space-y-3 text-center">
						<button
							type="button"
							class="btn btn-sm bg-interactive-accent text-white md:btn-md hover:bg-interactive-accent-hover"
							@click.prevent="showModal('verify-phone')"
						>
							Login
						</button>
					</div>
				</form>
			</div>

			<p class="md:text-md flex items-end text-xs">
				© Copyright 2023 All rights reserved by ATOM Myanmar.
			</p>
		</section>
	</div>

	<!-- Verify Phone Section -->
	<ModalRoot id="verify-phone" class="px-0">
		<div class="flex items-center justify-between px-8 pt-4">
			<h3 class="text-title-body font-semibold">Verify phone</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('verify-phone')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop class="px-8" enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<p class="font-normal text-content-primary">
					Enter the 4-digit code we just send +95 912345678.
					<span class="text-sm font-semibold underline underline-offset-4"
						>change</span
					>
				</p>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">4-digit code</span>
					</div>
					<input
						type="text"
						class="input input-bordered input-sm w-full border-2 lg:input-md focus:border-neutral focus:outline-none"
						placeholder=""
					/>
				</label>

				<span class="font-semibold text-black underline underline-offset-2"
					>I didn't receive a code</span
				>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5 px-8">
			<div class="w-full text-center">
				<DashboardActionButton
					type="submit"
					btnText="Verify"
					class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
					@click="
						() => {
							closeModal('verify-phone')
							register()
						}
					"
				/>
			</div>
		</ModalAction>
	</ModalRoot>
</template>
