import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const determineColor = props =>
  props.primary
    ? colors.green
    : colors.black

const Button = styled.a`
  background-color: ${determineColor};
  font-size: ${rem(14)};
  font-weight: 700;
  line-height: ${17 / 14};
  color: ${colors.white};
  text-transform: ${props => props.lowercase ? 'none' : 'uppercase'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${em(14, 14)} ${em(27, 14)};
  border-radius: ${rem(4)};
  min-width: ${em(145, 14)};
  ${mediaMax.tablet`
    font-size: ${rem(13)};
    line-height: ${15.6 / 13};
    padding: ${em(5, 13)} ${em(10, 13)};
  `}
`

export default Button
