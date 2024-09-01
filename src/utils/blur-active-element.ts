function blurActiveElement() {
	if (typeof window === 'undefined') return

	const activeElement = document.activeElement

	if (!(activeElement instanceof HTMLElement)) return

	activeElement.blur()

	setTimeout(() => {
		activeElement.focus()
	}, 1000)
}

export { blurActiveElement }
