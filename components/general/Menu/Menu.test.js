/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Menu from './index'

describe('Menu Component', () => {
  test('Menu Passes the snapshot', () => {
    const component = renderer.create(<Menu />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
