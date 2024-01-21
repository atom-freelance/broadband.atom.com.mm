<script setup lang="ts">
definePageMeta({
	layout: 'login',
})
</script>

<template>
	<div class="grid h-screen w-full grid-cols-2">
		<section class="bg-interactive-accent-active"></section>

		<section class="flex flex-col justify-center space-y-28 px-36 pb-10 pt-16">
			<NuxtLink class="flex space-x-3 align-middle" to="/">
				<Icon name="arrow-left" />
				<span>Back to home</span>
			</NuxtLink>

			<div class="flex flex-col space-y-10">
				<h3 class="text-3xl font-bold">Login here</h3>
				<form @submit.prevent="" class="flex flex-col gap-y-6">
					<label class="form-control">
						<div class="label">
							<span class="label-text">Primary phone</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered"
						/>
					</label>

					<label class="form-control">
						<div class="label">
							<span class="label-text">Password</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered input-error"
						/>
						<div class="label justify-start space-x-1">
							<Icon name="exclamation-circle" class="text-error" />
							<span class="label-text-alt text-error"
								>These password does not match our records.</span
							>
						</div>
					</label>

					<div class="flex w-full flex-col space-y-3 text-center">
						<button type="submit" class="btn btn-primary">Login</button>
						<NuxtLink to="#" class="text-primary">Forgot Password?</NuxtLink>
					</div>
				</form>
			</div>

			<p class="flex items-end">
				© Copyright 2023 All rights reserved by ATOM Myanmar.
			</p>
		</section>
	</div>
</template>
