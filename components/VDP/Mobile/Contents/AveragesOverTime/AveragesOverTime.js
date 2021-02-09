import Accordion, { FillBody } from '~/general/Accordion'
import styled from 'styled-components'
import LineChart from './LineChart'
import { colors } from '%/styles'
import { currency, number } from '%/format'

const P = styled.p`
  opacity: 0.56;
`
const H2 = styled.h2`
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 5px;
`

const SummaryWrapper = styled.div`
  padding: 18px 0;
  text-align: center;
  margin-bottom: 40px;
`

const Summary = styled.h4`
  font-size: 12px;
`

export default ({ trends, miles, averageMarketMiles, ...props}) =>
  <Accordion title='Averages Over Time' blue className={props.className}>
    <FillBody first >
      <P>Based on {trends.length} Similar Vehicles Nearby</P>
      <H2>{number(miles)} mi</H2>
      <P>{miles > averageMarketMiles ? number(miles - averageMarketMiles) + ' miles more' : number(averageMarketMiles - miles) + ' miles less'} than market average</P>
      <LineChart dataTrend={trends} />
    </FillBody>
    <FillBody noPadding customBackground={colors.darkblue} customColor={colors.white} >
      <SummaryWrapper>
        {<Summary>{trends.length} Month Market Averages - {trends[0].month + '/' + trends[0].year} Through {trends[trends.length - 1].month + '/' + trends[trends.length - 1].year}</Summary>}
      </SummaryWrapper>
    </FillBody>
  </Accordion>
