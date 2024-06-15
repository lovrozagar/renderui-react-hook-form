import { BoxProps, LabelProps, RadioGroupItemProps } from '@renderui/core'
import { ReactNode } from 'react'

type RadioGroupItemRHFProps = Omit<RadioGroupItemProps, 'children'> & {
  label?: ReactNode
  labelProps?: Omit<LabelProps, 'children'>
  containerProps?: Omit<BoxProps, 'children'>
}

export type { RadioGroupItemRHFProps }
