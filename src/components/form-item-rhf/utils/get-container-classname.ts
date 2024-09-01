import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import { cx } from '@renderui/core'
import type { FieldValues, Path } from 'react-hook-form'

function getContainerClassName<F extends FieldValues, N extends Path<F>>(
	orientation: FormItemRHFProps<F, N>['orientation'],
	order: FormItemRHFProps<F, N>['order'],
	className: string | undefined,
) {
	return cx(
		'grid',
		orientation === 'horizontal' ? 'items-center gap-x-2' : 'gap-y-0.5',
		orientation === 'horizontal' && order === 'normal' ? 'grid-cols-[1fr_auto]' : '',
		orientation === 'horizontal' && order === 'reverse' ? 'grid-cols-[auto_1fr]' : '',
		className,
	)
}

export { getContainerClassName }
