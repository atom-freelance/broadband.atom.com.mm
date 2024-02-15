<script setup lang="ts">
const { showModal } = useModal()
</script>

<template>
	<main class="pb-40">
		<!-- Hero Section -->
		<section class="container">
			<article class="flex flex-col items-center">
				<h1
					class="mt-[40%] flex flex-col items-center text-4xl font-medium md:mt-[30%] md:text-5xl lg:mt-14 lg:text-title-hero 2xl:mt-20"
				>
					<span>The most</span>
					<i class="font-extrabold">reliable high-speed</i>
					<span>broadband</span>
				</h1>

				<h4 class="lg:mt-15 mt-10 text-title-body font-medium">
					The best broadband you should choose
				</h4>
				<NuxtLink
					to="#"
					class="mt-2 flex items-center gap-1 text-title-body font-medium text-primary hover:underline"
				>
					<span>Let's start contact</span>
					<Icon name="arrow-right" />
				</NuxtLink>
			</article>

			<figure class="hero-figure mt-48">
				<img src="/hero_image.jpeg" class="aspect-video" />
			</figure>
		</section>

		<!-- Product Explain -->
		<section class="container mt-20 lg:mt-40 lg:px-40">
			<div class="relative flex items-center gap-4">
				<h2 class="flex flex-col text-4xl lg:text-5xl">
					<span>Do you know about</span>
					<span><b>ATOM</b> Broadband?</span>
				</h2>

				<img
					src="/curve_down_arrow.png"
					class="absolute left-[460px] top-10 hidden h-20 lg:block"
				/>
			</div>

			<article
				class="mt-10 grid grid-cols-1 gap-4 text-title-body lg:grid-cols-4"
			>
				<b class="lg:col-span-1">Let me explain</b>

				<p class="lg:col-span-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					voluptas porro quae illum quam, dolorem vero, molestias autem
					reprehenderit eveniet, animi officiis voluptate deserunt! Molestias ea
					vitae id fugit voluptate. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Sequi saepe suscipit sunt aliquid ipsa ad, dolore
					fugiat inventore ipsam ducimus maiores quas illo veritatis porro
					ipsum, velit, sint nostrum totam!
				</p>
			</article>
		</section>

		<!-- Features -->
		<section
			class="container sticky top-0 grid grid-cols-1 gap-10 bg-white py-6 pt-40 md:grid-cols-2 lg:grid-cols-3 2xl:px-40"
		>
			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="dollar-circle"
				title="Free installation fee"
				sub-title="Zero installation costs enjoy our offer."
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="like"
				title="Flexible plan"
				sub-title="Many plans that are suitable for you."
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="rocket-launch"
				title="High speed broadband"
				sub-title="Fast broadband for seamless connection."
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="heart"
				title="Customer support"
				sub-title="We care about our customer 24/7."
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="wifi"
				title="Unlimited data"
				sub-title="Endless data for limitless connectivity."
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="sparkle"
				title="Prioritize quality"
				sub-title="Top-notch quality is our priority."
			/>
		</section>

		<!-- Plans -->
		<section class="container sticky bg-white pt-40">
			<article class="flex flex-col items-center space-y-6 text-center">
				<h2 class="text-5xl font-medium">
					The <i class="font-bold">best selling</i> plan
				</h2>

				<p class="max-w-[700px] text-body-large">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					labore facilis praesentium aut unde quaerat saepe quibusdam, sequi
					tempora error voluptate, tempore iste reprehenderit aliquid? Officia
					iure accusantium voluptatibus tempora?
				</p>

				<NuxtLink
					to="#"
					class="btn btn-ghost btn-sm text-body-large font-semibold text-interactive-accent"
				>
					Explore plan
				</NuxtLink>
			</article>

			<article
				class="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
			>
				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Home plan"
						sub-title="Power 40 Up to 40Mbps"
					>
						<div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">45,000 / 30 days</h6>

							<button class="btn btn-sm rounded-full">Fiber</button>
						</div>
					</ItemCard>
				</ModalAction>

				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Starter kit"
						sub-title="Up to 10Mbps"
					>
						<div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">115,00 / 90 days</h6>

							<button class="btn btn-sm rounded-full">Wireless</button>
						</div>
					</ItemCard>
				</ModalAction>

				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Starter"
						sub-title="Power Flexi Net"
					>
						<div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">25,000 / 30 days</h6>

							<button class="btn btn-sm rounded-full">Wireless</button>
						</div>
					</ItemCard>
				</ModalAction>
			</article>
		</section>

		<!-- Scenarios -->
		<section
			class="sticky grid grid-cols-1 gap-20 bg-white pt-40 md:container md:grid-cols-5 md:gap-4 lg:grid-cols-9"
		>
			<figure class="md:col-span-2 lg:col-span-4">
				<img
					src="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="h-[400px] w-full object-cover object-center"
				/>
				<h5 class="mt-4 text-title-screen font-semibold">Listening music</h5>
				<h6 class="mt-2 text-title-body font-semibold">
					The smoothest internet
				</h6>
			</figure>

			<figure class="md:col-span-2 lg:col-span-3">
				<img
					src="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="h-[400px] w-full object-cover object-center"
				/>
				<h5 class="mt-4 text-title-screen font-semibold">Playing game</h5>
				<h6 class="mt-2 text-title-body font-semibold">The fastest internet</h6>
			</figure>

			<figure class="md:col-span-1 lg:col-span-2">
				<img
					src="https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="h-[400px] w-full object-cover object-center"
				/>
				<h5 class="mt-4 text-title-screen font-semibold">Movie date</h5>
				<h6 class="mt-2 text-title-body font-semibold">Love and Internet</h6>
			</figure>
		</section>

		<!-- Quotes -->
		<section
			class="container sticky grid grid-cols-1 bg-white pt-40 lg:grid-cols-2"
		>
			<article class="lg:justify-self-end lg:py-10 lg:pl-10">
				<div class="text-3xl font-medium lg:pr-10 lg:text-5xl">
					<h3>Empowering</h3>
					<h3>Connections, Enriching</h3>
					<h3>Lives, Your Broadband,</h3>
					<div class="flex items-center gap-6">
						<h3>Your World.</h3>
						<img src="/squiggly_line.png" class="w-2/5" />
					</div>
				</div>

				<img
					src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="aspect-[3/2] h-[350px] w-full object-cover object-center"
				/>
			</article>

			<article class="bg-flag-gray px-5 py-10 lg:pl-20 lg:pr-10">
				<HomeQuoteCarousel
					:quotes="[
						{
							subNote: 'From 2010',
							description:
								'Surf the Digital Waves of Connectivity: Elevate Your Experience with Lightning-Fast, Always-On Broadband, Where Every Click Connects You to Boundless Possibilities.',
						},
						{
							subNote: 'From 2014',
							description:
								'Surf the Digital Waves of Connectivity: Elevate Your Experience with Lightning-Fast, Always-On Broadband, Where Every Click Connects You to Boundless Possibilities.',
						},
						{
							subNote: 'From 2018',
							description:
								'Surf the Digital Waves of Connectivity: Elevate Your Experience with Lightning-Fast, Always-On Broadband, Where Every Click Connects You to Boundless Possibilities.',
						},
					]"
				/>
			</article>
		</section>

		<!-- Video -->
		<section class="container sticky top-0 bg-white pt-40">
			<YoutubePlayer
				src="https://www.youtube.com/embed/EqzbiXFPaAs?si=j04iNMEQUrYx4TBL&amp;controls=0"
				autoplay
			/>
		</section>

		<!-- Articles -->
		<section class="container sticky bg-white pt-40">
			<div class="flex items-center justify-between">
				<h3 class="text-5xl font-medium">Useful articles</h3>
				<!-- <div>1 - 12</div> -->
			</div>

			<div class="mt-10 flex w-full items-start overflow-auto">
				<article class="w-3/4 flex-none">
					<h4 class="mb-4 text-4xl">
						How does the broadband service compare in terms of speed,
						reliability, and coverage in your area?
					</h4>

					<div
						class="flex items-center gap-4 text-body-large font-semibold text-content-tertiary"
					>
						<p>16 Nov 2023 (Thursday)</p>
						<i class="inline-block size-2 rounded-full bg-content-tertiary" />
						<p>10 mins read</p>
					</div>

					<button class="btn btn-primary mt-8 rounded-full">
						Read article
					</button>
				</article>

				<article class="w-3/4 flex-none">
					<h4 class="mb-4 text-4xl">
						How does the broadband service compare in terms of speed,
						reliability, and coverage in your area?
					</h4>

					<div
						class="flex items-center gap-4 text-body-large font-semibold text-content-tertiary"
					>
						<p>16 Nov 2023 (Thursday)</p>
						<i class="inline-block size-2 rounded-full bg-content-tertiary" />
						<p>10 mins read</p>
					</div>

					<button class="btn btn-primary mt-8 rounded-full">
						Read article
					</button>
				</article>
			</div>
		</section>

		<section class="sticky bg-white pt-40">
			<ShopServiceAvailable />
		</section>
	</main>
	<ModalRoot id="shop-plan-id">
		<ShopPlanDetail />
	</ModalRoot>
</template>

<style scoped>
.hero-figure {
	position: relative;
}

.hero-figure::before {
	position: absolute;
	top: -50px;
	content: '';
	width: 100%;
	height: 100px;
	border-radius: 99999rem;
	background: radial-gradient(
		50% 50% at 50% 50%,
		#2449fb 0%,
		rgba(36, 73, 251, 0) 100%
	);
	filter: blur(40px);
}
</style>
