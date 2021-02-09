/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Links from './index'

describe('Links Component', () => {
  test('Links Passes the snapshot', () => {
    const component = renderer.create(<Links />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
