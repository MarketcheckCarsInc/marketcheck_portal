/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Logo from './index'

describe('Snapshot test passes', () => {
  it('Passes the snapshot', () => {
    const component = renderer.create(<Logo />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
