export function useMenu() {
	const showMenu = ref(false)

	function show() {
		showMenu.value = true
	}

	function close() {
		showMenu.value = false
	}

	function toggle() {
		showMenu.value = !showMenu.value
	}

	return { showMenu, show, close, toggle }
}
