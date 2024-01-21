<script setup lang="ts">
const scrollPos = useWindowScroll({ behavior: 'smooth' })

function scrollToTop() {
	scrollPos.y.value = 0
}
</script>

<template>
	<button class="btn btn-ghost px-0" @click="scrollToTop">
		<span class="text-title-section font-semibold">Back to top</span>
		<Icon name="arrow-up" />
	</button>
</template>
