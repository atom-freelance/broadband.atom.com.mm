<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
	layout: 'login',
})

let showPassword = ref(false)
</script>

<template>
	<div class="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
		<section class="hidden bg-interactive-accent-active lg:block"></section>
		<section
			class="flex flex-col justify-center space-y-28 pb-10 pl-20 pr-36 pt-16"
		>
			<NuxtLink class="flex space-x-3 align-middle" to="/">
				<Icon name="arrow-left" />
				<span>Back to home</span>
			</NuxtLink>

			<div class="flex flex-col space-y-3 md:space-y-6">
				<h3 class="text-xl font-bold md:text-3xl">Login here</h3>
				<form @submit.prevent="" class="flex flex-col space-y-2 md:space-y-6">
					<label class="form-control">
						<div class="label">
							<span class="label-text">Primary phone</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered input-sm md:input-md"
						/>
					</label>

					<label class="form-control">
						<div class="label">
							<span class="label-text">Password</span>
						</div>
						<div class="relative">
							<input
								:type="showPassword ? 'text' : 'password'"
								placeholder="Type here"
								class="input input-bordered input-error input-sm w-full md:input-md"
							/>

							<div
								class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
							>
								<Icon
									name="eye-closed"
									class="1rem lg:1.5rem hover:cursor-pointer"
									@click="() => (showPassword = true)"
									v-show="!showPassword"
								/>

								<Icon
									name="eye-slash"
									class="1rem lg:1.5rem hover:cursor-pointer"
									@click="() => (showPassword = false)"
									v-show="showPassword"
								/>
							</div>
						</div>
						<div class="label justify-start space-x-1">
							<Icon name="exclamation-circle" class="text-error" />
							<span class="label-text-alt text-pretty text-xs text-error">
								These password does not match our records.
							</span>
						</div>
					</label>

					<div class="flex w-full flex-col space-y-3 text-center">
						<button type="submit" class="btn btn-primary btn-sm md:btn-md">
							Login
						</button>
						<NuxtLink to="#" class="text-xs text-primary md:text-lg"
							>Forgot Password?</NuxtLink
						>
					</div>
				</form>
			</div>

			<p class="md:text-md flex items-end text-xs">
				© Copyright 2023 All rights reserved by ATOM Myanmar.
			</p>
		</section>
	</div>
</template>
