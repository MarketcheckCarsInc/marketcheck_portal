import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'

const Price = styled.h1`
  font-size: ${rem(36)};
  line-height: ${43.2 / 36};
  color: ${colors.mobileBlack};
  margin-right: auto;
`

export default Price
