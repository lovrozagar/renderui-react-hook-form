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
    errorTextProps,
    descriptionProps,
    descriptionContentProps,
    descriptionTextProps,
    startContent,
    endContent,
    children,
    hasLabel = true,
    hasMessage = true,
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
      {hasLabel ? (
        <Label
          htmlFor={id}
          className={getLabelClassName(order, labelClassName)}
          {...restLabelProps}
        >
          {label}
        </Label>
      ) : null}
      {children({ ...fieldControl, id })}
      {hasMessage ? (
        <Message
          error={error}
          fieldStateError={fieldState.error?.message}
          description={description}
          errorDescriptionContainerProps={errorDescriptionContainerProps}
          errorProps={errorProps}
          errorContentProps={errorContentProps}
          errorTextProps={errorTextProps}
          descriptionProps={descriptionProps}
          descriptionContentProps={descriptionContentProps}
          descriptionTextProps={descriptionTextProps}
        />
      ) : null}
      {functionCallOrValue(endContent, field.value)}
    </Box>
  )
}

export { FormItemRHF }
