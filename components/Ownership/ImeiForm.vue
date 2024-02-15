<script setup lang="ts">
const { showModal, closeModal } = useModal()

const imei = ref('')
const props = defineProps({
	onContinue: {
		type: Function,
		required: true,
	},
})

const handleContinue = () => {
	if (imei.value.length === 0) {
		showModal('imei-error')
		return
	}
	props.onContinue()
}
</script>

<template>
	<div class="space-y-12">
		<div class="">
			<label for="imei" class="block text-sm leading-6 text-slate-700"
				>IMEI number</label
			>
			<input
				type="text"
				name="imei"
				id="imei"
				v-model="imei"
				class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
			/>
			<p class="mt-3 text-sm leading-6 text-slate-500">
				IMEI number which can found at the bottom of the device.
			</p>
		</div>
		<button
			class="btn w-full rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
			@click="handleContinue"
		>
			Check
		</button>
	</div>
	<ModalRoot id="imei-error">
		<SuccessOrFail
			isError
			title="ID not found"
			subTitle="Sorry, we couldn't find your ID. Please double-check and ensure it is entered correctly. If you continue to experience issues, contact support for assistance."
			:onClose="() => closeModal('imei-error')"
		/>
	</ModalRoot>
</template>
