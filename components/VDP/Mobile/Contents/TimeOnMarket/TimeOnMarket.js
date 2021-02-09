import React from 'react'
import Accordion, { FillBody } from '~/general/Accordion'
import styled from 'styled-components'
import CircleGraphs from './CircleGraphs'
import Summary from './Summary.js'

const P = styled.p`
  opacity: 0.56;
`

export default ({ dom, localAverage, nationalAverage, vinHistory }) =>
  <Accordion title='Time on Market' blue >
    <FillBody first >
      <P>Listed for sale for {dom} days</P>
      <CircleGraphs dom={dom} localAverage={localAverage.toFixed(0)} nationalAverage={nationalAverage.toFixed(0)} />
    </FillBody>
    <FillBody customBackground='transparent'>
      <Summary vinHistory={vinHistory} />
    </FillBody>
  </Accordion>
