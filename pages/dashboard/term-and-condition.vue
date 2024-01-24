<template>
	<DataTable
		title="Term & Condition"
		description="Manage and your personal information"
	>
		<template #thead>
			<tr>
				<DataTableHeader iconName="calendar-empty-alt">Date</DataTableHeader>
				<DataTableHeader iconName="menu-left">T&C Name</DataTableHeader>
				<DataTableHeader iconName="download-alt">Download</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးြပုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးြပုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးြပုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
