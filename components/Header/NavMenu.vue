<template>
	<ul class="ml-20 hidden h-full space-x-8 lg:flex lg:items-center">
		<li
			v-for="link in navbarLinks"
			:class="[
				'h-full cursor-pointer text-body-large',
				'[&_article]:hover:block',
				'[&_span]:hover:border-interactive-accent-hover [&_span]:hover:text-interactive-accent-hover',
			]"
		>
			<!-- Render Text when type is label -->
			<span
				v-if="link.type === 'label'"
				:class="[
					'grid h-full place-items-center',
					'border-b-2 border-transparent',
					'hover:border-interactive-accent-hover hover:text-interactive-accent-hover',
				]"
			>
				{{ link.title }}
			</span>

			<!-- Render Link when type is link -->
			<NuxtLink
				v-if="link.type === 'link'"
				:to="link.to"
				exact-active-class="inline-block h-full w-full font-semibold text-interactive-accent-hover !border-interactive-accent-hover"
				:class="[
					'grid h-full place-items-center',
					'border-b-2 border-transparent',
					'hover:border-interactive-accent-hover hover:text-interactive-accent-hover',
				]"
			>
				{{ link.title }}
			</NuxtLink>

			<!-- Render Sub Menu if has subLinks -->
			<article
				v-if="!!link.subLinks?.length"
				class="absolute inset-x-0 top-24 z-10 hidden bg-white pb-4 pt-5 text-content-secondary shadow-md"
			>
				<nav class="container flex items-start gap-16 pl-[17rem]">
					<ul v-for="subLinks in link.subLinks" class="space-y-3">
						<li v-for="subLink in subLinks">
							<p
								v-if="subLink.type === 'label'"
								class="text-title-body font-semibold"
							>
								{{ subLink.title }}
							</p>
							<NuxtLink
								v-if="subLink.type === 'link'"
								:to="subLink.to"
								class="text-body-large hover:text-interactive-accent-hover"
								exact-active-class="text-interactive-accent-hover"
							>
								{{ subLink.title }}
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</article>
		</li>
	</ul>
</template>
