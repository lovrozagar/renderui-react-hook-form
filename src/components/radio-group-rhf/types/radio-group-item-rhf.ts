import type { BoxProps, LabelProps, RadioGroupItemProps } from '@renderui/core'
import type { ReactNode } from 'react'

type RadioGroupItemRHFProps = Omit<RadioGroupItemProps, 'children'> & {
	label?: ReactNode
	labelProps?: Omit<LabelProps, 'children'>
	containerProps?: Omit<BoxProps, 'children'>
}

export type { RadioGroupItemRHFProps }
