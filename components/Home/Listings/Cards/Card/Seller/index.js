import Icon from './external.svg'
import styled from 'styled-components'

import { em, rem } from 'polished'
import { colors } from '%/styles'

const External = styled(Icon)`
  width: ${em(10, 14)};
  fill: currentColor;
  margin-left: ${em(9, 14)};
`

const Seller = styled.h6`
  font-size: ${rem(14)};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${16.8 / 14};
  color: ${colors.blue};
`

export default ({
  children
}) =>
  <Seller>
    {children}
    <External />
  </Seller>
