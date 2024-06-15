import { FormItemRHFProps } from '@/components'
import { Switch } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'

type SwitchRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof Switch>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'>

export type { SwitchRHFProps }
