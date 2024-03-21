<script setup lang="ts">
const { showModal } = useModal()

const plan = reactive({
	title: 'Up to 10Mbps',
	power: 'Starter Kit',
	tax: '',
})
</script>

<template>
	<main class="pb-40">
		<!-- Hero Section -->
		<section class="container">
			<article class="flex flex-col items-center">
				<h1
					class="mt-[40%] flex flex-col items-stretch text-4xl font-medium md:mt-[30%] md:text-5xl lg:mt-14 lg:text-center lg:text-title-hero 2xl:mt-20"
				>
					<i class="font-extrabold">{{ $t('home.slogan.sec.1') }}</i>
					<span>{{ $t('home.slogan.sec.2') }}</span>
				</h1>

				<h4 class="lg:mt-15 mt-10 text-title-body font-medium">
					The best broadband you should choose
				</h4>
				<NuxtLinkLocale
					to="#"
					class="mt-2 flex items-center gap-1 text-title-body font-medium hover:underline"
				>
					<span>Let's start contact</span>
					<Icon name="arrow-right" />
				</NuxtLinkLocale>
			</article>

			<figure class="hero-figure mt-24 lg:mt-48">
				<img src="/hero_image.jpeg" class="aspect-video" />
			</figure>
		</section>

		<!-- Product Explain -->
		<section class="container mt-20 lg:mt-40 lg:px-40">
			<div class="relative flex items-center gap-4">
				<h2 class="flex flex-col text-4xl lg:text-5xl">
					<span>{{ $t('home.about.title.sec.1') }}</span>
					<b>{{ $t('home.about.title.sec.2') }}</b>
				</h2>

				<img
					src="/curve_down_arrow.png"
					class="absolute left-[460px] top-10 hidden h-20 lg:block"
				/>
			</div>

			<article
				class="mt-10 grid grid-cols-1 gap-4 text-title-body lg:grid-cols-4"
			>
				<b class="lg:col-span-1">{{ $t('home.about.hint') }}</b>

				<p class="lg:col-span-3">{{ $t('home.about.paragraph') }}</p>
			</article>
		</section>

		<!-- Features -->
		<section
			class="container sticky top-0 grid grid-cols-1 gap-10 bg-white py-6 pt-40 md:grid-cols-2 lg:grid-cols-3 2xl:px-40"
		>
			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="dollar-circle"
				:title="$t('home.features.install_fee.title')"
				:sub-title="$t('home.features.install_fee.desc')"
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="like"
				:title="$t('home.features.flexible_plan.title')"
				:sub-title="$t('home.features.flexible_plan.desc')"
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="rocket-launch"
				:title="$t('home.features.high_speed.title')"
				:sub-title="$t('home.features.high_speed.desc')"
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="heart"
				:title="$t('home.features.support.title')"
				:sub-title="$t('home.features.support.desc')"
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="wifi"
				:title="$t('home.features.unlimited_data.title')"
				:sub-title="$t('home.features.unlimited_data.desc')"
			/>

			<FeatureCard
				class="hover:bg-interactive-accent"
				icon="sparkle"
				:title="$t('home.features.quality.title')"
				:sub-title="$t('home.features.quality.desc')"
			/>
		</section>

		<!-- Plans -->
		<section class="container sticky bg-white pt-40">
			<article class="flex flex-col items-center space-y-6 text-center">
				<h2 class="flex gap-3 text-4xl font-medium lg:text-5xl">
					<span>{{ $t('home.best_selling.title.sec.1') }}</span>
					<i class="font-semibold">
						{{ $t('home.best_selling.title.sec.2') }}
					</i>
					<span>{{ $t('home.best_selling.title.sec.3') }}</span>
				</h2>

				<NuxtLinkLocale
					to="/shop"
					class="btn btn-ghost btn-sm text-body-large font-semibold text-interactive-accent"
				>
					{{ $t('home.best_selling.explore_btn') }}
				</NuxtLinkLocale>
			</article>

			<article
				class="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
			>
				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="/wireless_battery_9.jpeg"
						title="Home plan"
						sub-title="Power 40 Up to 40Mbps"
					>
						<!-- <div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">45,000 / 30 days</h6>

							<button class="btn btn-sm rounded-full">Fiber</button>
						</div> -->
					</ItemCard>
				</ModalAction>

				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="/wireless_battery_10.jpeg"
						title="Starter kit"
						sub-title="Up to 10Mbps"
					>
						<!-- <div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">115,00 / 90 days</h6>

							<button class="btn btn-sm rounded-full">Wireless</button>
						</div> -->
					</ItemCard>
				</ModalAction>

				<ModalAction @click="() => showModal('shop-plan-id')">
					<ItemCard
						img-url="/wireless_battery_11.jpeg"
						title="Starter"
						sub-title="Power Flexi Net"
					>
						<!-- <div class="flex items-center gap-4 font-semibold">
							<h6 class="text-title-body">25,000 / 30 days</h6>

							<button class="btn btn-sm rounded-full">Wireless</button>
						</div> -->
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
					src="/music_listen.jpeg"
					class="h-[450px] w-full object-cover object-center"
				/>

				<div class="mt-4 px-4">
					<h5 class="text-title-screen font-semibold">
						{{ $t('home.scenarios.1.title') }}
					</h5>
					<h6 class="mt-2 text-title-body font-semibold">
						{{ $t('home.scenarios.1.desc') }}
					</h6>
				</div>
			</figure>

			<figure class="md:col-span-2 lg:col-span-3">
				<img
					src="/game_play.jpeg"
					class="h-[450px] w-full object-cover object-center"
				/>

				<div class="mt-4 px-4">
					<h5 class="text-title-screen font-semibold">
						{{ $t('home.scenarios.2.title') }}
					</h5>
					<h6 class="mt-2 text-title-body font-semibold">
						{{ $t('home.scenarios.2.desc') }}
					</h6>
				</div>
			</figure>

			<figure class="md:col-span-1 lg:col-span-2">
				<img
					src="/movie_date.jpeg"
					class="h-[450px] w-full object-cover object-center"
				/>

				<div class="mt-4 px-4">
					<h5 class="text-title-screen font-semibold">
						{{ $t('home.scenarios.3.title') }}
					</h5>
					<h6 class="mt-2 text-title-body font-semibold">
						{{ $t('home.scenarios.3.desc') }}
					</h6>
				</div>
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
		<section class="container sticky top-0 bg-white py-40">
			<YoutubePlayer
				src="https://www.youtube.com/embed/EqzbiXFPaAs?si=j04iNMEQUrYx4TBL&amp;controls=0"
				autoplay
			/>
		</section>

		<!-- Articles -->
		<section class="container sticky bg-white pt-40">
			<div class="flex items-center justify-between">
				<h3 class="text-5xl font-medium">
					{{ $t('home.useful.article.title') }}
				</h3>
			</div>

			<ArticlesDisplay />
		</section>

		<section class="sticky bg-white pt-40">
			<CheckServiceAvailability />
		</section>
	</main>

	<ModalRoot id="shop-plan-id" class="max-w-[800px]">
		<ShopPlanDetail :plan="plan" />
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
