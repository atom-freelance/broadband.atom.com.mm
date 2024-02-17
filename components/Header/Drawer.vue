<script setup lang="ts">
const drawer = useHeaderDrawer()
</script>

<template>
	<aside
		@click="drawer.close"
		class="absolute inset-y-0 z-40 w-full bg-slate-900 bg-opacity-50 shadow"
		:class="{ hidden: !drawer.isOpen.value }"
	>
		<nav @click.stop="" class="h-full w-3/4 bg-white px-4 py-8">
			<div v-for="link in navbarLinks" class="py-2">
				<!-- Render Link if type is link -->
				<NuxtLink
					v-if="link.type === 'link'"
					:to="link.to"
					class="hover:text-interactive-accent-hover"
					exact-active-class="text-interactive-accent"
				>
					{{ link.title }}
				</NuxtLink>

				<!-- Render Menu if type is label -->
				<details v-if="link.type === 'label'" class="collapse rounded-none">
					<summary class="collapse-title min-h-[auto] p-0">
						{{ link.title }}
					</summary>

					<div v-for="subLinks in link.subLinks" class="collapse-content pt-4">
						<div v-for="subLink in subLinks" class="py-1">
							<!-- Render Link if type is link -->
							<NuxtLink
								v-if="subLink.type === 'link'"
								:to="subLink.to"
								class="hover:text-interactive-accent-hover"
								exact-active-class="text-interactive-accent"
							>
								{{ subLink.title }}
							</NuxtLink>

							<!-- Render Title if type is label -->
							<p v-if="subLink.type === 'label'" class="font-semibold">
								{{ subLink.title }}
							</p>
						</div>
					</div>
				</details>
			</div>
		</nav>
	</aside>
</template>
