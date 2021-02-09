import styled from 'styled-components'
import { rem, em, rgba } from 'polished'
import { colors } from '%/styles'

const Difference = styled.h6`
  font-size: ${rem(14)};
  line-height: ${16.8 / 14};
  color: ${rgba(colors.black, 0.72)};
  margin-bottom: ${em(10, 14)};
`

export default Difference
