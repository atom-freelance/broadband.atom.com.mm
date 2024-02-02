<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const isLoggedIn = ref(true)

const showMenu = ref(false)

function close() {
	showMenu.value = false
}
</script>

<template>
	<header class="sticky top-0 z-20">
		<section class="h-8 bg-interactive-accent-hover text-body text-white">
			<nav class="container flex h-full items-center justify-between">
				<p>
					<span>Contact Us : </span>
					<a href="tel:+959780008080" class="link">+959 780 008 080</a>
				</p>

				<DropdownRoot class="dropdown-end">
					<DropdownTarget class="btn btn-ghost btn-xs flex items-center gap-1">
						<i
							class="fi fi-gb inline-block !size-5 overflow-hidden rounded-full border border-white !bg-cover"
						/>
						<span>EN</span>
						<Icon name="angle-down" size="1rem" />
					</DropdownTarget>

					<DropdownList class="text-content-secondary">
						<li>
							<a href="#en" class="">
								<i class="fi fi-gb" />
								<span>English</span>
							</a>
						</li>
						<li>
							<a href="#mm" class="">
								<i class="fi fi-mm" />
								<span>မြန်မာ</span>
							</a>
						</li>
					</DropdownList>
				</DropdownRoot>
			</nav>
		</section>

		<section class="h-16 bg-white">
			<nav class="container flex h-full items-center justify-between">
				<article class="flex h-full items-center">
					<NuxtLink to="/" class="inline-block h-4/5 w-40">
						<img src="/logo.png" class="inline-block h-full" />
					</NuxtLink>

					<HeaderNavMenu />
				</article>

				<!-- Guest user -->
				<article v-show="!isLoggedIn">
					<NuxtLink to="/login" class="btn btn-primary rounded-full">
						Login
					</NuxtLink>
				</article>

				<!-- After logged in -->
				<article class="dropdown dropdown-end" v-show="isLoggedIn">
					<button
						class="btn rounded-full bg-interactive-accent text-white hover:bg-interactive-accent-hover"
						@click="showMenu = true"
					>
						<Icon name="user" /> Hi, Aungmin
					</button>

					<section
						class="card dropdown-content card-compact z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow"
						v-show="showMenu"
						v-on-click-outside="close"
					>
						<div class="card-body items-start gap-5">
							<section>
								<h3 class="text-title-subsection font-bold">Aungmin Soe</h3>
								<span class="text-sm font-normal text-content-secondary"
									>Account ID: 5000198</span
								>
							</section>

							<SidebarList @click="close">
								<li>
									<SidebarItem
										to="/dashboard/profile"
										name="Profile"
										iconName="user-circle"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/subscription"
										name="Subscription"
										iconName="receipt-text"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/order"
										name="Order"
										iconName="truck"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/billing"
										name="Billing"
										iconName="dollar-circle"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/relocate"
										name="Relacate"
										iconName="home-activity"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/term-and-condition"
										name="T&C acceptance"
										iconName="badge-check"
									/>
								</li>
								<li>
									<SidebarItem
										to="/dashboard/mobile-bundle"
										name="Mobile bundle"
										iconName="mobile"
									/>
								</li>
							</SidebarList>

							<span class="divider m-0" />

							<button
								type="button"
								class="flex items-center gap-2 text-interactive-negative"
							>
								<Icon name="log-out" />
								<span
									class="duration-200 hover:font-bold hover:text-content-primary hover:ease-in-out"
									>Logout</span
								>
							</button>
						</div>
					</section>
				</article>
			</nav>
		</section>
	</header>
</template>
