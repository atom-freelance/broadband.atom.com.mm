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
		<h1 class="text-title-section font-semibold">
			{{ $t('subscription.title') }}
		</h1>
		<p class="text-sm">{{ $t('subscription.subtitle') }}</p>

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
								{{ $t('subscription.fiber.line_number') }}
							</DataTableHeader>
							<DataTableHeader iconName="menu-left">
								{{ $t('subscription.fiber.plan') }}
							</DataTableHeader>
							<DataTableHeader iconName="map">
								{{ $t('subscription.fiber.address') }}
							</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">
								{{ $t('subscription.fiber.start_date') }}
							</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">
								{{ $t('subscription.fiber.end_date') }}
							</DataTableHeader>
							<DataTableHeader iconName="list">
								{{ $t('subscription.fiber.status') }}
							</DataTableHeader>
							<DataTableHeader
								iconName="settings"
								class="sticky right-0 bg-gray-100"
							>
								{{ $t('subscription.fiber.action') }}
							</DataTableHeader>
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
								{{ $t('subscription.wireless.cpe_device') }}
							</DataTableHeader>
							<DataTableHeader iconName="menu-left">
								{{ $t('subscription.wireless.product') }}
							</DataTableHeader>
							<DataTableHeader iconName="map">{{
								$t('subscription.wireless.address')
							}}</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">{{
								$t('subscription.wireless.start_date')
							}}</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">{{
								$t('subscription.wireless.end_date')
							}}</DataTableHeader>
							<DataTableHeader iconName="list">{{
								$t('subscription.wireless.status')
							}}</DataTableHeader>
							<DataTableHeader
								iconName="settings"
								class="sticky right-0 bg-gray-100"
								>{{ $t('subscription.wireless.action') }}</DataTableHeader
							>
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
								{{ $t('subscription.flexi_net.cpe_device') }}
							</DataTableHeader>
							<DataTableHeader iconName="menu-left">
								{{ $t('subscription.flexi_net.product') }}
							</DataTableHeader>
							<DataTableHeader iconName="map">{{
								$t('subscription.flexi_net.address')
							}}</DataTableHeader>
							<DataTableHeader iconName="database">{{
								$t('subscription.flexi_net.data')
							}}</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">{{
								$t('subscription.flexi_net.start_date')
							}}</DataTableHeader>
							<DataTableHeader iconName="calendar-empty-alt">{{
								$t('subscription.flexi_net.end_date')
							}}</DataTableHeader>
							<DataTableHeader
								iconName="settings"
								class="sticky right-0 bg-gray-100"
								>{{ $t('subscription.flexi_net.action') }}</DataTableHeader
							>
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
							<td class="sticky right-0 bg-white">
								<NuxtLink :to="`/checkout-${1}`">
									<DashboardActionButton
										:btnText="$t('dashboard.action.renew_plan')"
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
