import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, em } from 'polished'

const NewBadge = styled.span`
  color: ${colors.brightgreen};
  display: inline-block;
  font-size: ${rem(13)};
  line-height: ${15.6 / 13};
  padding: ${em(5, 13)} ${em(10, 13)};
  border-radius: ${rem(4)};
  border: 1px solid ${colors.brightgreen};
  text-align: center;
  margin-bottom: ${rem(10)};
`

export default NewBadge
