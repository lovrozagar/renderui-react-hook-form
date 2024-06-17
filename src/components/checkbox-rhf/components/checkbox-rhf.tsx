import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { Checkbox, chain, cx } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { CheckboxRHFProps } from '../types/checkbox-rhf'

const CheckboxRHF = <F extends FieldValues, N extends Path<F>>(props: CheckboxRHFProps<F, N>) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const {
    className,
    onBlur,
    onCheckedChange,
    orientation = 'horizontal',
    order = 'reverse',
    ...restProps
  } = componentProps

  return (
    <FormItemRHF orientation={orientation} order={order} {...formItemProps}>
      {({ field, fieldState, id }) => {
        return (
          <Checkbox
            id={id}
            ref={field.ref}
            name={field.name}
            isChecked={field.value}
            isInvalid={Boolean(fieldState.error)}
            onBlur={chain(field.onBlur, onBlur)}
            className={cx(RING_FOCUS_VISIBLE_CLASSNAME, className)}
            onCheckedChange={chain(field.onChange, onCheckedChange)}
            {...restProps}
          />
        )
      }}
    </FormItemRHF>
  )
}

export { CheckboxRHF }
