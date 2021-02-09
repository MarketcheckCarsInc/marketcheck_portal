import Section from '~/VDP/Section'
import styled from 'styled-components'
import LineChart from './LineChart'
import { currency, number } from '%/format'

const P = styled.p`
  opacity: 0.56;
`
const H2 = styled.h2`
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 5px;
`

const Right = styled.div`
  max-width: 30%;
  margin-left: auto;
`

export default ({ trends, miles, averageMarketMiles, ...props }) =>
  <Section id={props.id} name={props.id} title='Averages Over Time' summary={`Based on ${trends.length} Similar Vehicles Nearby`} className={props.className}>
    <Right>
      <H2>{miles ? number(miles) +'mi' : ''} </H2>
      <P>{miles && miles > props.stats.miles.mean ? number(miles - Math.round(props.stats.miles.mean)) + ' miles more' : number(Math.round(props.stats.miles.mean) - miles) + ' miles less'} than market average</P>
    </Right>
    <LineChart dataTrend={trends} />
  </Section>
