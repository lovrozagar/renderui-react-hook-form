import { Form } from '@renderui/core'
import { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormRHFProps<T extends FieldValues> = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'onSubmit'
> & {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  onInvalidSubmit?: SubmitErrorHandler<T>
  /* useful to guard against holding enter on submit button */
  blurActiveElementOnSubmit?: boolean
}
export type { FormRHFProps }
