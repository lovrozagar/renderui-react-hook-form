import { FormItemRHFProps } from '@/components'
import { NumberInput } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'

type NumberInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof NumberInput>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children' | 'onValueChange'> & {
    onValueChange?: ((value: number | null) => void) | undefined
    precision?: number
  }

export type { NumberInputRHFProps }
