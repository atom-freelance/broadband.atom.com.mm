<template>
	<div
		class="z-10 h-screen bg-contain bg-center bg-no-repeat max-md:bg-cover max-sm:h-[calc(100vh-10rem)]"
		style="background-image: url('/world-map.png')"
	>
		<div class="flex h-full flex-col justify-center gap-36">
			<div class="container">
				<h1
					class="text-4xl font-medium max-sm:text-center md:text-6xl lg:text-title-hero"
				>
					Let’s take a look at the <br class="max-sm:hidden" />
					<span class="font-bold italic">services available</span> at your
					<br />
					location.
				</h1>
				<div class="flex flex-row-reverse gap-4">
					<div class="flex w-1/2 flex-col justify-between max-sm:w-full">
						<p
							class="w-5/6 py-6 text-left text-base max-sm:w-full max-sm:text-center max-sm:text-sm"
						>
							As we are trying to provide the best experience to our customers,
							we need to check service availability at your address where you
							want to use the service.
						</p>
						<button
							class="btn w-64 rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
						>
							Check service available
						</button>
					</div>
					<div class="pb-4 max-sm:hidden max-sm:text-center">
						<img src="~/assets/img/arrow-down-curve.png" alt="arrow-down" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
