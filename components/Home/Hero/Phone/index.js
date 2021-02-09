import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

import SVG from './phone.svg'

const Phone = styled(SVG)`
  fill: ${colors.white};
  width: ${rem(12)};
  margin-right: ${rem(8)};
`

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${rem(14)};
  margin-top: ${rem(20)};
  font-weight: 700;
`

export default () => (
  <A href='tel:8019186647'>
    <Phone />
    801 918 6647
  </A>
)
