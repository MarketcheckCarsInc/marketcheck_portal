import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { grid } from '%/styles'

import { mediaMin, percentage } from '%/styles/mixins'

const padding = rem(grid.gutter / 2)

const LargeColumn = styled.div`
  ${clearFix()}
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 100%;
  ${mediaMin.phablet`width: ${percentage(1, 2)}`}
  ${mediaMin.laptop`width: ${percentage(3.5, 10)}`}
`

export default LargeColumn
