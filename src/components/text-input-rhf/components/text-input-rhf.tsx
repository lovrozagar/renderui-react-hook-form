import React from 'react'

import { TextInput, chain } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { FormItemRHF, FormItemRHFProps } from '@/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { TextInputRHFProps } from '../types/text-input-rhf'

const TextInputRHF = <F extends FieldValues, N extends Path<F>>(props: TextInputRHFProps<F, N>) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const { onBlur, onValueChange, ...restProps } = componentProps

  return (
    <FormItemRHF {...formItemProps}>
      {({ field, fieldState, id }) => (
        <TextInput
          id={id}
          ref={field.ref}
          name={field.name}
          value={field.value}
          isInvalid={Boolean(fieldState.error)}
          onBlur={chain(field.onBlur, onBlur)}
          onValueChange={chain(field.onChange, onValueChange)}
          {...restProps}
        />
      )}
    </FormItemRHF>
  )
}

export { TextInputRHF }
