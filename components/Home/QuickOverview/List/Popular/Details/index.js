import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, em } from 'polished'

const Details = styled.p`
  display: block;
  color: ${colors.bluegray};
  font-size: ${rem(14)};
  line-height: ${22 / 14};
  margin-bottom: ${em(20, 14)};
`

export default Details
