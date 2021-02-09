import { Accordion } from '~/general'
import styled from 'styled-components'
import Charts from './Charts.js'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 20px !important;
  line-height: 2 !important;
`

export default ({ environmentalScores }) =>
  <Accordion title='Environmental Friendliness'>
    <Summary>
      Based upon EPA guidelines for measuring pollutants
    </Summary>

    {Object.keys(environmentalScores).length > 1 && <Charts {...environmentalScores} />}
  </Accordion>
