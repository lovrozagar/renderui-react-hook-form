import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'
import { getFormItemProps } from '@/utils/split-form-item-props'
import {
	Combobox,
	ComboboxContent,
	ComboboxItem,
	ComboboxTrigger,
	chain,
	cx,
	getOptionalObject,
} from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import type { ComboboxRHFProps } from '../types/combobox-rhf'

const ComboboxRHF = <F extends FieldValues, N extends Path<F>>(props: ComboboxRHFProps<F, N>) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const { children, label, ...restFormItemProps } = formItemProps

	const { placeholder, items, triggerProps, contentProps, onValueChange, ...restProps } =
		componentProps

	const {
		id: idProp,
		className: triggerClassName,
		onBlur,
		...restTriggerProps
	} = getOptionalObject(triggerProps)

	return (
		<FormItemRHF {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<Combobox
						name={field.name}
						value={field.value}
						isInvalid={Boolean(fieldState.error)}
						onValueChange={chain(field.onChange, onValueChange)}
						{...restProps}
					>
						<ComboboxTrigger
							id={idProp ?? id}
							ref={field.ref}
							onBlur={chain(field.onBlur, onBlur)}
							className={cx(RING_FOCUS_VISIBLE_CLASSNAME, triggerClassName)}
							{...restTriggerProps}
						/>
						<ComboboxContent {...contentProps}>
							{items?.map((item) => {
								const { value, label: itemLabel, ...restItemProps } = item

								return (
									<ComboboxItem key={value} value={value} {...restItemProps}>
										{itemLabel}
									</ComboboxItem>
								)
							})}
						</ComboboxContent>
					</Combobox>
					{children}
				</>
			)}
		</FormItemRHF>
	)
}

export { ComboboxRHF }
