/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Account from './index'

describe('Account Component', () => {
  test('Account Passes the snapshot', () => {
    const component = renderer.create(<Account />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
