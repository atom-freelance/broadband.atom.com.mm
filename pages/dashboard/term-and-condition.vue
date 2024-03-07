<template>
	<DataTable
		:title="$t('t&c_acceptance.title')"
		:description="$t('t&c_acceptance.subtitle')"
	>
		<template #thead>
			<tr>
				<DataTableHeader iconName="calendar-empty-alt">
					{{ $t('t&c_acceptance.date') }}
				</DataTableHeader>
				<DataTableHeader iconName="menu-left">
					{{ $t('t&c_acceptance.t&c_name') }}
				</DataTableHeader>
				<DataTableHeader iconName="download-alt">
					{{ $t('t&c_acceptance.download') }}
				</DataTableHeader>
			</tr>
		</template>

		<template #tbody>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM အသုံးပြုသူများလိုက်နားရမည့် စည်းကမ်းချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM Broadband နေရာရွေ့ပြောင်းခြင်း သတ်မှတ်ချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM Broadband နေရာရွေ့ပြောင်းခြင်း သတ်မှတ်ချက်များ</td>
				<td class="underline">Download</td>
			</tr>
			<tr>
				<td>12 Dec, 2023</td>
				<td>ATOM Broadband နေရာရွေ့ပြောင်းခြင်း သတ်မှတ်ချက်များ</td>
				<td class="underline">Download</td>
			</tr>
		</template>

		<template #tfoot>
			<DataTableFooter />
		</template>
	</DataTable>
</template>
