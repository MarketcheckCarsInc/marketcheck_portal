import styled from 'styled-components'

const ChartWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  .recharts-legend-wrapper {
    bottom: 0 !important;
  }

  .recharts-default-legend {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .recharts-legend-item {
    display: flex !important;
    align-items: center;
  }
`

export default ChartWrapper
