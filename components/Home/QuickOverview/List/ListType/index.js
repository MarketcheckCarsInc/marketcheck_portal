import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, em } from 'polished'

const ListType = styled.h4`
  color: ${colors.blue};
  font-size: ${rem(20)};
  line-height: ${24 / 20};
  font-weight: 500;
  margin-bottom: ${em(30, 20)};
`

export default ListType
