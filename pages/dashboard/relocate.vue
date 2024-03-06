<script setup lang="ts">
const { showModal, closeModal } = useModal()
</script>

<template>
	<DataTable
		:title="$t('relocate.title')"
		:description="$t('relocate.subtitle')"
	>
		<template #thead>
			<tr>
				<DataTableHeader iconName="hard-drive">
					{{ $t('relocate.cpe_device') }}
				</DataTableHeader>
				<DataTableHeader iconName="route">
					{{ $t('relocate.relocate_address') }}
				</DataTableHeader>
				<DataTableHeader iconName="settings">
					{{ $t('relocate.action') }}
				</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
							<span>Hlaing, Yangon</span>
							<DashboardStatus
								class="bg-categories-investments"
								name="Effective on 30 Dec, 2023"
							/>
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
							<span>Hlaing, Yangon</span>
							<DashboardStatus
								class="bg-categories-investments"
								name="Effective on 30 Dec, 2023"
							/>
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<img src="/assets/img/greater-than-equal-to.svg" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						@click="() => showModal('relocate-map')"
					>
						Relocate
					</button>
				</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>

	<!-- Relocate Map -->
	<ModalRoot id="relocate-map" isFullWidth class="mx-auto w-[965px]">
		<div class="flex items-center justify-between py-4">
			<h3 class="text-title-body">{{ $t('relocate.relocate_address') }}</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('relocate-map')"
			>
				✕
			</button>
		</div>

		<ModalBackdrop class="relative" enableClose>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7631.250047951644!2d96.1413044!3d16.9929852!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706338437413!5m2!1sen!2sus"
				style="border: 0"
				loading="lazy"
				height="500px"
				width="100%"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>

			<div
				class="absolute inset-5 flex max-h-fit w-1/3 flex-col gap-6 rounded-2xl bg-white p-5 text-content-primary"
			>
				<div class="flex flex-col gap-4">
					<h3 class="text-body-large font-semibold">
						Select location or pin from map
					</h3>

					<p class="text-xs font-normal lg:text-sm">
						Note: We can only guarantee our service to area where we are
						available. Please ensure to register with correct location.
					</p>
				</div>

				<form class="flex flex-col gap-6">
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">
								State/Region <sup class="text-red-600">*</sup>
							</span>
						</div>
						<select class="select select-bordered select-xs lg:select-sm">
							<option>Yangon</option>
							<option>Mandalay</option>
						</select>
					</label>

					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">
								Township <sup class="text-red-600">*</sup>
							</span>
						</div>
						<select class="select select-bordered select-xs lg:select-sm">
							<option>Thingangyun</option>
							<option>Kamayut</option>
						</select>
					</label>
				</form>
			</div>
		</ModalBackdrop>

		<ModalAction class="mt-0 py-5">
			<DashboardActionButton
				btnText="Check location"
				class="!h-fit w-full bg-interactive-accent py-3 text-white hover:bg-interactive-accent-hover"
				@click="
					() => {
						closeModal('relocate-map')
						showModal('relocate-address')
					}
				"
			/>
		</ModalAction>
	</ModalRoot>

	<!-- Relocate address -->
	<ModalRoot id="relocate-address" class="px-0">
		<div class="flex items-center justify-between px-8 pt-4">
			<h3 class="text-title-body">Change phone number</h3>

			<button
				class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
				@click="() => closeModal('relocate-address')"
			>
				✕
			</button>
		</div>

		<span class="divider my-0" />

		<ModalBackdrop class="px-8" enableClose>
			<div class="flex flex-col gap-6 py-8 text-content-primary">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Relocate date</span>
					</div>
					<input
						type="date"
						class="input input-bordered w-full border-2 focus:border-black"
					/>
				</label>

				<div
					class="flex items-end justify-between gap-10 rounded-lg border border-gray-400 bg-gray-200 p-3"
				>
					<div class="flex flex-col items-start gap-3">
						<span class="text-sm font-normal text-content-secondary">From</span>
						<span>Botahtaung, Yangon</span>
					</div>

					<img src="/assets/img/greater-than-equal-to.svg" />

					<div class="flex flex-col items-end gap-3">
						<span class="text-sm font-normal text-content-secondary">To</span>
						<div class="flex items-end justify-end gap-4">
							<span>Hlaing, Yangon</span>
						</div>
					</div>
				</div>
			</div>
		</ModalBackdrop>

		<span class="divider my-0" />

		<ModalAction class="my-5 justify-between px-8">
			<DashboardActionButton
				type="submit"
				btnText="Change location"
				class="!h-fit rounded-full px-6 py-3"
				@click="
					() => {
						closeModal('relocate-address')
					}
				"
			/>

			<DashboardActionButton
				type="submit"
				btnText="Confirm"
				class="!h-fit grow rounded-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
				@click="
					() => {
						closeModal('relocate-address')
					}
				"
			/>
		</ModalAction>
	</ModalRoot>
</template>
