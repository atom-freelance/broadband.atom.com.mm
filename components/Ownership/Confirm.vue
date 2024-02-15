<script setup lang="ts">
const { showModal, closeModal } = useModal()

const props = defineProps({
	onContinue: {
		type: Function,
		required: true,
	},
})
</script>

<template>
	<div class="space-y-8">
		<h4 class="mt-5 font-medium text-content-secondary">
			Check your detail information and confirm to continue ownership change
			process
		</h4>
		<div class="space-y-3">
			<p class="flex justify-between text-sm text-content-secondary">
				<span>IMEI Number</span><span class="font-medium">86123456</span>
			</p>
			<p class="flex justify-between text-sm text-content-secondary">
				<span>New owner</span><span class="font-medium">Wai Lin</span>
			</p>
			<p class="flex justify-between text-sm text-content-secondary">
				<span>Phone number</span><span class="font-medium">09 12345678</span>
			</p>
		</div>
		<div class="mt-3 flex flex-grow gap-2">
			<button
				class="btn btn-outline flex-1 rounded-full border-slate-400 px-6 py-2 text-base font-semibold text-content-secondary hover:border-error hover:bg-error max-md:self-center"
				@click="props.onContinue"
			>
				Cancel
			</button>
			<button
				class="btn flex-1 rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
				@click="() => showModal('confirm-success')"
			>
				Continue
			</button>
		</div>
	</div>
	<ModalRoot id="confirm-success">
		<SuccessOrFail
			title="Successfully changed"
			subTitle="Ownership change successful! We'll notify you within 7 days once the
					contact process is complete. If you have any concerns or need further
					assistance, feel free to reach out to us."
			:onClose="() => closeModal('confirm-success')"
		/>
	</ModalRoot>
</template>
