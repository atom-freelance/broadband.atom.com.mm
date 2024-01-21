<script setup lang="ts"></script>

<template>
	<tr>
		<th colspan="100%">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-2">
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
				<div class="flex items-center space-x-6 hover:cursor-pointer">
					<span>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.5599 8.45495C5.499 8.51302 5.45052 8.58284 5.41739 8.66019C5.38427 8.73754 5.36719 8.82081 5.36719 8.90495C5.36719 8.9891 5.38427 9.07237 5.41739 9.14972C5.45052 9.22707 5.499 9.29689 5.5599 9.35495L11.9882 15.7832L12.8882 14.8832L6.9099 8.90495L12.8882 2.92595L11.9881 2.02595L5.5599 8.45495Z"
								fill="#6A6C6A"
							/>
						</svg>
					</span>
					<div class="flex space-x-8">
						<span class="text-primary">1</span>
						<span>2</span>
						<span>...</span>
						<span>99</span>
						<span>100</span>
					</div>
					<span>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.4401 8.45495C12.501 8.51302 12.5495 8.58284 12.5826 8.66019C12.6157 8.73754 12.6328 8.82081 12.6328 8.90495C12.6328 8.9891 12.6157 9.07237 12.5826 9.14972C12.5495 9.22707 12.501 9.29689 12.4401 9.35495L6.01185 15.7832L5.11185 14.8832L11.0901 8.90495L5.11185 2.92595L6.01185 2.02595L12.4401 8.45495Z"
								fill="#6A6C6A"
							/>
						</svg>
					</span>
				</div>
			</div>
		</th>
	</tr>
</template>
