import { FormItemRHFProps } from '@/components'
import {
  ComboboxContentProps,
  ComboboxItemProps,
  ComboboxTriggerProps,
  Select,
} from '@renderui/core'
import { ReactNode } from 'react'
import { FieldValues, Path } from 'react-hook-form'

type SelectRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof Select>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    triggerProps?: ComboboxTriggerProps
    contentProps?: ComboboxContentProps
    items: (Omit<ComboboxItemProps, 'children'> & { label?: ReactNode })[]
  }

export type { SelectRHFProps }
