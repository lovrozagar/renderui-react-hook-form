import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'
import { Box, Label, RadioGroupItem, cx, getOptionalObject } from '@renderui/core'
import React from 'react'
import { DEFAULT_RADIO_GROUP_ITEM_RHF_CONTAINER_CLASSNAME } from '../constants/constants'
import type { RadioGroupItemRHFProps } from '../types/radio-group-item-rhf'

const RadioGroupItemRHF = (props: RadioGroupItemRHFProps) => {
	const { id: idProp, containerProps, labelProps, value, label, className, ...restProps } = props

	const { className: containerClassName, ...restContainerProps } = getOptionalObject(containerProps)

	const reactId = React.useId()

	const id = idProp ?? reactId

	return (
		<Box
			key={value}
			className={cx(DEFAULT_RADIO_GROUP_ITEM_RHF_CONTAINER_CLASSNAME, containerClassName)}
			{...restContainerProps}
		>
			<RadioGroupItem
				id={id}
				value={value}
				className={cx(RING_FOCUS_VISIBLE_CLASSNAME, className)}
				{...restProps}
			/>
			<Label htmlFor={id} {...labelProps}>
				{label}
			</Label>
		</Box>
	)
}

export { RadioGroupItemRHF }
