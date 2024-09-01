function createDefaultValuesRHF<
	T extends Record<string, unknown>,
	V extends { [K in keyof T]: unknown },
>(_schema: T, values: V): V {
	return values
}

export { createDefaultValuesRHF }
