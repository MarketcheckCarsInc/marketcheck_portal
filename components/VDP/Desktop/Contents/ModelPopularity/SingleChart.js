import styled from 'styled-components'
import LineChart from './LineChart.js'
import { colors } from '%/styles'
import { FlexRow, FlexCol } from '~/layout'

const SingleChart = styled.div`
  margin-bottom: 35px;
`

const Number = styled.h4`
  color: ${colors.softblue};
  font-size: 24px;
  line-height: 28.8px;
  margin-bottom: 5px;
  padding-left: 10px;
`

const Average = styled.span`
  display: block;
  color: #19212b;
  opacity: 0.56;
  margin-bottom: 15px;
  font-size: 10px;
  line-height: 12px;
`

const Versus = styled.h6`
  color: #19212b;
  opacity: 0.56;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 16.8px;
`

export default ({
  value,
  remaining,
  we,
  them
}) => {
  const MORE = value - remaining > 0
  const difference = Math.abs(value - remaining)
  return (
    <SingleChart>
      <FlexRow>
        <FlexCol cols={9}>
          <Versus>
            {we}
          </Versus>
          <LineChart
            value={value}
            remaining={remaining}
            color={MORE ? 'ultrared' : 'green'}
            more={MORE}
          />
        </FlexCol>
        <FlexCol cols={3}>
          <Number>
            {value} / {remaining}
          </Number>
          <Average>
            Average of {difference} { MORE ? 'more' : 'less' } DOM
          </Average>
        </FlexCol>
      </FlexRow>
    </SingleChart>
  )
}
