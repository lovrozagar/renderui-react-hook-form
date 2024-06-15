import { FormItemRHFProps } from '@/components'
import {
  Combobox,
  ComboboxContentProps,
  ComboboxItemProps,
  ComboboxTriggerProps,
} from '@renderui/core'
import { ReactNode } from 'react'
import { FieldValues, Path } from 'react-hook-form'

type ComboboxRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof Combobox>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    triggerProps?: ComboboxTriggerProps
    contentProps?: ComboboxContentProps
    items: (Omit<ComboboxItemProps, 'children'> & { label?: ReactNode })[]
  }

export type { ComboboxRHFProps }
