import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const CarModel = styled.h6`
  font-size: ${rem(12)};
  line-height: ${22 / 12};
  margin-bottom: ${em(15, 12)};
  color: ${colors.bluegray};
`

export default CarModel
