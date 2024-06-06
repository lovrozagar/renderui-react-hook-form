import React from 'react'

import { Box, Label, cx, functionCallOrValue, getOptionalObject } from '@renderui/core'
import { FieldValues, Path, useController } from 'react-hook-form'
import { FormItemRHFProps } from '../types/form-item-rhf'
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
    collapsibleProps,
    collapsibleContentProps,
    startContent,
    endContent,
    children,
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

  const isMessageOpen = Boolean(fieldState.error) || Boolean(error) || Boolean(description)

  const messageType = Boolean(fieldState.error) ? 'error' : 'description'

  const id = React.useId()

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

  return (
    <Box className={cx('grid gap-0.5', containerClassName)} {...restContainerProps}>
      {functionCallOrValue(startContent, field.value)}
      <Label htmlFor={labelId ?? id} className={cx('pl-0.5', labelClassName)} {...restLabelProps}>
        {label}
      </Label>
      {children({ ...fieldControl, id })}
      <Message
        collapsibleProps={collapsibleProps}
        collapsibleContentProps={collapsibleContentProps}
        isOpen={isMessageOpen}
        description={description}
        error={error}
        messageType={messageType}
        fieldStateError={fieldState.error?.message}
        previousFieldStateError={previousMessageRef.current}
      />
      {functionCallOrValue(endContent, field.value)}
    </Box>
  )
}

export { FormItemRHF }
