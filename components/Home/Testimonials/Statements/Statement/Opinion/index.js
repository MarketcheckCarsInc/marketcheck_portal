import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

const Opinion = styled.p`
  font-size: ${rem(14)};
  line-height: ${22 / 14};
  color: ${colors.bluegray};
  max-width: ${rem(175)};
  margin: 0 auto;
`

export default Opinion
