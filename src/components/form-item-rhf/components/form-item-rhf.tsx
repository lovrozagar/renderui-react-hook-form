import React from 'react'

import { Box, Label, cx, functionCallOrValue, getOptionalObject } from '@renderui/core'
import { FieldValues, Path, useController } from 'react-hook-form'
import { FormItemRHFProps } from '../types/form-item-rhf'
import { Message } from './message'
import { getContainerClassName } from '../utils/get-container-classname'
import { getLabelClassName } from '../utils/get-label-classname'

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
    collapsibleProps,
    collapsibleContentProps,
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

  const isMessageOpen = Boolean(fieldState.error) || Boolean(error)

  const reactId = React.useId()

  /* keep track of previous message so that we animate error smoothly out instead of it dissapearing */
  const previousMessageRef = React.useRef<string | undefined>(fieldState.error?.message)

  if (fieldState.error?.message && previousMessageRef.current !== fieldState.error?.message) {
    previousMessageRef.current = fieldState.error?.message
  }

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
        isOpen={isMessageOpen}
        description={description}
        error={error}
        fieldStateError={fieldState.error?.message}
        previousFieldStateError={previousMessageRef.current}
        collapsibleProps={collapsibleProps}
        collapsibleContentProps={collapsibleContentProps}
      />
      {functionCallOrValue(endContent, field.value)}
    </Box>
  )
}

export { FormItemRHF }
