import styled from 'styled-components'
import { rem, em, rgba } from 'polished'
import { placeholder } from '%/styles/mixins'
import { colors } from '%/styles'

const Input = styled.input`
  font-size: ${rem(14)};
  line-height: 1;
  padding: ${em(13.5, 14)};
  color: ${rgba('#232a35', 0.72)};
  text-align: center;
  background: ${colors.white};
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-bottom: ${rem(20)};
  ${placeholder`
    font-size: ${rem(14)};
    line-height: 1;
    color: ${rgba('#232a35', 0.72)};
  `}
`

export default Input
