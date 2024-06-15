import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form'

function getHandleBlur<F extends FieldValues, N extends Path<F>>(
  field: ControllerRenderProps<F, N>,
  precision: number | undefined,
  onValueChange: (((value: string) => void) & ((value: number | null) => void)) | undefined,
) {
  return () => {
    const decimalIndex = typeof field.value === 'string' ? field.value?.indexOf('.') : undefined
    const decimalPlaces = decimalIndex >= 0 ? field.value.length - decimalIndex - 1 : 0

    const parsedValue = field.value
      ? Number(parseFloat(field.value).toFixed(precision ?? decimalPlaces))
      : null

    field.onChange(parsedValue)

    if (onValueChange) {
      onValueChange(parsedValue)
    }
  }
}

export { getHandleBlur }
