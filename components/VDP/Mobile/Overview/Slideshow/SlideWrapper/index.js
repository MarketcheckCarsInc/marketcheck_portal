import styled from 'styled-components'

import { rem } from 'polished'
import { grid } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const SliderWrapper = styled.div`
  width: calc(100% + ${rem(grid.gutter)});
  margin-left: ${rem(grid.gutter / 2 * -1)};
  margin-bottom: 18px;
  ${mediaMin.laptop`
    margin-bottom: 55px;
  `}
`

export default SliderWrapper
