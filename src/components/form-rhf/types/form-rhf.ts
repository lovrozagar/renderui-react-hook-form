import type { Form } from '@renderui/core'
import type { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormRHFProps<T extends FieldValues> = Omit<
	React.ComponentPropsWithRef<typeof Form>,
	'onSubmit'
> & {
	form: UseFormReturn<T>
	onSubmit: SubmitHandler<T>
	onInvalidSubmit?: SubmitErrorHandler<T>
	/* useful to guard against holding enter on submit button */
	hasSubmitRateLimit?: boolean
	submitRateLimit?: number
}
export type { FormRHFProps }
