<script setup lang="ts"></script>

<template>
	<div class="lg:flex lg:items-center lg:justify-between">
		<div class="hidden items-center space-x-2 lg:flex">
			<span class="text-gray-400">Rows Per Page</span>
			<select
				class="select select-xs max-w-xs border-0 border-none bg-gray-100 font-extrabold"
			>
				<option selected>10</option>
				<option>20</option>
				<option>30</option>
				<option>50</option>
				<option>100</option>
			</select>
		</div>

		<div
			class="flex items-center justify-between space-x-6 hover:cursor-pointer"
		>
			<span>
				<Icon name="angle-left" size="1rem" />
			</span>
			<div class="flex space-x-8">
				<span class="text-primary">1</span>
				<span>2</span>
				<span>...</span>
				<span>99</span>
				<span>100</span>
			</div>
			<span>
				<Icon name="angle-right" size="1rem" />
			</span>
		</div>
	</div>
</template>
