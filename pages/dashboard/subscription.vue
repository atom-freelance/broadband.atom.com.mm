<script setup lang="ts">
type TabState = 'fiber' | 'wireless' | 'flexi net'

const tabState = ref<TabState>('fiber')

function changeTabState(state: TabState) {
	tabState.value = state
}

function isTabActive(state: TabState) {
	return tabState.value === state
}
</script>

<template>
	<section class="flex flex-col gap-4">
		<h1 class="text-title-section font-semibold">Subscription</h1>
		<p class="text-sm">Manage and your personal information</p>

		<section class="flex flex-col gap-4">
			<!-- Tab Panel -->
			<div class="grid grid-cols-3 text-center">
				<label
					class="col-span-1 space-x-2 border-b-2 py-2 hover:cursor-pointer"
					:class="{ 'border-b-primary': isTabActive('fiber') }"
				>
					<input
						type="radio"
						name="subscription_tab"
						role="tab"
						@click="changeTabState('fiber')"
						:checked="isTabActive('fiber')"
					/>
					<span>Fiber</span>
				</label>

				<label
					class="col-span-1 space-x-2 border-b-2 py-2 hover:cursor-pointer"
					:class="{ 'border-b-primary': isTabActive('wireless') }"
				>
					<input
						type="radio"
						name="subscription_tab"
						role="tab"
						@click="changeTabState('wireless')"
						:checked="isTabActive('wireless')"
					/>
					<span>Wireless</span>
				</label>

				<label
					class="col-span-1 space-x-2 border-b-2 py-2 hover:cursor-pointer"
					:class="{ 'border-b-primary': isTabActive('flexi net') }"
				>
					<input
						type="radio"
						name="subscription_tab"
						role="tab"
						@click="changeTabState('flexi net')"
						:checked="isTabActive('flexi net')"
					/>
					<span>Flexi Net</span>
				</label>
			</div>

			<!-- Tab Content(fiber) -->
			<section v-show="tabState === 'fiber'">
				<DataTable>
					<template #thead>
						<tr>
							<DataTableHeader iconName="hard-drive">
								Line Number
							</DataTableHeader>
							<DataTableHeader iconName="menu-left"> Plan </DataTableHeader>
							<DataTableHeader iconName="map">Address</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt"
								>Start date</DataTableHeader
							>
							<DataTableHeader iconName="calendar-empty-alt"
								>End date</DataTableHeader
							>
							<DataTableHeader iconName="list">Status</DataTableHeader>
							<DataTableHeader iconName="settings">Action</DataTableHeader>
						</tr>
					</template>

					<template #tbody>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
					</template>

					<template #tfoot>
						<DataTableFooter />
					</template>
				</DataTable>
			</section>

			<!-- Tab Content(wireless) -->
			<section v-show="tabState === 'wireless'">
				<DataTable>
					<template #thead>
						<tr>
							<DataTableHeader iconName="hard-drive">
								Line Number
							</DataTableHeader>
							<DataTableHeader iconName="menu-left"> Plan </DataTableHeader>
							<DataTableHeader iconName="map">Address</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt"
								>Start date</DataTableHeader
							>
							<DataTableHeader iconName="calendar-empty-alt"
								>End date</DataTableHeader
							>
							<DataTableHeader iconName="list">Status</DataTableHeader>
							<DataTableHeader iconName="settings">Action</DataTableHeader>
						</tr>
					</template>

					<template #tbody>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
					</template>

					<template #tfoot>
						<DataTableFooter />
					</template>
				</DataTable>
			</section>

			<!-- Tab Content(flexi net) -->
			<section v-show="tabState === 'flexi net'">
				<DataTable>
					<template #thead>
						<tr>
							<DataTableHeader iconName="hard-drive">
								Line Number
							</DataTableHeader>
							<DataTableHeader iconName="menu-left"> Plan </DataTableHeader>
							<DataTableHeader iconName="map">Address</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt"
								>Start date</DataTableHeader
							>
							<DataTableHeader iconName="calendar-empty-alt"
								>End date</DataTableHeader
							>
							<DataTableHeader iconName="list">Status</DataTableHeader>
							<DataTableHeader iconName="settings">Action</DataTableHeader>
						</tr>
					</template>

					<template #tbody>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
						<tr>
							<td>868465034183737</td>
							<td>Power 40</td>
							<td>Thakhin Ba Hein St, Ygn</td>
							<td>1 Jan, 2024</td>
							<td>1 Feb, 2024</td>
							<td>
								<DashboardStatus class="bg-categories-cash" name="Active" />
							</td>
							<td>
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										btnText="Renew Plan"
										class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
									/>
								</NuxtLink>
							</td>
						</tr>
					</template>

					<template #tfoot>
						<DataTableFooter />
					</template>
				</DataTable>
			</section>
		</section>
	</section>
</template>
