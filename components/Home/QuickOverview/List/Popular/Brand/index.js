import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, em } from 'polished'

const Brand = styled.a`
  display: block;
  color: ${colors.blue};
  font-size: ${rem(14)};
  line-height: ${16.8 / 14};
  font-weight: 500;
  margin-bottom: ${em(10, 14)};
`

export default Brand
