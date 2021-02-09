import Section from '~/VDP/Section'
import CircleGraphs from './CircleGraphs'
import Summary from './Summary.js'

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 80%;
`

export default ({ dom, localAverage, nationalAverage, vinHistory}) =>
  <Section id='historyContainer' title='Time on Market' summary={`Listed for sale for ${dom} ${dom>1 ? 'days' : 'day'}`}>

    <Wrapper>
      <CircleGraphs dom={dom} localAverage={localAverage.toFixed(0)} nationalAverage={nationalAverage.toFixed(0)} />
      <Summary vinHistory={vinHistory} />
    </Wrapper>

  </Section>
