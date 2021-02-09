import { clearFix, rem } from 'polished'
import styled from 'styled-components'
import { grid } from '%/styles'

const padding = rem(grid.gutter / 2)

const Container = styled.div`
  ${clearFix()}
  position: relative;
  margin: 0 auto;
  max-width: ${rem(1170 + grid.gutter)};
  padding: 0 ${padding};
`

export default Container
