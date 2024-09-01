import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { Checkbox } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type CheckboxRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof Checkbox>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'>

export type { CheckboxRHFProps }
