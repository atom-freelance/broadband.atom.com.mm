<script setup lang="ts">
const { showModal, closeModal } = useModal()
</script>

<template>
	<main class="pb-20">
		<!-- Hero Section -->
		<section class="hero-section">
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

				<button @click="showModal('test-modal')">Show Modal</button>
				<ModalRoot id="test-modal">
					Hello
					<ModalBackdrop enable-close>
						<button>close</button>
					</ModalBackdrop>
				</ModalRoot>
			</article>
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
			class="container mt-40 grid grid-cols-1 gap-10 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:px-40"
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
		<section class="container">
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
				class="container mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
			>
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
			</article>
		</section>
	</main>
</template>

<style scoped>
.hero-section {
	height: calc(100svh - 6rem);
	background: url(/hero_image.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position-y: 100%;
}

/* screen size: lg */
@media (min-width: 1024px) {
	.hero-section {
		background-size: 100% auto;
		background-position-y: 80%;
	}
}
</style>
