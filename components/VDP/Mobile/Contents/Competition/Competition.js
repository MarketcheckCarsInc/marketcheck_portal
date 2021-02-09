import { Accordion } from '~/general'
import styled from 'styled-components'
import Averages from './Averages.js'
import Similar from './Similar.js'

const Summary = styled.p`
  opacity: 0.54;
  margin-bottom: 25px !important;
`

export default (props) =>
  <Accordion title='The Competition' className={props.className} {...props}>
    <Summary>
      Similar cars currently for sale
    </Summary>
    <Averages {...props} />
    <Similar {...props} />
  </Accordion>
