import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

type RulesRHF<T extends FieldValues, N extends Path<T>> = {
  rules?: Omit<RegisterOptions<T, N>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}

type SchemaBlueprintRHF<T extends string> = {
  [K in T]: {
    name: K
    label?: string | undefined
    placeholder?: string | undefined
  } & RulesRHF<any, any>
}

export type { RulesRHF, SchemaBlueprintRHF }
