import styled from 'styled-components'

import { rem } from 'polished'
import { grid } from '%/styles'

const conditionalWidth = props =>
  props.open
    ? `calc(100% + ${rem(grid.gutter)})`
    : '100%'

const conditionalMargin = props =>
  props.open
    ? `${rem(grid.gutter / 2 * -1)}`
    : '0'

const Wrapper = styled.div`
  width: ${conditionalWidth};
  margin-left: ${conditionalMargin};
  transition: 0.3s;
`

export default Wrapper
