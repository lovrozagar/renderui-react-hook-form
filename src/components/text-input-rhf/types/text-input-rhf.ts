import type React from 'react'

import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { TextInput } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type TextInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof TextInput>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		trim?: boolean | undefined
	}

export type { TextInputRHFProps }
