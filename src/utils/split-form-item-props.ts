import { FieldValues, Path } from 'react-hook-form'
import { FormItemRHFProps } from '@/components/form-item-rhf/types/form-item-rhf'

function getFormItemProps<
  F extends FieldValues,
  N extends Path<F>,
  R extends Record<string, unknown>,
>(props: Omit<FormItemRHFProps<F, N>, 'children'> & R) {
  const {
    /* react hook form props */
    form,
    name,
    defaultValue,
    isDisabled,
    rules,
    shouldUnregister,
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
    ...componentProps
  } = props

  return {
    formItemProps: {
      form,
      name,
      defaultValue,
      isDisabled,
      rules,
      shouldUnregister,
      label,
      error,
      description,
      containerProps,
      labelProps,
      collapsibleProps,
      collapsibleContentProps,
      startContent,
      endContent,
    },
    componentProps,
  }
}

export { getFormItemProps }
