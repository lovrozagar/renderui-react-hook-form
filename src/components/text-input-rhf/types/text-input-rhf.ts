import React from 'react'

import { FormItemRHFProps } from '@/components/form-item-rhf'
import { TextInput } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'

type TextInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof TextInput>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'>

export type { TextInputRHFProps }
