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
					<span class="font-bold underline underline-offset-4"
						>View Receipt</span
					>
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
					<span class="font-bold underline underline-offset-4"
						>View Receipt</span
					>
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
					<span class="font-bold underline underline-offset-4"
						>View Receipt</span
					>
				</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
