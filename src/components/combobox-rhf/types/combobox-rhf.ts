import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type {
	Combobox,
	ComboboxContentProps,
	ComboboxItemProps,
	ComboboxTriggerProps,
} from '@renderui/core'
import type { ReactNode } from 'react'
import type { FieldValues, Path } from 'react-hook-form'

type ComboboxRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof Combobox>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		placeholder?: string
		triggerProps?: ComboboxTriggerProps
		contentProps?: ComboboxContentProps
		items: (Omit<ComboboxItemProps, 'children'> & { label?: ReactNode })[]
	}

export type { ComboboxRHFProps }
