/* eslint-disable import/prefer-default-export */
import React from 'react'

export const findByAttr = (component, attribValue) => {
  const wrapper = component.find(`[data-qa='${attribValue}']`)
  return wrapper
}

export const setUp = (type, component, props = {}) => {
  const el = type(<component {...props} />)
  return el
}
