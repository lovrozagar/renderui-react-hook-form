import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import { cx } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

function getLabelClassName<F extends FieldValues, N extends Path<F>>(
	order: FormItemRHFProps<F, N>['order'],
	className: string | undefined,
) {
	return cx('pl-0.5', order === 'reverse' ? 'order-2 [&+*]:order-1' : undefined, className)
}

export { getLabelClassName }
