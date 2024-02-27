<script setup lang="ts">
const { showModal, closeModal } = useModal()
</script>

<template>
	<DataTable title="Order" description="Manage and your personal information">
		<template #thead>
			<tr>
				<DataTableHeader iconName="calendar-empty-alt">Date</DataTableHeader>
				<DataTableHeader iconName="menu-left">Product name</DataTableHeader>
				<DataTableHeader iconName="list">Order ID</DataTableHeader>
				<DataTableHeader iconName="list">Subscription ID</DataTableHeader>
				<DataTableHeader iconName="papers">Status</DataTableHeader>
				<DataTableHeader iconName="dollar-circle">Price</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-investments" name="Pending" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-investments" name="Pending" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-groceries" name="Failed" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td class="underline">O219159</td>
				<td class="underline">O219159</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Success" />
				</td>
				<td class="flex justify-between">
					<span>197000 MMK</span>
					<button
						class="font-bold underline underline-offset-4"
						@click="() => showModal('billing')"
					>
						View Receipt
					</button>
				</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>

	<!-- Billing Modal Section -->
	<ModalRoot id="billing" class="px-0">
		<section class="flex flex-col gap-5">
			<section>
				<div class="flex items-center justify-between px-8 pt-4">
					<h3 class="text-title-body">Billing Detail - B000240</h3>

					<button
						class="btn btn-circle btn-ghost btn-sm text-content-primary lg:text-lg"
						@click="() => closeModal('billing')"
					>
						✕
					</button>
				</div>

				<span class="divider my-0" />
			</section>

			<ModalBackdrop class="px-8" enableClose>
				<article class="card gap-5 rounded border p-5 text-content-primary">
					<!-- customer information -->
					<section class="flex flex-col gap-6">
						<h3 class="text-body-large font-semibold">Customer information</h3>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Name</span>
							<span class="text-sm font-medium">Aungmin Soe</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Phone number</span>
							<span class="text-sm font-medium">09 12345678</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Email address</span>
							<span class="text-sm font-medium">hi@aungminsoe.com</span>
						</div>
					</section>

					<span class="divider my-0" />

					<!-- Address information -->
					<section class="flex flex-col gap-6">
						<h3 class="text-body-large font-semibold">Address information</h3>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Service address</span>
							<span class="text-sm font-medium">Hlaing, Yangon</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Delivery address</span>
							<span class="text-sm font-medium">Tamwe, Yangon</span>
						</div>
					</section>

					<span class="divider my-0" />

					<!-- Product information -->
					<section class="flex flex-col gap-6">
						<h3 class="text-body-large font-semibold">Product information</h3>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Subscription ID</span>
							<span class="text-sm font-medium">S00239</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Product name</span>
							<span class="text-sm font-medium">Home Wireless Kit</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Product speed</span>
							<span class="text-sm font-medium">100 Mps*</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Monthly amount</span>
							<span class="text-sm font-medium">77500 MMK</span>
						</div>
					</section>

					<span class="divider my-0" />

					<!-- Payment Information -->
					<section class="flex flex-col gap-6">
						<h3 class="text-body-large font-semibold">Payment information</h3>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Payment method</span>
							<span class="text-sm font-medium">Visa Card</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">CPE Device Cost</span>
							<span class="text-sm font-medium">0 MMK</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Delivery Fee</span>
							<span class="text-sm font-medium">0 MMK</span>
						</div>

						<div class="flex items-center justify-between gap-4">
							<span class="text-sm font-normal">Subscription Cost</span>
							<span class="text-sm font-medium">77500 MMK</span>
						</div>
					</section>

					<span class="divider my-0" />

					<p class="text-end text-body-large font-semibold">
						Grand Total : 77500 MMK
					</p>
				</article>
			</ModalBackdrop>

			<ModalAction class="mb-5 mt-0">
				<section class="w-full">
					<span class="divider mt-0" />

					<div class="px-8 text-center">
						<DashboardActionButton
							type="submit"
							btnText="Download"
							class="!h-fit w-full bg-interactive-accent px-6 py-3 text-white hover:bg-interactive-accent-hover"
							@click="() => closeModal('billing')"
						/>
					</div>
				</section>
			</ModalAction>
		</section>
	</ModalRoot>
</template>
