import { FormItemRHFProps } from '@/components'
import { Segment, TabsTriggerListProps, TabsTriggerProps } from '@renderui/core'
import { ReactNode } from 'react'
import { FieldValues, Path } from 'react-hook-form'

type SegmentRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof Segment>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    children?: React.ReactNode
    listProps?: Omit<TabsTriggerListProps, 'children'>
    items: (Omit<TabsTriggerProps, 'children'> & { label?: ReactNode })[]
  }

export type { SegmentRHFProps }
