import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { Switch } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type SwitchRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof Switch>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'>

export type { SwitchRHFProps }
