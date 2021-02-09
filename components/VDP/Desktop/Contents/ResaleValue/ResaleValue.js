import Section from '~/VDP/Section'
import LineChart from './LineChart.js'
import Similar from './Similar.js'
import Aux from 'react-aux'

export default ({ resaleValue, similarModelsGraph }) =>
  <Section id='resaleContainer' title='Model Resale Value' summary='Based upon avg. depreciation rates'>
    {resaleValue &&
    <Aux>
      <Similar leftText='Similar Models' rightText='Current Value' resaleValue={resaleValue} timeValue='current_value' />
      <Similar rightText='1 Year From Now' resaleValue={resaleValue} timeValue='one_year_from_now' />
      <Similar rightText='2 Years From Now' resaleValue={resaleValue} timeValue='two_year_from_now' />
      <Similar rightText='5 Years From Now' resaleValue={resaleValue} timeValue='five_year_from_now' />
      <LineChart similarModelsGraph={similarModelsGraph} />
    </Aux>
    }
  </Section>
