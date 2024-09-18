import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { NumberInput, chain, functionCallOrValue, getOptionalObject } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import type { NumberInputRHFProps } from '../types/number-input-rhf'
import { getHandleBlur } from '../utils/get-handle-blur'

const NumberInputRHF = <F extends FieldValues, N extends Path<F>>(
	props: NumberInputRHFProps<F, N>,
) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const { children, ...restFormItemProps } = formItemProps
	const {
		id: idProp,
		precision,
		inputContainerProps,
		onBlur,
		onValueChange,
		...restProps
	} = componentProps

	const { startContent, endContent, ...restInputContainerProps } =
		getOptionalObject(inputContainerProps)

	return (
		<FormItemRHF {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<NumberInput
						id={idProp ?? id}
						ref={field.ref}
						name={field.name}
						value={field.value}
						isInvalid={Boolean(fieldState.error)}
						onBlur={chain(field.onBlur, getHandleBlur(field, precision, onValueChange), onBlur)}
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

export { NumberInputRHF }
