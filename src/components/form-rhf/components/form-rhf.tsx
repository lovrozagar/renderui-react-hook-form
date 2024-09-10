'use client'

import type { FormRHFProps } from '@/components/form-rhf/types/form-rhf'
import { Form, noop } from '@renderui/core'
import type React from 'react'
import { useEffect, useState } from 'react'
import type { FieldValues } from 'react-hook-form'

const FormRHF = <T extends FieldValues>(props: FormRHFProps<T>) => {
	const {
		form,
		onSubmit,
		onInvalidSubmit,
		noValidate = true,
		hasSubmitRateLimit = true,
		submitRateLimit = 500,
		...restProps
	} = props

	const { handleSubmit } = form

	/* State to handle rate limiting */
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		if (isSubmitting) {
			timeoutId = setTimeout(() => {
				setIsSubmitting(false)
			}, submitRateLimit)
		}

		/* Clean up timeout when component unmounts */
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
		}
	}, [isSubmitting, submitRateLimit])

	/* Custom submit handler with rate limiting */
	const handleRateLimitedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (hasSubmitRateLimit) {
			if (isSubmitting) {
				return handleSubmit(noop, onInvalidSubmit)(event)
			}

			setIsSubmitting(true)
		}

		return handleSubmit(onSubmit, onInvalidSubmit)(event)
	}

	return <Form onSubmit={handleRateLimitedSubmit} noValidate={noValidate} {...restProps} />
}

export { FormRHF }
