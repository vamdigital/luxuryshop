/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
import React from 'react'
import { shallow } from 'enzyme'
import { findByAttr } from '../Utils'
import { App } from './App'

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />)
  return component
}

describe('<App />', () => {
  let wrapper
  const incrementMock = jest.fn()
  beforeAll(() => {
    wrapper = setUp({ count: 0, increment: incrementMock })
  })
  it('should render h1 tag with Hello world !', () => {
    const title = findByAttr(wrapper, 'title').text()
    expect(title).toBe('Sample Counter App with React - Redux - Reselect')
  })
  // Check increment Button exist
  it('should render an increment button', () => {
    const incrementButton = findByAttr(wrapper, 'increment-button')
    expect(incrementButton).toHaveLength(1)
  })

  it('should trigger a click on increment Button and add count by 1', () => {
    // const countText = wrapper.find('[data-qa="count"]').text()
    const incrementButton = findByAttr(wrapper, 'increment-button')
    incrementButton.simulate('click', {
      preventDefault() {}
    })
    expect(incrementMock).toHaveBeenCalled()
  })
})
