import type React from 'react'

import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { TextInput } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type TextInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof TextInput>,
	'form' | 'inputContainerProps'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		inputContainerProps?: React.ComponentPropsWithRef<typeof TextInput>['inputContainerProps'] & {
			startContent?: ((value: string) => React.ReactNode) | React.ReactNode
		} & { endContent?: ((value: string) => React.ReactNode) | React.ReactNode }
		trim?: boolean | undefined
	}

export type { TextInputRHFProps }
