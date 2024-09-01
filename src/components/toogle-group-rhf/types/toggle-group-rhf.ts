import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { ToggleGroup, ToggleGroupItemProps } from '@renderui/core'
import type { ReactNode } from 'react'
import type { FieldValues, Path } from 'react-hook-form'

type ToggleGroupRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof ToggleGroup>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		items: (Omit<ToggleGroupItemProps, 'children'> & { label?: ReactNode })[]
	}

export type { ToggleGroupRHFProps }
