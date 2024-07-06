import { FieldValues, Path } from 'react-hook-form'
import { FormItemRHFProps } from '..'
import { cx } from '@renderui/core'

function getLabelClassName<F extends FieldValues, N extends Path<F>>(
  order: FormItemRHFProps<F, N>['order'],
  className: string | undefined,
) {
  return cx('pl-0.5', order === 'reverse' ? 'order-2 [&+*]:order-1' : undefined, className)
}

export { getLabelClassName }
