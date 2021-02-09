/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CarLinks from './index'

describe('CarLinks Component', () => {
  test('CarLinks Passes shallow snapshot', () => {
    const links = [
      { name: 'SUV', route: '#' },
      { name: 'Sedan', route: '#' },
      { name: 'Pickup', route: '#' },
      { name: 'Coupe', route: '#' },
      { name: 'Hatchback', route: '#' },
      { name: 'Convertible', route: '#' },
      { name: 'Wagon', route: '#' },
      { name: 'Crossover', route: '#' }
    ]
    const wrapper = shallow(<CarLinks links={links} />)
    expect(wrapper).toMatchSnapshot()
  })
})
