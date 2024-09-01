import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { RadioGroup } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import type { RadioGroupItemRHFProps } from './radio-group-item-rhf'

type RadioGroupRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof RadioGroup>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		items: RadioGroupItemRHFProps[]
	}

export type { RadioGroupRHFProps }
