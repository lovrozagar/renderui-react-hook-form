import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { NumberInput } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type NumberInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof NumberInput>,
	'form' | 'inputContainerProps'
> &
	Omit<FormItemRHFProps<F, N>, 'children' | 'onValueChange'> & {
		onValueChange?: ((value: number | null) => void) | undefined
		precision?: number
		inputContainerProps?: React.ComponentPropsWithRef<typeof NumberInput>['inputContainerProps'] & {
			startContent?: ((value: number | null) => React.ReactNode) | React.ReactNode
		} & { endContent?: ((value: number | null) => React.ReactNode) | React.ReactNode }
	}

export type { NumberInputRHFProps }
