import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { Switch, chain, cx } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import type { SwitchRHFProps } from '../types/switch-rhf'

const SwitchRHF = <F extends FieldValues, N extends Path<F>>(props: SwitchRHFProps<F, N>) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const {
		children,
		orientation = 'horizontal',
		order = 'reverse',
		...restFormItemProps
	} = formItemProps

	const { className, onBlur, onCheckedChange, ...restProps } = componentProps

	return (
		<FormItemRHF orientation={orientation} order={order} {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<Switch
						id={id}
						ref={field.ref}
						name={field.name}
						value={field.value}
						isInvalid={Boolean(fieldState.error)}
						className={cx(RING_FOCUS_VISIBLE_CLASSNAME, className)}
						onBlur={chain(field.onBlur, onBlur)}
						onCheckedChange={chain(field.onChange, onCheckedChange)}
						{...restProps}
					/>
					{children}
				</>
			)}
		</FormItemRHF>
	)
}

export { SwitchRHF }
