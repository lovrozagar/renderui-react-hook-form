import type React from 'react'

import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { TextArea } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

type TextAreaRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof TextArea>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		trim?: boolean | undefined
	}

export type { TextAreaRHFProps }
