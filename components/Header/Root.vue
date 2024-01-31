<script setup lang="ts">
const isLoggedIn = ref(true)
</script>

<template>
	<header class="sticky top-0 z-10">
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
				<details class="dropdown dropdown-end" v-show="isLoggedIn">
					<summary class="btn btn-primary rounded-full">
						<Icon name="user" /> Hi, Aungmin
					</summary>

					<section
						class="card dropdown-content card-compact z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<div class="card-body items-start gap-5">
							<section>
								<h3 class="text-title-subsection font-bold">Aungmin Soe</h3>
								<span class="text-sm font-normal">Account ID: 5000198</span>
							</section>

							<ul class="flex flex-col gap-4">
								<li>
									<NuxtLink
										to="/dashboard/profile"
										class="flex items-center gap-2"
									>
										<Icon name="user-circle" />
										Profile
									</NuxtLink>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/subscription"
										class="flex items-center gap-2"
									>
										<Icon name="receipt-text" />
										Subscription
									</NuxtLink>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/order"
										class="flex items-center gap-2"
									>
										<Icon name="truck" />Order</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/billing"
										class="flex items-center gap-2"
									>
										<Icon name="dollar-circle" /> Billing
									</NuxtLink>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/relocate"
										class="flex items-center gap-2"
									>
										<Icon name="home-activity" />Relacate</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/term-and-condition"
										class="flex items-center gap-2"
									>
										<Icon name="badge-check" />T&C acceptance</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										to="/dashboard/mobile-bundle"
										class="flex items-center gap-2"
									>
										<Icon name="mobile" />Mobile bundle</NuxtLink
									>
								</li>
							</ul>

							<span class="divider m-0" />

							<button
								type="button"
								class="flex items-center gap-2 text-interactive-negative hover:text-interactive-negative-hover"
							>
								<Icon name="log-out" />Logout
							</button>
						</div>
					</section>
				</details>
			</nav>
		</section>
	</header>
</template>
