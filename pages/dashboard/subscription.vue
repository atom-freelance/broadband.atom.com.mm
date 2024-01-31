<template>
	<DataTable
		title="Subscription"
		description="Manage and your personal information"
	>
		<template #thead>
			<tr>
				<DataTableHeader iconName="hard-drive">
					CPE Device(IMEI)
				</DataTableHeader>
				<DataTableHeader iconName="menu-left"> Product name </DataTableHeader>
				<DataTableHeader iconName="map">Address</DataTableHeader>
				<DataTableHeader iconName="dollar-circle">Price</DataTableHeader>
				<DataTableHeader iconName="list">Status</DataTableHeader>
				<DataTableHeader iconName="settings">Action</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td>Sporer, Sipes and Rogahn</td>
				<td>Poland</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Active" />
				</td>
				<td>
					<NuxtLink :to="`/${1}`">
						<DashboardActionButton
							btnText="Renew Plan"
							class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						/>
					</NuxtLink>
				</td>
			</tr>
			<tr>
				<td>Alec Lethby</td>
				<td>Teacher</td>
				<td>Reichel, Glover and Hamill</td>
				<td>China</td>
				<td>
					<DashboardStatus class="bg-categories-groceries" name="Expired" />
				</td>
				<td>
					<NuxtLink :to="`/${2}`">
						<DashboardActionButton
							btnText="Renew Plan"
							class="btn btn-xs bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
						/>
					</NuxtLink>
				</td>
			</tr>
			<tr>
				<td>Alec Lethby</td>
				<td>Teacher</td>
				<td>Reichel, Glover and Hamill</td>
				<td>China</td>
				<td>
					<DashboardStatus class="bg-categories-general" name="Terminate" />
				</td>
				<td></td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
