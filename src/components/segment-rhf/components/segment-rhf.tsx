import React from 'react'

import { FormItemRHF } from '@/components/form-item-rhf'
import { getFormItemProps } from '@/utils/split-form-item-props'
import { Segment, SegmentItem, SegmentList, VisuallyHidden, chain, cx } from '@renderui/core'
import { FieldValues, Path } from 'react-hook-form'
import { SegmentRHFProps } from '../types/segment-rhf'
import { RING_FOCUS_VISIBLE_CLASSNAME } from '@/constants/constants'

const SegmentRHF = <F extends FieldValues, N extends Path<F>>(props: SegmentRHFProps<F, N>) => {
  const { formItemProps, componentProps } = getFormItemProps(props)

  const { children, ...restFormItemProps } = formItemProps
  const { listProps, items, onValueChange, ...restProps } = componentProps

  return (
    <FormItemRHF {...restFormItemProps}>
      {({ field, fieldState, id }) => (
        <>
          <Segment
            id={id}
            value={field.value}
            onValueChange={chain(field.onChange, onValueChange)}
            {...restProps}
          >
            <SegmentList {...listProps}>
              {items?.map((item, index) => {
                const { value, label, className, ...restItemProps } = item

                return (
                  <SegmentItem
                    key={value}
                    value={value}
                    data-invalid={Boolean(fieldState.error)}
                    ref={index === 0 ? field.ref : undefined}
                    className={cx(RING_FOCUS_VISIBLE_CLASSNAME, className)}
                    {...restItemProps}
                  >
                    {label}
                  </SegmentItem>
                )
              })}
            </SegmentList>
            <VisuallyHidden>
              <input
                tabIndex={-1}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            </VisuallyHidden>
          </Segment>
          {children}
        </>
      )}
    </FormItemRHF>
  )
}

export { SegmentRHF }
