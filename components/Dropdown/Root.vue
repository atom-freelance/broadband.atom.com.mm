<script setup lang="ts">
const [isOpen, toggle] = useToggle()

function open() {
	isOpen.value = true
}

function close() {
	isOpen.value = false
}

function handleDropdownFocusLoss(event: any) {
	const { relatedTarget, currentTarget } = event

	// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
	if (
		relatedTarget instanceof HTMLElement &&
		currentTarget?.contains(relatedTarget)
	)
		return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)

	isOpen.value = false
}
</script>

<template>
	<div class="relative flex flex-col" @focusout="handleDropdownFocusLoss">
		<slot v-bind="{ isOpen, open, close, toggle }" />
	</div>
</template>
