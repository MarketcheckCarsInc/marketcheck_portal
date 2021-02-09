import { clearFix, rem } from 'polished'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { colors, grid } from '%/styles'

const padding = rem(grid.gutter / 2)

const OutContainer = styled.div`
  ${clearFix()}
  position: relative;
  margin: 0 auto;
  left: -125px;
  max-width: ${rem(1170 + 250 + grid.gutter)};
  width: 100%;
  padding: 0 ${padding};
  ${mediaMax.srpDesktop`
    left: auto;
    max-width: ${rem(1170 + grid.gutter)};
  `}
  ${mediaMax.desktop`
    left: auto;
    max-width: ${rem(980 + grid.gutter)};
  `}
  ${mediaMax.largeTablet`
    left: auto;
    max-width: ${rem(768 + grid.gutter)};
  `}
  ${mediaMax.phone`
    background-color: ${colors.bordergray};
  `}
`

export default OutContainer
