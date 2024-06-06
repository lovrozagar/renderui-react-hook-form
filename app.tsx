import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextInputRHF } from './src/components/text-input-rhf/components/text-input-rhf'
import { Button } from '@renderui/core'

const App = () => {
  const form = useForm<{ name: string; efa: string }>({ defaultValues: { name: '', efa: '' } })

  const [state, setState] = useState<string>()

  console.log('a')

  return (
    <div className='bg-mode min-h-full w-full p-5 pb-[1000px]'>
      <form
        onSubmit={form.handleSubmit(() => {
          setState('Fumbling a baddie')
        })}
      >
        <TextInputRHF
          form={form}
          name='name'
          label='First name'
          rules={{ required: 'First name is required' }}
          error={state}
          description='AEFAF'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export { App }
