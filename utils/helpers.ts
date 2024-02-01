export function snakeCase(str: string) {
	return str.trim().replaceAll(' ', '_').toLowerCase()
}
