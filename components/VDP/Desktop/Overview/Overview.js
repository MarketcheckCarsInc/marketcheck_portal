import { Container, FlexRow, FlexCol } from '~/layout'
import Slideshow from './Slideshow'
import { currency, number } from '%/format'
import Share from '../../../SRP/Contents/Results/AutoCard/CarData/ShareComponent'
import {colors} from '%/styles'
import {
  TopRow,
  CarName,
  Wrapper,
  Brief,
  Price,
  Text,
  Icon,
  Like,
  ThreeSixty,
  Play,
  Slides,
  TabLink
} from './Components'

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
  pageTitle,
  props,
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles,
  averages,
  vin,
  stats
}) => {
    return (
        <Wrapper>
          <TopRow>
            <Container>
              <FlexRow align='flex-end'>
                <FlexCol cols={9}>
                  <FlexRow noMargin align='center'>
                    <CarName style={{marginRight: "16px"}}>{pageTitle}</CarName>
                    {/*<Icon href='#' style={{marginRight: '16px'}}><Like /></Icon>*/}
                    <Share title={pageTitle} link={'/vdp/' + vin} />
                  </FlexRow>
                  <Brief>{brief}</Brief>
                </FlexCol>
                {/*<FlexCol cols={3}>*/}
                  {/*<FlexRow noMargin justify='flex-end'>*/}
                    {/*<TabLink active >*/}
                      {/*<Slides />*/}
                    {/*</TabLink>*/}
                    {/*<TabLink>*/}
                      {/*<Play />*/}
                    {/*</TabLink>*/}
                    {/*<TabLink>*/}
                      {/*<ThreeSixty />*/}
                    {/*</TabLink>*/}
                  {/*</FlexRow>*/}
                {/*</FlexCol>*/}
                <FlexCol cols={3}>
                  <Price>{currency(price)}</Price>
                    {(stats.price ? calculateDelta(stats.price.mean, price, "price") : "")}
                    {(stats.miles ? calculateDelta(stats.miles.mean, miles, "miles") : "")}
                    {/*{calculateDelta(stats.price.mean, price, "price")}*/}
                    {/*{calculateDelta(stats.miles.mean, miles, "miles")}*/}
                  {/*<Text>{price > stats.price.mean ? currency(price - stats.price.mean) + ' more' : currency(stats.price.mean - price) + ' less'} than market average</Text>*/}
                  {/*<Text>{miles > stats.miles.mean ? number(miles - stats.miles.mean) + ' miles more' :  + ' miles less'} than market average</Text>*/}
                </FlexCol>
              </FlexRow>
            </Container>
          </TopRow>
          <Container>
            <Slideshow slides={sliderPics} />
          </Container>
        </Wrapper>
    )
}
