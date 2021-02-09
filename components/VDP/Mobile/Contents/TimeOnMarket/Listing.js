import styled from 'styled-components'
import External from './external.svg'
import { colors } from '%/styles'
import { FlexRow } from '~/layout'
import StatCol from './StatCol.js'
import Moment from 'react-moment'

const Listing = styled.div`
  margin-bottom: 40px;
`

const DateRange = styled.h6`
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
`
const Vendor = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14.4px;
  color: ${colors.blue};
  margin-bottom: 8px;

  svg {
    margin-left: 8px;
    width: 8px;
    height: 8px;
  }
`

export default (props) =>
  <Listing>
    <DateRange><Moment format='MMM DD, YYYY'>{props.initialDate}</Moment> - <Moment format='MMM DD, YYYY'>{props.lastDate}</Moment></DateRange>
    <Vendor href={props.source} target='_blank'>
      {props.sellerName}
      <External />
    </Vendor>
    <FlexRow noMargin >
      <StatCol money gain={props.priceDifference > 0} price={props.price} carMiles={props.miles} priceDifference={props.priceDifference} />
      <StatCol gain={props.milesDifference > 0} carMiles={props.miles} milesDifference={props.milesDifference} />
    </FlexRow>
  </Listing>
