import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { TextArea, chain } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { getTextTrim } from '@/utils/get-text-trim'
import { TextAreaRHFProps } from '../types/text-area-rhf'

const TextAreaRHF = <F extends FieldValues, N extends Path<F>>(props: TextAreaRHFProps<F, N>) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const { form, children, ...restFormItemProps } = formItemProps
  const { setValue } = form

  const { trim, onBlur, onValueChange, ...restProps } = componentProps

  return (
    <FormItemRHF form={form} {...restFormItemProps}>
      {({ field, fieldState, id }) => (
        <>
          <TextArea
            id={id}
            ref={field.ref}
            name={field.name}
            value={field.value}
            isInvalid={Boolean(fieldState.error)}
            onBlur={chain(
              getTextTrim(trim, field.name, field.value, setValue),
              field.onBlur,
              onBlur,
            )}
            onValueChange={chain(field.onChange, onValueChange)}
            {...restProps}
          />
          {children}
        </>
      )}
    </FormItemRHF>
  )
}

export { TextAreaRHF }
