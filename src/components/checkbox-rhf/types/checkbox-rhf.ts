import { FormItemRHFProps } from '@/components'
import { Checkbox } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'

type CheckboxRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof Checkbox>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'>

export type { CheckboxRHFProps }
