import { FieldValues, Path } from 'react-hook-form'
import { FormItemRHFProps } from '..'
import { cx } from '@renderui/core'

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
