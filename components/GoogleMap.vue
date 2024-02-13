<script setup>
import { Loader } from '@googlemaps/js-api-loader'
const map = ref(null)

onMounted(() => {
	// if (map) return
	const loader = new Loader({
		apiKey: 'AIzaSyBA9q53rA7jzM2k_LhCx-NIEhIxQNQPbIo', // Replace with your Google Maps API key
		version: 'weekly',
		libraries: ['places'],
	})

	loader.importLibrary('maps').then(() => {
		map.value = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 16.777154610807415, lng: 96.1564764536864 },
			zoom: 17,
		})
	})
})
</script>

<template>
	<div id="map" class="h-full w-full"></div>
</template>
