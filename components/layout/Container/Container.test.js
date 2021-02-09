/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Container from './index'

describe('Container Component', () => {
  test('Container Passes the snapshot', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
