import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type {
	ComboboxContentProps,
	ComboboxItemProps,
	ComboboxTriggerProps,
	Select,
} from '@renderui/core'
import type { ReactNode } from 'react'
import type { FieldValues, Path } from 'react-hook-form'

type SelectRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof Select>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		placeholder?: string
		triggerProps?: ComboboxTriggerProps
		contentProps?: ComboboxContentProps
		items: (Omit<ComboboxItemProps, 'children'> & { label?: ReactNode })[]
	}

export type { SelectRHFProps }
