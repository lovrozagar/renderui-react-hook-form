import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form'

function getTextTrim<T extends FieldValues>(
  trim: boolean | undefined,
  fieldName: Path<T>,
  fieldValue: string | null | undefined,
  setValue: UseFormSetValue<T>,
) {
  return () => {
    const stringifiedValue = fieldValue ?? ''
    const sanitizedValue = trim ? stringifiedValue.trim() : stringifiedValue

    setValue(fieldName, sanitizedValue as PathValue<T, Path<T>>)
  }
}

export { getTextTrim }
