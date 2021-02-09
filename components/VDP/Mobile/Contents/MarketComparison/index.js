import { Accordion } from '~/general'
import Scatter from './Scatter'

export default (props) =>
  <Accordion title='Market Comparison'>
    <p>Based on {props.scatterSimilar.length} similar vehicles in your area</p>
    <Scatter {...props} />
  </Accordion>
