/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { breakpoints, grid } from '%/styles'
import Column from '../index'

import 'jest-styled-components'

const percentageCreator = num => `${(num / grid.columns) * 100}%`

describe('Column Component', () => {
  test('Column Passes the snapshot', () => {
    const component = renderer.create(<Column />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Responsive column widths and offsets', () => {
    const component = renderer.create(
      <Column
        phablet={{ offset: 3 }}
        laptop={{ cols: 11, offset: 2 }}
        desktop={{ cols: 10 }} />
    )
    const tree = component.toJSON()

    const expectactions = [
      { rule: 'width', percentage: 10, media: 'desktop' },
      { rule: 'width', percentage: 11, media: 'laptop' },
      { rule: 'margin-left', percentage: 3, media: 'phablet' },
      { rule: 'margin-left', percentage: 2, media: 'laptop' }
    ]

    expectactions.map(e => {
      expect(tree).toHaveStyleRule(e.rule, percentageCreator(e.percentage), { media: `(min-width:${breakpoints[e.media]}px)` })
    })
  })
})
