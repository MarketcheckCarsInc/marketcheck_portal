import styled from 'styled-components'
import SVG from './pin.svg'
import { rem } from 'polished'
import { colors } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const Geolocation = styled(SVG)`
  width: ${rem(12)};
  fill: ${colors.gray};
  margin-right: ${rem(15)};
  display: none;
  ${mediaMin.phablet`display: block;`}
`

export default Geolocation
