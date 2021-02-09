import styled from 'styled-components'
import { rem, em } from 'polished'
import { mediaMax } from '%/styles/mixins'

const H1 = styled.h1`
  font-size: ${rem(48)};
  font-weight: 700;
  line-height: ${58 / 48};
  margin-bottom: ${em(20, 48)};
  ${mediaMax.desktop`font-size: ${rem(40)};`}
  ${mediaMax.laptop`font-size: ${rem(36)};`}
  ${mediaMax.tablet`font-size: ${rem(30)};`}
  ${mediaMax.phablet`font-size: ${rem(26)};`}
`

export default H1
