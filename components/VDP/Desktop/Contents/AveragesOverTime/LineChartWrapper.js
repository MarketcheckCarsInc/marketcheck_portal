import styled from 'styled-components'
import { grid } from '%/styles'
import { rem } from 'polished'

const Component = styled.div`
  position: relative;
  width: calc(100% + ${rem(grid.gutter)});
  margin-left: -${rem(grid.gutter / 2)};
  margin-top: 40px;

  .recharts-default-legend {
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
  }

  .recharts-legend-item {
    display: flex !important;
    align-items: center;
    margin-left: ${rem(grid.gutter / 2)};
  }

  .recharts-layer {
    & > [stroke] {
      stroke-width: 4;
    }
  }
`

export default Component
