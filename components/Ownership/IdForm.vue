<script setup lang="ts">
const props = defineProps({
	onContinue: {
		type: Function,
		required: true,
	},
})

const type = ref('nrc')

const handleChange = (value: string) => {
	type.value = value
}
</script>

<template>
	<div class="space-y-10">
		<div class="flex">
			<div
				:class="[
					type === 'nrc' ? 'border-b-2 border-b-indigo-600' : 'border-b',
					'flex w-full cursor-pointer items-center justify-center gap-4 py-2 max-md:gap-1',
				]"
				@click="handleChange('nrc')"
			>
				<input
					type="radio"
					id="nrc"
					:name="type"
					value="nrc"
					class="cursor-pointer"
					v-model="type"
				/>
				<label for="nrc" class="cursor-pointer max-md:text-sm"
					>NRC <span class="max-md:hidden">(Local)</span></label
				>
			</div>
			<div
				:class="[
					type === 'passport' ? 'border-b-2 border-b-indigo-600' : 'border-b',
					'flex w-full cursor-pointer items-center justify-center gap-4 py-2 max-md:gap-1',
				]"
				@click="handleChange('passport')"
			>
				<input
					type="radio"
					:name="type"
					value="passport"
					class="cursor-pointer"
					v-model="type"
				/>
				<label for="passport" class="cursor-pointer max-md:text-sm"
					>Passport <span class="max-md:hidden">(Foreigner)</span></label
				>
			</div>
		</div>

		<div v-if="type === 'nrc'" class="mb-4">
			<label for="nrc" class="block text-sm leading-6 text-slate-700">
				NRC
			</label>
			<div class="mb-4 grid grid-cols-6 gap-2">
				<div class="col-span-2">
					<select class="select select-bordered select-sm h-full w-full">
						<option>12/</option>
						<option>13/</option>
					</select>
				</div>
				<div class="col-span-1">
					<select class="select select-bordered select-sm h-full w-full">
						<option>N</option>
						<option>P</option>
					</select>
				</div>
				<div class="col-span-3">
					<input
						type="number"
						name="nrc"
						id="nrc"
						class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
				<FileUpload title="Front of NRC" />
				<FileUpload title="Back of NRC" />
			</div>
		</div>
		<div v-else class="my-4">
			<div class="mb-2 py-3">
				<label for="passport" class="block text-sm leading-6 text-slate-700">
					Passport number
				</label>
				<input
					type="text"
					name="passport"
					id="passport"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
				/>
			</div>
			<FileUpload title="Upload your passport" />
		</div>

		<button
			class="btn w-full rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
			@click="props.onContinue"
		>
			Continue
		</button>
	</div>
</template>
