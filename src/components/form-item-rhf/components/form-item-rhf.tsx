import React from 'react'

import { Box, Label, functionCallOrValue, getOptionalObject } from '@renderui/core'
import { FieldValues, Path, useController } from 'react-hook-form'
import { FormItemRHFProps } from '../types/form-item-rhf'
import { getContainerClassName } from '../utils/get-container-classname'
import { getLabelClassName } from '../utils/get-label-classname'
import { Message } from './message'

const FormItemRHF = <F extends FieldValues, N extends Path<F>>(props: FormItemRHFProps<F, N>) => {
  const {
    /* react hook form props */
    form,
    name,
    defaultValue,
    rules,
    shouldUnregister,
    isDisabled,
    /* custom props */
    label,
    error,
    description,
    containerProps,
    labelProps,
    errorDescriptionContainerProps,
    errorProps,
    errorContentProps,
    descriptionProps,
    descriptionContentProps,
    startContent,
    endContent,
    children,
    orientation = 'vertical',
    order = 'normal',
  } = props

  const { control } = form

  const fieldControl = useController({
    control,
    name,
    rules,
    defaultValue,
    shouldUnregister,
    disabled: isDisabled,
  })

  const { field, fieldState } = fieldControl

  const reactId = React.useId()

  const { className: containerClassName, ...restContainerProps } = getOptionalObject(containerProps)

  const {
    id: labelId,
    className: labelClassName,
    ...restLabelProps
  } = getOptionalObject(labelProps)

  const id = labelId ?? reactId

  return (
    <Box
      className={getContainerClassName(orientation, order, containerClassName)}
      {...restContainerProps}
    >
      {functionCallOrValue(startContent, field.value)}
      <Label htmlFor={id} className={getLabelClassName(order, labelClassName)} {...restLabelProps}>
        {label}
      </Label>
      {children({ ...fieldControl, id })}
      <Message
        error={error}
        fieldStateError={fieldState.error?.message}
        description={description}
        errorDescriptionContainerProps={errorDescriptionContainerProps}
        errorProps={errorProps}
        errorContentProps={errorContentProps}
        descriptionProps={descriptionProps}
        descriptionContentProps={descriptionContentProps}
      />
      {functionCallOrValue(endContent, field.value)}
    </Box>
  )
}

export { FormItemRHF }
