import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { RadioGroupItemRHF } from '@/components/radio-group-rhf/components/radio-group-item-rhf'
import type { RadioGroupRHFProps } from '@/components/radio-group-rhf/types/radio-group-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { RadioGroup, chain } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

const RadioGroupRHF = <F extends FieldValues, N extends Path<F>>(
	props: RadioGroupRHFProps<F, N>,
) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const { children, ...restFormItemProps } = formItemProps
	const { items, onBlur, onValueChange, ...restProps } = componentProps

	return (
		<FormItemRHF {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<RadioGroup
						id={id}
						ref={field.ref}
						name={field.name}
						value={field.value}
						isInvalid={Boolean(fieldState.error)}
						onBlur={chain(field.onBlur, onBlur)}
						onValueChange={chain(field.onChange, onValueChange)}
						{...restProps}
					>
						{items?.map((item, index) => {
							const { ref, value, ...restItemProps } = item

							return (
								<RadioGroupItemRHF
									key={value}
									value={value}
									ref={index === 0 ? ref : undefined}
									{...restItemProps}
								/>
							)
						})}
					</RadioGroup>
					{children}
				</>
			)}
		</FormItemRHF>
	)
}

export { RadioGroupRHF }
