import styled from 'styled-components'
import { colors, grid } from '%/styles'
import { rgba, rem, em } from 'polished'
import { mediaMin } from '%/styles/mixins'

const checkPadding = props => props.noPadding
  ? null
  : `padding: ${rem(20)} ${rem(grid.gutter / 2)};`

const Body = styled.div`
  ${checkPadding}
  background-color: ${props => props.blue ? rgba(colors.blue, 0.09) : colors.white};
  color: #1f2938;
  ${mediaMin.laptop`
    background-color: #fff;
  `}

  p {
    font-size: ${rem(14)};
    line-height: ${16.8 / 14};
    margin-bottom: ${em(15, 14)};
  }
`

export default Body
