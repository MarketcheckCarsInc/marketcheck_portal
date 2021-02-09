import styled from 'styled-components'
import SVG from './pin.svg'
import { rem } from 'polished'
import { colors } from '%/styles'
import { mediaMin } from '%/styles/mixins'

export const GeolocationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 5%;
  z-index: 999;
  ${mediaMin.phablet`
    padding: 0 20px;
  `}
`

export const Geolocation = styled(SVG)`
  width: ${rem(12)};
  fill: ${colors.gray};
  margin-right: ${rem(15)};
  display: none;
  ${mediaMin.phablet`display: block;`}
`
