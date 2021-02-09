import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'
import { placeholder } from '%/styles/mixins'

const placeholderStyles = placeholder`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${19 / 16};
  color: ${colors.gray};
`

const Input = styled.input`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${19 / 16};
  color: ${colors.gray};
  padding: ${rem(20)} 0;
  background: ${colors.white};
  font-family: inherit;
  ${placeholderStyles}
`

export default Input
