import { FormItemRHFProps } from '@/components'
import { ToggleGroup, ToggleGroupItemProps } from '@renderui/core'
import { ReactNode } from 'react'
import { FieldValues, Path } from 'react-hook-form'

type ToggleGroupRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof ToggleGroup>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    items: (ToggleGroupItemProps & { label?: ReactNode })[]
  }

export type { ToggleGroupRHFProps }
