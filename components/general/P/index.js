import styled from 'styled-components'
import { rem, em } from 'polished'

import { mediaMax } from '%/styles/mixins'

const P = styled.p`
  font-size: ${rem(18)};
  line-height: ${28 / 18};
  margin-bottom: ${em(20, 18)};
  ${mediaMax.laptop`font-size: ${rem(16)};`}
  ${mediaMax.tablet`font-size: ${rem(14)};`}
`

export default P
