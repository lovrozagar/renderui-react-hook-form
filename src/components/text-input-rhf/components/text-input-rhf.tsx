import React from 'react'

import { TextInput, chain } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { FormItemRHF, FormItemRHFProps } from '@/components/form-item-rhf'

type TextInputRHFProps<F extends FieldValues, N extends Path<F>> = Omit<
  React.ComponentPropsWithoutRef<typeof TextInput>,
  'form'
> &
  Omit<FormItemRHFProps<F, N>, 'children'>

const TextInputRHF = <F extends FieldValues, N extends Path<F>>(props: TextInputRHFProps<F, N>) => {
  const {
    /* react hook form props */
    form,
    name,
    defaultValue,
    isDisabled,
    rules,
    shouldUnregister,
    onBlur,
    onChange,
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
    ...restProps
  } = props

  return (
    <FormItemRHF
      form={form}
      name={name}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      rules={rules}
      shouldUnregister={shouldUnregister}
      label={label}
      error={error}
      description={description}
      containerProps={containerProps}
      labelProps={labelProps}
      collapsibleProps={collapsibleProps}
      collapsibleContentProps={collapsibleContentProps}
      startContent={startContent}
      endContent={endContent}
    >
      {({ field, fieldState, id }) => (
        <TextInput
          id={id}
          ref={field.ref}
          name={field.name}
          value={field.value}
          isInvalid={Boolean(fieldState.error)}
          onBlur={chain(field.onBlur, onBlur)}
          onChange={chain(field.onChange, onChange)}
          {...restProps}
        />
      )}
    </FormItemRHF>
  )
}

export { TextInputRHF }
