import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { grid } from '%/styles'

const gutter = rem(grid.gutter / 2)

const Row = styled.div`
  ${clearFix()}
  margin: 0 -${gutter};
`

export default Row
