import type { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'
import type { Segment, TabsTriggerListProps, TabsTriggerProps } from '@renderui/core'
import type { ReactNode } from 'react'
import type { FieldValues, Path } from 'react-hook-form'

type SegmentRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
	React.ComponentPropsWithRef<typeof Segment>,
	'form'
> &
	Omit<FormItemRHFProps<F, N>, 'children'> & {
		children?: React.ReactNode
		listProps?: Omit<TabsTriggerListProps, 'children'>
		items: (Omit<TabsTriggerProps, 'children'> & { label?: ReactNode })[]
	}

export type { SegmentRHFProps }
