import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { TextInput, chain, functionCallOrValue, getOptionalObject } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import { getTextTrim } from '../../../utils/get-text-trim'
import type { TextInputRHFProps } from '../types/text-input-rhf'

const TextInputRHF = <F extends FieldValues, N extends Path<F>>(props: TextInputRHFProps<F, N>) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const { form, children, ...restFormItemProps } = formItemProps
	const { setValue } = form

	const { trim, onBlur, onValueChange, inputContainerProps, ...restProps } = componentProps

	const { startContent, endContent, ...restInputContainerProps } =
		getOptionalObject(inputContainerProps)

	return (
		<FormItemRHF form={form} {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<TextInput
						id={id}
						ref={field.ref}
						name={field.name}
						value={field.value}
						isInvalid={Boolean(fieldState.error)}
						onBlur={chain(
							getTextTrim(trim, field.name, field.value, setValue),
							field.onBlur,
							onBlur,
						)}
						onValueChange={chain(field.onChange, onValueChange)}
						startContent={functionCallOrValue(startContent, field.value)}
						endContent={functionCallOrValue(endContent, field.value)}
						inputContainerProps={restInputContainerProps}
						{...restProps}
					/>
					{children}
				</>
			)}
		</FormItemRHF>
	)
}

export { TextInputRHF }
