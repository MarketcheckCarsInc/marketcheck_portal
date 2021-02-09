import styled from 'styled-components'
import { FlexRow as FR, Container } from '~/layout'
import { currency, number } from '%/format'
import { Button } from '~/general'
import Share from './share.svg'
import Like from './like.svg'
import Icon from './Icon'

import Price from './Price'
import Text from './Text'
import {colors} from '%/styles'

const FlexRow = styled(FR)`
  margin-bottom: 10px;
`
const calculateDelta = (mean_value, value, label) => {
    let delta = 0
    let mean = Math.round(mean_value)
    if(mean != null && value != null){
        delta = value - mean
    }
    let formated_delta = ""
    if(label === "price"){
        formated_delta = currency(Math.abs(delta))
    }else{
        formated_delta = number(Math.abs(delta))
    }

    if(delta < 0) {
        return(<Text>{formated_delta} {label === "miles" ? label : ''} less than market average</Text>)
    }else if (delta > 0){
        return(<Text style={{color: colors.red }}>{formated_delta} {label === "miles" ? label : ''} more than market average</Text>)
    }else{
        return (<Text ></Text>)
    }

}

export default ({
  price,
  discount,
  miles,
  averages,
  vdpUrl,
  stats
}) => {
  return (
    <Container>
      <FlexRow noMargin >
        <Price>{currency(price)}</Price>
        <Button primary lowercase href={vdpUrl} target='_blank'>View on dealer website</Button>
      </FlexRow>
        {(stats.price ? calculateDelta(stats.price.mean, price, "price") : "")}
        {(stats.miles ? calculateDelta(stats.miles.mean, miles, "miles") : "")}
      <FlexRow noMargin >
        <Icon href='#'><Share /></Icon>
      </FlexRow>
    </Container>)
}
