/* eslint-disable no-unused-vars */
import React from 'react'
import { shallow } from 'enzyme'
import { findByAttr, setUp } from '../Utils'
import App from './App'

describe('should say true', () => {
  let wrapper
  beforeAll(() => {
    wrapper = setUp(shallow, App)
  })
  it('should be true', () => {
    expect(1 + 1).toBe(2)
  })
})
