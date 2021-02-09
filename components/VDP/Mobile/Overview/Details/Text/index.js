import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const Text = styled.p`
  font-size: ${rem(14)};
  line-height: ${16.8 / 14};
  color: ${colors.green};
  margin-bottom: ${em(8, 14)};
`

export default Text
