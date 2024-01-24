export function useModal() {
	function showModal(id: string) {
		const el = document.getElementById(id) as HTMLDialogElement
		el.showModal()
	}

	function closeModal(id: string) {
		const el = document.getElementById(id) as HTMLDialogElement
		el.showModal()
	}

	return { showModal, closeModal }
}
