<template>
	<DataTable :title="$t('order.title')" :description="$t('order.subtitle')">
		<template #thead>
			<tr>
				<DataTableHeader iconName="hashtag">
					{{ $t('order.order_id') }}
				</DataTableHeader>
				<DataTableHeader iconName="menu-left">
					{{ $t('order.product_name') }}
				</DataTableHeader>
				<DataTableHeader iconName="map">
					{{ $t('order.address') }}
				</DataTableHeader>
				<DataTableHeader iconName="dollar-circle">
					{{ $t('order.price') }}
				</DataTableHeader>
				<DataTableHeader iconName="papers">
					{{ $t('order.status') }}
				</DataTableHeader>
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
					<DashboardStatus
						class="bg-categories-entertainment"
						name="Installed"
					/>
				</td>
			</tr>
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
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td>Sporer, Sipes and Rogahn</td>
				<td>Poland</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Delivered" />
				</td>
			</tr>
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
					<DashboardStatus class="bg-categories-bills" name="Todo" />
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
				<td>Reid Semiras</td>
				<td>Teacher</td>
				<td>Sporer, Sipes and Rogahn</td>
				<td>Poland</td>
				<td>
					<DashboardStatus class="bg-categories-cash" name="Delivered" />
				</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
