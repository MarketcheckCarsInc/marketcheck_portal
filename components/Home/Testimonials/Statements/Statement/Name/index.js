import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const Name = styled.h4`
  font-size: ${rem(16)};
  line-height: ${19 / 16};
  font-weight: 500;
  color: ${colors.black};
  margin-bottom: ${em(5, 16)};
`

export default Name
