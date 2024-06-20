import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  chain,
  cx,
  getOptionalObject,
} from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { SelectRHFProps } from '../types/select-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'

const SelectRHF = <F extends FieldValues, N extends Path<F>>(props: SelectRHFProps<F, N>) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const { label, ...restFormItemProps } = formItemProps

  const { items, triggerProps, contentProps, onValueChange, ...restProps } = componentProps

  const { className, id: idProp, onBlur, ...restTriggerProps } = getOptionalObject(triggerProps)

  return (
    <FormItemRHF {...restFormItemProps}>
      {({ field, fieldState, id }) => (
        <Select
          name={field.name}
          value={field.value}
          isInvalid={Boolean(fieldState.error)}
          onValueChange={chain(field.onChange, onValueChange)}
          {...restProps}
        >
          <SelectTrigger
            id={idProp ?? id}
            ref={field.ref}
            onBlur={chain(field.onBlur, onBlur)}
            className={cx(RING_FOCUS_VISIBLE_CLASSNAME, className)}
            {...restTriggerProps}
          >
            {label}
          </SelectTrigger>
          <SelectContent {...contentProps}>
            {items?.map((item) => {
              const { value, label: itemLabel, className, ...restItemProps } = item

              return (
                <SelectItem key={value} value={value} {...restItemProps}>
                  {itemLabel}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      )}
    </FormItemRHF>
  )
}

export { SelectRHF }
