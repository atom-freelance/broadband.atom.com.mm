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
			<div v-for="link in navbarLinks">
				<NuxtLink v-if="link.type === 'link'" :to="link.to">
					{{ link.title }}
				</NuxtLink>

				<details v-if="link.type === 'label'">
					<summary>
						{{ link.title }}
					</summary>

					<div v-for="subLinks in link.subLinks">
						<div v-for="subLink in subLinks">
							<NuxtLink v-if="subLink.type === 'link'" :to="subLink.to">
								{{ subLink.title }}
							</NuxtLink>

							<p v-if="subLink.type === 'label'">{{ subLink.title }}</p>
						</div>
					</div>
				</details>
			</div>
		</nav>
	</aside>
</template>
