<template>
	<div class="grid grid-cols-8 gap-8 py-3">
		<div class="col-span-5 h-[450px] w-full">
			<GoogleMap />
		</div>
		<div class="col-span-3 px-8">
			<p class="text-3xl font-semibold">Select your location</p>
			<form class="mt-8 flex flex-col gap-8">
				<label class="form-control w-full max-w-sm">
					<div class="label">
						<span class="label-text">
							State/Region <sup class="text-red-600">*</sup>
						</span>
					</div>
					<select class="select select-bordered select-sm lg:select-md">
						<option>Yangon</option>
						<option>Mandalay</option>
					</select>
				</label>

				<label class="form-control w-full max-w-sm">
					<div class="label">
						<span class="label-text">
							Township <sup class="text-red-600">*</sup>
						</span>
					</div>
					<select class="select select-bordered select-sm lg:select-md">
						<option>Thingangyun</option>
						<option>Kamayut</option>
					</select>
				</label>

				<NuxtLinkLocale
					to="/shop?check=1&available=1"
					class="btn w-36 rounded-full bg-interactive-accent px-6 py-3 text-base font-semibold text-white hover:bg-interactive-accent-hover max-md:self-center"
				>
					Check now
				</NuxtLinkLocale>
			</form>
		</div>
	</div>
</template>
