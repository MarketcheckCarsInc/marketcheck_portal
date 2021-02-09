import styled from 'styled-components'
import { rem, em } from 'polished'
import { mediaMax } from '%/styles/mixins'

const H2 = styled.h2`
  font-size: ${rem(40)};
  font-weight: 700;
  line-height: ${48 / 40};
  margin-bottom: ${em(20, 40)};
  letter-spacing: -0.5px;
  ${mediaMax.hd`font-size: ${rem(38)};`}
  ${mediaMax.desktop`font-size: ${rem(34)};`}
  ${mediaMax.laptop`font-size: ${rem(32)};`}
  ${mediaMax.tablet`font-size: ${rem(28)};`}
  ${mediaMax.phablet`font-size: ${rem(24)};`}
`

export default H2
