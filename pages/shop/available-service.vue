<template>
	<div
		class="container fixed left-0 right-0 top-16 flex h-[calc(95vh-10rem)] flex-col justify-center gap-10"
	>
		<div class="hero">
			<div class="hero-content text-center">
				<div class="relative">
					<h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
						Available service at <br />
						<span class="font-bold italic">Tarmwe</span> area!
					</h1>
					<NuxtLinkLocale
						to="/check-service-availability"
						class="w-46 btn mt-4 rounded-full border-secondary-content bg-white px-4 py-2 text-base text-secondary-content hover:bg-interactive-accent-hover hover:text-white max-md:self-center"
					>
						Change location
					</NuxtLinkLocale>
					<img
						src="~/assets/img/rocket-launch.svg"
						alt="rocket"
						class="absolute -right-20 top-20 h-16 w-16 max-sm:-right-10 max-sm:top-10 max-sm:h-11 max-sm:w-11"
					/>
				</div>
			</div>
		</div>
	</div>
	<!-- set height for fixed hero block -->
	<div class="h-[calc(85vh-10rem)]"></div>
</template>
