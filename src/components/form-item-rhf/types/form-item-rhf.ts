import { BoxProps, CollapsibleContentProps, CollapsibleProps, LabelProps } from '@renderui/core'
import { ReactNode } from 'react'
import {
  FieldValues,
  Path,
  UseControllerProps,
  UseControllerReturn,
  UseFormReturn,
} from 'react-hook-form'

type FormItemRHFFormProps<F extends FieldValues, N extends Path<F>> = Omit<
  UseControllerProps<F, N>,
  'control' | 'disabled'
> & {
  form: UseFormReturn<F>
  label?: string
  error?: string
  description?: string
  containerProps?: BoxProps
  labelProps?: LabelProps
  collapsibleProps?: CollapsibleProps
  collapsibleContentProps?: CollapsibleContentProps
}

type FormItemRHFProps<F extends FieldValues, N extends Path<F>> = FormItemRHFFormProps<F, N> & {
  children: (fieldControl: UseControllerReturn<F, N> & { id: string }) => ReactNode
  isDisabled?: boolean
  startContent?: ReactNode | ((value: any) => ReactNode)
  endContent?: ReactNode | ((value: any) => ReactNode)
  orientation?: 'horizontal' | 'vertical'
  order?: 'normal' | 'reverse'
}

export type { FormItemRHFFormProps, FormItemRHFProps }
