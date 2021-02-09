/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Row from './index'

describe('Row Component', () => {
  test('Row Passes shallow snapshot', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper).toMatchSnapshot()
  })
})
