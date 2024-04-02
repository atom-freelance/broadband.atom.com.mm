<template>
	<div
		class="container fixed left-0 right-0 top-16 flex h-[calc(95vh-10rem)] flex-col justify-center gap-10"
	>
		<div class="hero">
			<div class="hero-content text-center">
				<div class="relative">
					<h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
						Let’s find <span class="font-bold italic">the best plans</span>
						<br />
						and <span class="font-bold italic">services</span> now!
					</h1>
					<p class="py-6 text-base max-sm:text-sm">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						<br />
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<img
						src="~/assets/img/rocket-launch.svg"
						alt="rocket"
						class="absolute -right-20 top-20 h-16 w-16 max-sm:-right-10 max-sm:top-10 max-sm:h-11 max-sm:w-11"
					/>
				</div>
			</div>
		</div>
		<!-- service btn group -->
		<ShopServiceItems />
	</div>
</template>
