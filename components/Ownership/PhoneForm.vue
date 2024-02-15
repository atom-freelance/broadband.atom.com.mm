<script setup lang="ts">
const { showModal, closeModal } = useModal()

const phoneNo = ref('')
const code = ref('')
const props = defineProps({
	onContinue: {
		type: Function,
		required: true,
	},
})
</script>

<template>
	<div class="space-y-12">
		<div class="">
			<label for="phone" class="block text-sm leading-6 text-slate-700">
				Phone number
			</label>
			<input
				type="number"
				name="phone"
				id="phone"
				v-model="phoneNo"
				class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
			/>
		</div>
		<button
			class="btn w-full rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
			@click="() => showModal('verify-phone')"
		>
			Continue
		</button>
	</div>
	<ModalRoot id="verify-phone" class="px-0">
		<div>
			<div
				class="flex items-center justify-between border-b border-gray-300 px-8 pb-2 pt-4"
			>
				<p class="font-semibold">Verify phone</p>
				<Icon
					name="times"
					class="cursor-pointer"
					@click="() => closeModal('verify-phone')"
				/>
			</div>
			<div class="space-y-6 px-8 pb-4">
				<p class="pt-8 text-sm text-content-secondary">
					Enter the 4-digit code we just send +95 912345678.
					<a href="#" class="font-semibold underline">change</a>
				</p>
				<div>
					<label for="code" class="block text-sm leading-6 text-slate-700">
						4-digit code
					</label>
					<input
						type="number"
						name="code"
						id="code"
						v-model="code"
						class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
					/>
				</div>

				<a href="#" class="block text-sm underline">I didn’t receive a code</a>
			</div>

			<div class="border-t border-gray-300 px-8 py-4">
				<button
					class="btn w-full rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
					@click="props.onContinue"
				>
					Verify
				</button>
			</div>
		</div>
	</ModalRoot>
</template>
