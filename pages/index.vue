<template>
	<main>
		<!-- Hero Section -->
		<section class="hero-section">
			<article class="flex flex-col items-center">
				<h1
					class="mt-[40%] flex flex-col items-center text-4xl font-medium md:text-5xl lg:mt-20 lg:text-7xl"
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

@screen lg {
	.hero-section {
		background-size: unset;
		background-position-y: 80%;
	}
}
</style>
