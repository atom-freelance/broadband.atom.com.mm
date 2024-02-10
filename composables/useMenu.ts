export function useMenu() {
	const showMenu = ref(false)

	function show() {
		showMenu.value = true
	}

	function close() {
		showMenu.value = false
	}

	return { showMenu, show, close }
}
