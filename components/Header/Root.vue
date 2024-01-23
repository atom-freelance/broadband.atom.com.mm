<template>
	<header class="relative">
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

		<section class="h-16">
			<nav class="container flex h-full items-center justify-between">
				<article class="flex h-full items-center">
					<NuxtLink to="/" class="inline-block h-4/5 w-40">
						<img src="/logo.png" class="inline-block h-full" />
					</NuxtLink>

					<!-- TODO: Navbar -->
				</article>

				<article>
					<NuxtLink to="/" class="btn btn-primary rounded-full">
						Login
					</NuxtLink>
				</article>
			</nav>
		</section>
	</header>
</template>
