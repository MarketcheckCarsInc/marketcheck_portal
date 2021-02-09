/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'
import { breakpoints } from '%/styles'

import mediaMin from '../mediaMin'

const Container = styled.div`
  font-size: 2em;
  ${mediaMin.laptop`padding: 0 20px;`}
  ${mediaMin.desktop`color: red;`}
`

describe('Media Mixin', () => {
  test('Renders proper desktop styles', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    const width = breakpoints.desktop + 'px'
    expect(tree).toHaveStyleRule('color', 'red', { media: `(min-width:${width})` })
  })

  test('Renders proper laptop styles', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    const width = breakpoints.laptop + 'px'
    expect(tree).toHaveStyleRule('padding', '0 20px', { media: `(min-width:${width})` })
  })
})
