import {
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
  messageType: 'description' | 'error'
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
    messageType,
  } = props

  const { className: collapsibleClassName } = getOptionalObject(collapsibleProps)
  const { className: collapsibleContentClassName } = getOptionalObject(collapsibleContentProps)

  return (
    <Collapsible open={isOpen} className={cx('min-h-8 mt-1 bottom-0', collapsibleClassName)}>
      <CollapsibleContent
        className={cx(
          'pl-0.5 text-sm',
          messageType === 'description' ? 'text-mode-contrast-accent' : 'text-destructive',
          collapsibleContentClassName,
        )}
      >
        {error ?? fieldStateError ?? previousFieldStateError ?? description}
      </CollapsibleContent>
    </Collapsible>
  )
}

export { Message }
