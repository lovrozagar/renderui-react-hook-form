import { Form, chain } from '@renderui/core'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { FormRHFProps } from '../types/form-rhf'
import { blurActiveElement } from '../../../utils/blur-active-element'

const FormRHF = <T extends FieldValues>(props: FormRHFProps<T>) => {
  const { form, onSubmit, onInvalidSubmit, blurActiveElementOnSubmit = true, ...restProps } = props

  const { handleSubmit } = form

  return (
    <Form
      onSubmit={handleSubmit(
        chain(blurActiveElementOnSubmit ? blurActiveElement : undefined, onSubmit),
        onInvalidSubmit,
      )}
      {...restProps}
    />
  )
}

export { FormRHF }
