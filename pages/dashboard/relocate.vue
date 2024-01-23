<template>
	<DataTable
		title="Relocate"
		description="Manage and your personal information"
	>
		<template #thead>
			<tr>
				<DataTableHeader iconName="hard-drive"
					>CPE Device(IMEI)</DataTableHeader
				>
				<DataTableHeader iconName="route"> Relocate address</DataTableHeader>
				<DataTableHeader iconName="settings">Action</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>868465034183737</td>
				<td>
					<div class="flex items-center justify-start gap-10">
						<span>Botahtaung, Yangon</span>
						<div class="flex items-center justify-start gap-4">
							<Icon name="arrow-right-small" />
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
							<Icon name="arrow-right-small" />
						</div>
					</div>
				</td>
				<td>
					<button
						type="button"
						class="btn btn-xs rounded-2xl bg-interactive-accent text-white lg:btn-sm hover:bg-interactive-accent-hover"
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
</template>
