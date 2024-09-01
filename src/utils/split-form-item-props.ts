import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { FieldValues, Path } from 'react-hook-form'

function getFormItemProps<
	F extends FieldValues,
	N extends Path<F>,
	R extends Record<string, unknown>,
>(props: Omit<FormItemRHFProps<F, N>, 'children'> & R) {
	const {
		/* react hook form props */
		form,
		name,
		defaultValue,
		rules,
		shouldUnregister,
		isDisabled,
		/* custom props */
		label,
		error,
		description,
		containerProps,
		labelProps,
		errorDescriptionContainerProps,
		errorProps,
		errorContentProps,
		errorTextProps,
		descriptionProps,
		descriptionContentProps,
		descriptionTextProps,
		startContent,
		endContent,
		children,
		orientation,
		order,
		hasLabel,
		hasMessage,
		...componentProps
	} = props

	return {
		formItemProps: {
			form,
			name,
			defaultValue,
			rules,
			shouldUnregister,
			isDisabled,
			label,
			error,
			description,
			containerProps,
			labelProps,
			errorDescriptionContainerProps,
			errorProps,
			errorContentProps,
			descriptionProps,
			descriptionContentProps,
			startContent,
			endContent,
			children,
			orientation,
			order,
		},
		componentProps: {
			...componentProps,
			isDisabled,
		},
	}
}

export { getFormItemProps }
