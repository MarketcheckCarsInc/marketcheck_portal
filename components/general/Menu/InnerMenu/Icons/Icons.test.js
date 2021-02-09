/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Icons from './index'

describe('Icons Component', () => {
  test('Icons Passes the snapshot', () => {
    const component = renderer.create(<Icons />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
