import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { RadioGroup, chain } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { RadioGroupRHFProps } from '../types/radio-group-rhf'
import { RadioGroupItemRHF } from './radio-group-item-rhf'

const RadioGroupRHF = <F extends FieldValues, N extends Path<F>>(
  props: RadioGroupRHFProps<F, N>,
) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const { items, onBlur, onValueChange, ...restProps } = componentProps

  return (
    <FormItemRHF {...formItemProps}>
      {({ field, fieldState, id }) => (
        <RadioGroup
          id={id}
          ref={field.ref}
          name={field.name}
          value={field.value}
          isInvalid={Boolean(fieldState.error)}
          onBlur={chain(field.onBlur, onBlur)}
          onValueChange={chain(field.onChange, onValueChange)}
          {...restProps}
        >
          {items?.map((item, index) => {
            const { ref, value, ...restItemProps } = item

            return (
              <RadioGroupItemRHF
                key={value}
                value={value}
                ref={index === 0 ? ref : undefined}
                {...restItemProps}
              />
            )
          })}
        </RadioGroup>
      )}
    </FormItemRHF>
  )
}

export { RadioGroupRHF }
