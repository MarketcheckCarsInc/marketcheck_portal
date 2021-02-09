/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Search from './index'

describe('Search Component', () => {
  test('Search Passes the snapshot', () => {
    const component = renderer.create(<Search />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
