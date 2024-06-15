import { Form } from '@renderui/core'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { FormRHFProps } from '../types/form-rhf'

const FormRHF = <T extends FieldValues>(props: FormRHFProps<T>) => {
  const { form, onSubmit, onInvalidSubmit, ...restProps } = props

  const { handleSubmit } = form

  return <Form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} {...restProps} />
}

export { FormRHF }
