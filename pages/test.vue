<script setup lang="ts">
definePageMeta({
	layout: 'login',
})

const { showModal } = useModal()

onMounted(() => showModal('success'))
</script>

<template>
	<ModalRoot id="success">
		<div class="flex flex-col items-center justify-center gap-6 py-14">
			<Icon name="check-circle" size="72px" class="text-flag-green" />

			<h3 class="text-title-body font-semibold">Thank You</h3>

			<span>Your purchase has been successfully completed.</span>

			<DashboardActionButton
				btnText="OK"
				class="inline-block !h-fit rounded-full bg-interactive-accent !px-12 py-3 text-white hover:bg-interactive-accent-hover"
			/>
		</div>
	</ModalRoot>
	<!-- <div class="container p-20">
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
	</div> -->
</template>
