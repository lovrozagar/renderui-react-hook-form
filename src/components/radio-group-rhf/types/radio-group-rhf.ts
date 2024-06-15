import { FormItemRHFProps } from '@/components'
import { RadioGroup } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { RadioGroupItemRHFProps } from './radio-group-item-rhf'

type RadioGroupRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof RadioGroup>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    items: RadioGroupItemRHFProps[]
  }

export type { RadioGroupRHFProps }
