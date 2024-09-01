import type {
	BoxProps,
	CollapsibleContentProps,
	CollapsibleProps,
	LabelProps,
	TextProps,
} from '@renderui/core'
import type { ReactNode } from 'react'
import type {
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
	containerProps?: BoxProps | undefined
	labelProps?: LabelProps | undefined
	errorDescriptionContainerProps?: BoxProps | undefined
	errorProps?: CollapsibleProps | undefined
	errorContentProps?: CollapsibleContentProps | undefined
	errorTextProps?: TextProps | undefined
	descriptionProps?: CollapsibleProps | undefined
	descriptionContentProps?: CollapsibleContentProps | undefined
	descriptionTextProps?: TextProps | undefined
	hasLabel?: boolean
	hasMessage?: boolean
}

type FormItemRHFProps<F extends FieldValues, N extends Path<F>> = FormItemRHFFormProps<F, N> & {
	children: (fieldControl: UseControllerReturn<F, N> & { id: string }) => ReactNode
	isDisabled?: boolean
	startContent?: ReactNode | ((value: unknown) => ReactNode)
	endContent?: ReactNode | ((value: unknown) => ReactNode)
	orientation?: 'horizontal' | 'vertical'
	order?: 'normal' | 'reverse'
}

export type { FormItemRHFFormProps, FormItemRHFProps }
