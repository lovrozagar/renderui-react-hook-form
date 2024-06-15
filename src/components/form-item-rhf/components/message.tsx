import {
  Box,
  Collapsible,
  CollapsibleContent,
  CollapsibleContentProps,
  CollapsibleProps,
  cx,
  getOptionalObject,
} from '@renderui/core'
import React from 'react'

type MessageProps = {
  isOpen: boolean
  collapsibleProps?: CollapsibleProps
  collapsibleContentProps?: CollapsibleContentProps
  error: string | undefined
  fieldStateError: string | undefined
  previousFieldStateError: string | undefined
  description: string | undefined
}

const Message = (props: MessageProps) => {
  const {
    isOpen,
    collapsibleProps,
    collapsibleContentProps,
    error,
    fieldStateError,
    previousFieldStateError,
    description,
  } = props

  const { className: collapsibleContentClassName } = getOptionalObject(collapsibleContentProps)

  return (
    <Box className={'relative min-h-8 mt-1 bottom-0 order-3 col-span-full'}>
      <Collapsible open={isOpen} {...collapsibleProps}>
        <CollapsibleContent
          className={cx(
            'absolute inset-0 size-full z-[1] pl-0.5 text-sm duration-0',
            isOpen ? 'text-destructive' : 'text-transparent',
            collapsibleContentClassName,
          )}
        >
          {error || fieldStateError || previousFieldStateError}
        </CollapsibleContent>
      </Collapsible>
      <Box
        className={cx(
          'absolute inset-0 size-full z-0 text-sm pl-0.5 transition-[opacity]',
          isOpen ? 'opacity-0 duration-0' : 'duration-150 opacity-100',
        )}
      >
        {description}
      </Box>
    </Box>
  )
}

export { Message }
