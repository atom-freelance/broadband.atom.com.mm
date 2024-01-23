<script setup lang="ts">
definePageMeta({
	layout: 'login',
})
</script>

<template>
	<div class="container p-20">
		<DataTable title="Billing" description="Welcome to billing.">
			<template #thead>
				<tr>
					<DataTableHeader iconName="euro"> Name </DataTableHeader>
					<DataTableHeader iconName="activity-circle">Job</DataTableHeader>
					<DataTableHeader iconName="activity-circle">Company</DataTableHeader>
					<DataTableHeader iconName="activity-circle">Location</DataTableHeader>
					<DataTableHeader iconName="activity-circle">
						Last Login
					</DataTableHeader>
					<DataTableHeader iconName="activity-circle">
						Favorite Color
					</DataTableHeader>
				</tr>
			</template>

			<template #tbody>
				<tr>
					<td>Reid Semiras</td>
					<td>Teacher</td>
					<td>Sporer, Sipes and Rogahn</td>
					<td>Poland</td>
					<td>7/30/2020</td>
					<td>Green</td>
				</tr>
				<tr>
					<td>Alec Lethby</td>
					<td>Teacher</td>
					<td>Reichel, Glover and Hamill</td>
					<td>China</td>
					<td>2/28/2021</td>
					<td>Khaki</td>
				</tr>
			</template>

			<template #tfoot>
				<DataTableFooter />
			</template>
		</DataTable>
	</div>
</template>
