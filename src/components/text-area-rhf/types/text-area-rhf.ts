import React from 'react'

import { FormItemRHFProps } from '@/components/form-item-rhf'
import { TextArea } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'

type TextAreaRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof TextArea>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'> & {
    trim?: boolean | undefined
  }

export type { TextAreaRHFProps }
