import { FormRHF } from '@/components/form-rhf/components/form-rhf'
import { Button } from '@renderui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextInputRHF } from './src/components/text-input-rhf/components/text-input-rhf'
import {
  ComboboxRHF,
  NumberInputRHF,
  RadioGroupRHF,
  SegmentRHF,
  SelectRHF,
  SwitchRHF,
  ToggleGroupRHF,
} from './src'
import { CheckboxRHF } from '@/components/checkbox-rhf'

const App = () => {
  const form = useForm<{
    name: string
    age: number | null
    select: number | null
    combo: number | null
    check: boolean | null
    radio: string
    potamanio: number
    toggle: number[]
    switch: boolean
  }>({
    defaultValues: { name: '', age: '', toggle: [], potamanio: null },
  })

  const [state, setState] = useState<string>('')

  console.log('a')

  return (
    <div className='bg-mode min-h-full max-w-[300px] w-full p-5 pb-[1000px]'>
      <FormRHF
        form={form}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <TextInputRHF
          form={form}
          name='name'
          label='First name'
          description='Something'
          rules={{ required: 'First name is required' }}
        />
        <NumberInputRHF
          form={form}
          name='age'
          label='Age'
          precision={2}
          rules={{ required: 'Age is required' }}
          error={state}
        />
        <SelectRHF
          form={form}
          name='select'
          label='Age'
          description='test'
          rules={{ required: 'Select is required' }}
          error={state}
          items={[
            {
              value: 1,
              label: 'afeeafeafea',
            },
            {
              value: 2,
              label: 'aef',
            },
          ]}
        />
        <ComboboxRHF
          form={form}
          name='combo'
          label='combo'
          description='combo'
          rules={{ required: 'combo is required' }}
          error={state}
          items={[
            {
              value: 1,
              label: 'test',
            },
            {
              value: 2,
              label: 'aef',
            },
          ]}
        />
        <CheckboxRHF
          form={form}
          name='check'
          label='Checkbox'
          description='check'
          rules={{ required: 'check is required' }}
          error={state}
        />
        <RadioGroupRHF
          form={form}
          name='radio'
          label='radio'
          description='radio'
          rules={{ required: 'check is required' }}
          error={state}
          items={[
            {
              value: 1,
              label: 'label 1',
            },
            {
              value: 2,
              label: 'label 2',
            },
          ]}
        />
        <SegmentRHF
          form={form}
          name='potamanio'
          label='Potamanio'
          description='potamanio'
          rules={{ required: 'check is required' }}
          error={state}
          items={[
            {
              value: 1,
              label: 'TESTT',
            },
            {
              value: 2,
              label: 'afaefea',
            },
          ]}
        />
        <SwitchRHF
          form={form}
          name='switch'
          label='SwItch'
          description='switch'
          rules={{ required: 'check is required' }}
          error={state}
        />
        <ToggleGroupRHF
          form={form}
          name='toggle'
          label='Toggle'
          description='toggle'
          rules={{ required: 'check is required' }}
          error={state}
          items={[
            {
              value: 1,
              label: 'afaefea',
            },
            {
              value: 2,
              label: 'afaefea',
            },
          ]}
        />
        <Button type='submit'>Submit</Button>
      </FormRHF>
    </div>
  )
}

export { App }
