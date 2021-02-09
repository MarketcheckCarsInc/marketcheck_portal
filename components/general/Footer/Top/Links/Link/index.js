import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const Link = styled.a`
  display: block;
  color: ${colors.white};
  font-size: ${rem(12)};
  line-height: ${14.4 / 12};
  margin-bottom: ${em(20, 12)};
`

export default Link
