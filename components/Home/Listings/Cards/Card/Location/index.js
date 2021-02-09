import styled from 'styled-components'
import { rem, em, rgba } from 'polished'
import { colors } from '%/styles'

const Location = styled.h5`
  font-size: ${rem(16)};
  line-height: ${19.2 / 16};
  color: ${rgba(colors.black, 0.72)};
  margin-bottom: ${em(30, 16)};
`

export default Location
