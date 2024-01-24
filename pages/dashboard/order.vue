<template>
	<DataTable title="Order" description="Manage and your personal information">
		<template #thead>
			<tr>
				<DataTableHeader iconName="hashtag"> Order ID </DataTableHeader>
				<DataTableHeader iconName="menu-left"> Product name </DataTableHeader>
				<DataTableHeader iconName="map">Address</DataTableHeader>
				<DataTableHeader iconName="dollar-circle">Price</DataTableHeader>
				<DataTableHeader iconName="papers">Status</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td>Sporer, Sipes and Rogahn</td>
				<td>Poland</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Delivered" />
				</td>
			</tr>
			<tr>
				<td>Alec Lethby</td>
				<td>Teacher</td>
				<td>Reichel, Glover and Hamill</td>
				<td>China</td>
				<td>
					<DashboardStatus
						class="bg-categories-investments"
						name="Inprogress"
					/>
				</td>
			</tr>
			<tr>
				<td>Alec Lethby</td>
				<td>Teacher</td>
				<td>Reichel, Glover and Hamill</td>
				<td>China</td>
				<td>
					<DashboardStatus class="bg-categories-bills" name="Todo" />
				</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
