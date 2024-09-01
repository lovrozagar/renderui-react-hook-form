import type { FormItemRHFFormProps } from '@/components/form-item-rhf/types/form-item-rhf'
import { Box, Collapsible, CollapsibleContent, Text, cx, getOptionalObject } from '@renderui/core'
import React from 'react'

type MessageProps = {
	error: string | undefined
	fieldStateError: string | undefined
	description: string | undefined
} & Pick<
	/* biome-ignore lint/suspicious/noExplicitAny: allow generic */
	FormItemRHFFormProps<any, any>,
	| 'errorDescriptionContainerProps'
	| 'errorProps'
	| 'errorContentProps'
	| 'errorTextProps'
	| 'descriptionProps'
	| 'descriptionContentProps'
	| 'descriptionTextProps'
>

const Message = (props: MessageProps) => {
	const {
		error,
		fieldStateError,
		description,
		errorDescriptionContainerProps,
		errorProps,
		errorContentProps,
		errorTextProps,
		descriptionProps,
		descriptionContentProps,
		descriptionTextProps,
	} = props

	const { className: errorDescriptionContainerClassName, ...restErrorDescriptionContainerProps } =
		getOptionalObject(errorDescriptionContainerProps)

	const { className: errorContentClassName, ...restErrorContentProps } =
		getOptionalObject(errorContentProps)

	const { className: errorTextClassName, ...restErrorTextProps } = getOptionalObject(errorTextProps)

	const { className: descriptionContentClassName, ...restDescriptionContentProps } =
		getOptionalObject(descriptionContentProps)

	const { className: descriptionTextClassName, ...restDescriptionTextProps } =
		getOptionalObject(descriptionTextProps)

	const displayError = error || fieldStateError

	const [previousError, setPreviousError] = React.useState(displayError)

	React.useEffect(() => {
		if (!displayError) return

		setPreviousError(displayError)
	}, [displayError])

	return (
		<Box
			className={cx(
				'min-h-7 mt-1 bottom-0 order-3 col-span-full overflow-hidden',
				errorDescriptionContainerClassName,
			)}
			{...restErrorDescriptionContainerProps}
		>
			<Collapsible open={Boolean(displayError)} {...errorProps}>
				<CollapsibleContent
					className={cx('pl-0.5', errorContentClassName)}
					{...restErrorContentProps}
				>
					<Text
						className={cx('block min-h-4 text-sm text-destructive', errorTextClassName)}
						{...restErrorTextProps}
					>
						{previousError}
					</Text>
				</CollapsibleContent>
			</Collapsible>
			{description ? (
				<Collapsible open={!displayError} {...descriptionProps}>
					<CollapsibleContent
						className={cx('pl-0.5 ', descriptionContentClassName)}
						{...restDescriptionContentProps}
					>
						<Text
							className={cx('block text-sm text-mode-contrast/60', descriptionTextClassName)}
							{...restDescriptionTextProps}
						>
							{description}
						</Text>
					</CollapsibleContent>
				</Collapsible>
			) : null}
		</Box>
	)
}

export { Message }
