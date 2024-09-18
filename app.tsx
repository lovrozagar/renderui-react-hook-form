import { FormRHF } from '@/components/form-rhf/components/form-rhf'
import { TextInputRHF, ToggleGroupRHF } from '@/index'
import { Button } from '@renderui/core'
import { useForm } from 'react-hook-form'

const App = () => {
	const form = useForm<{ name: string; group: string[] }>({
		defaultValues: { name: '', group: [] },
	})

	return (
		<div className='bg-mode min-h-full max-w-[300px] w-full p-5 pb-[1000px]'>
			<FormRHF
				form={form}
				onSubmit={(values) => {
					console.log(values)
				}}
			>
				<TextInputRHF form={form} name='name' hasMessage={false} />
				<Button type='submit'>Submit</Button>
			</FormRHF>
		</div>
	)
}

export { App }
