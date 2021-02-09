/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import InnerMenu from './index'

describe('InnerMenu Component', () => {
  test('InnerMenu Passes the snapshot', () => {
    const component = renderer.create(<InnerMenu />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
