<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const modules = [Pagination, Autoplay]

type Quote = {
	subNote: string
	description: string
}

const props = defineProps({
	quotes: { type: Array as PropType<Quote[]>, required: true },
})
</script>

<style>
.swiper-pagination {
	text-align: left;
}
</style>

<template>
	<Swiper
		:slides-per-view="1"
		:space-between="5"
		:modules="modules"
		:pagination="{ clickable: true }"
		:autoplay="{ delay: 3000, disableOnInteraction: false }"
		class="size-full"
	>
		<SwiperSlide v-for="quote in props.quotes" class="size-full">
			<article class="flex size-full flex-col">
				<p
					class="text-right text-body-large font-semibold text-content-tertiary"
				>
					{{ quote.subNote }}
				</p>

				<p
					class="py-[15%] lg:pt-[35%] flex flex-col gap-6 text-title-section font-medium text-content-tertiary"
				>
					<img src="/quote.svg" class="size-6" />
					<span>{{ quote.description }}</span>
				</p>
			</article>
		</SwiperSlide>
	</Swiper>
</template>
