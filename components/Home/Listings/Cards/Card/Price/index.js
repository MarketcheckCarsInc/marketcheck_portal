import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const Price = styled.h4`
  font-size: ${rem(18)};
  line-height: ${21.6 / 18};
  color: ${colors.black};
  margin-bottom: ${em(12, 18)};
`

export default Price
