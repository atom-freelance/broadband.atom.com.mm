<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const drawer = useHeaderDrawer()
const isLoggedIn = ref(true)
</script>

<template>
	<header class="sticky top-0 z-20">
		<section
			class="min-h-8 bg-interactive-accent-hover py-1 text-body text-white"
		>
			<nav class="container flex h-full items-center justify-between">
				<p class="flex flex-wrap gap-2">
					<span>{{ $t('common.contact_us') }} : </span>
					<a href="tel:+959780008080" class="link">+959 780 008 080</a>
				</p>

				<DropdownRoot class="dropdown-end" v-slot="{ isOpen, toggle }">
					<button
						class="btn btn-ghost btn-xs flex items-center gap-1"
						@click="toggle()"
					>
						<i
							class="fi inline-block !size-5 overflow-hidden rounded-full border border-white !bg-cover"
							:class="{
								'fi-gb': $i18n.locale === 'en',
								'fi-mm': $i18n.locale === 'mm',
							}"
						/>
						<span class="uppercase">{{ $i18n.locale }}</span>
						<Icon name="angle-down" size="1rem" />
					</button>

					<DropdownContent
						v-show="isOpen"
						class="min-w-[130px] py-4 text-content-secondary"
					>
						<ul class="flex flex-col items-stretch gap-2">
							<li class="px-4 py-2 hover:bg-gray-100">
								<NuxtLink :to="switchLocalePath('en')" class="flex gap-2">
									<i class="fi fi-gb" />
									<span>English</span>
								</NuxtLink>
							</li>
							<li class="px-4 py-2 hover:bg-gray-100">
								<NuxtLink :to="switchLocalePath('mm')" class="flex gap-2">
									<i class="fi fi-mm" />
									<span>မြန်မာ</span>
								</NuxtLink>
							</li>
						</ul>
					</DropdownContent>
				</DropdownRoot>
			</nav>
		</section>

		<section class="h-16 bg-white">
			<nav class="container flex h-full items-center justify-between">
				<article class="flex h-full items-center gap-4">
					<button @click="drawer.open" class="lg:hidden">
						<Icon name="menu" />
					</button>

					<NuxtLinkLocale to="/" class="inline-block h-3/5">
						<img src="/broadband_logo.jpeg" class="inline-block h-full" />
					</NuxtLinkLocale>

					<HeaderNavMenu />
				</article>

				<!-- Guest user -->
				<article v-show="!isLoggedIn">
					<NuxtLinkLocale to="/login" class="btn btn-primary rounded-full">
						Login
					</NuxtLinkLocale>
				</article>

				<!-- After logged in -->
				<DropdownRoot v-show="isLoggedIn" v-slot="{ isOpen, close, toggle }">
					<button
						class="btn btn-primary size-12 rounded-full lg:size-[unset]"
						@click="toggle()"
					>
						<span class="lg:hidden">AMS</span>
						<Icon name="user" class="hidden lg:block" />
						<span class="hidden lg:block">Hi, Aungmin</span>
					</button>

					<DropdownContent v-show="isOpen">
						<div class="card-body min-w-[230px] items-start gap-5">
							<section>
								<h3 class="text-title-subsection font-bold">Aungmin Soe</h3>
								<span class="text-sm font-normal text-content-secondary">
									Account ID: 5000198
								</span>
							</section>

							<SidebarList @click="close()">
								<li>
									<SidebarItem
										to="/dashboard/profile"
										:name="$t('common.menu.profile')"
										iconName="user-circle"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/subscription"
										:name="$t('common.menu.subscription')"
										iconName="receipt-text"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/order"
										:name="$t('common.menu.order')"
										iconName="truck"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/billing"
										:name="$t('common.menu.billing')"
										iconName="dollar-circle"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/relocate"
										:name="$t('common.menu.relocate')"
										iconName="home-activity"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/term-and-condition"
										:name="$t('common.menu.t&c_acceptance')"
										iconName="badge-check"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/mobile-bundle"
										:name="$t('common.menu.mobile_bundle')"
										iconName="mobile"
									/>
								</li>
							</SidebarList>

							<span class="divider m-0" />

							<button
								type="button"
								class="flex items-center gap-2 text-interactive-negative"
							>
								<SidebarItem to="/login" name="Logout" iconName="log-out" />
							</button>
						</div>
					</DropdownContent>
				</DropdownRoot>
			</nav>
		</section>
	</header>
</template>
