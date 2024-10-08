import { FormItemRHF } from '@/components/form-item-rhf/components/form-item-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { ToggleGroup, ToggleGroupItem, VisuallyHidden, chain, cx } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'
import type { ToggleGroupRHFProps } from '../types/toggle-group-rhf'

const ToggleGroupRHF = <F extends FieldValues, N extends Path<F>>(
	props: ToggleGroupRHFProps<F, N>,
) => {
	const { formItemProps, componentProps } = getFormItemProps(props)

	const { children, ...restFormItemProps } = formItemProps

	const { type, items, onBlur, onValueChange, ...restProps } = componentProps

	return (
		<FormItemRHF {...restFormItemProps}>
			{({ field, fieldState, id }) => (
				<>
					<ToggleGroup
						id={id}
						/* cast type and value loosly to support single and multiple type */
						/* biome-ignore lint/suspicious/noExplicitAny: allow generic */
						type={type as any}
						/* biome-ignore lint/suspicious/noExplicitAny: allow generic */
						value={(Array.isArray(field.value) ? field.value : [field.value]) as any}
						onBlur={chain(field.onBlur, onBlur)}
						onValueChange={chain(field.onChange, onValueChange)}
						{...restProps}
					>
						{items?.map((item, index) => {
							const { value, label, className, ...restItemProps } = item

							return (
								<ToggleGroupItem
									key={value}
									value={value}
									ref={index === 0 ? field.ref : undefined}
									data-invalid={index === 0 ? Boolean(fieldState.error) : undefined}
									className={cx(index === 0 ? RING_FOCUS_VISIBLE_CLASSNAME : '', className)}
									{...restItemProps}
								>
									{label}
								</ToggleGroupItem>
							)
						})}
						<VisuallyHidden>
							<input
								tabIndex={-1}
								name={field.name}
								value={field.value}
								onChange={field.onChange}
							/>
						</VisuallyHidden>
					</ToggleGroup>
					{children}
				</>
			)}
		</FormItemRHF>
	)
}

export { ToggleGroupRHF }
