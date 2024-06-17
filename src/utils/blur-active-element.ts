function blurActiveElement() {
  if (
    document &&
    document.activeElement &&
    'blur' in document.activeElement &&
    typeof document.activeElement.blur === 'function'
  ) {
    document.activeElement.blur()
  }
}

export { blurActiveElement }
