import Seller from './Seller'
import Slideshow from './Slideshow'
import {colors} from '%/styles'
import Share from '../../../../../SRP/Contents/Results/AutoCard/CarData/ShareComponent'
import {
  Car,
  NewBadge,
  Features,
  Name,
  Title,
  Details,
  PriceRow,
  Price,
  Deal,
  Average,
  PicWrapper,
  Info,
  ShareBtn
} from './Components.js'

import {
  Bluetooth,
  Cam,
  Wheels,
  Geo,
  Air,
  Brake,
  Keyless,
  Certified,
  Like,
  Soon
} from './Icons'

import { cutString, ellipsis, currency, number, capitalize } from '%/format'

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
        return(<Average>{formated_delta} {label === "miles" ? label : ''} less than market average</Average>)
    }else if (delta > 0){
        return(<Average style={{color: colors.red }}>{formated_delta} {label === "miles" ? label : ''} more than market average</Average>)
    }else{
        return (<Average ></Average>)
    }

}


const getName = (data) => {
    const name = data.build.year + " " +
        data.build.make + " " +
        data.build.model + " " +
        (data.exterior_color ? data.exterior_color : '')

    return name
}

export default ({
  props,
  dealer,
  distance,
  rating,
  reviews,
  website,
  name,
  price,
  pictures,
  transmission,
  miles,
  cityMiles,
  highwayMiles,
  vdpUrl,
  stats
}) =>
  <Car>
    <Slideshow data={props} />
    {/*<PicWrapper>*/}
      {/*{picture*/}
            {/*? <img src={picture} />*/}
            {/*: <Soon />*/}
        {/*}*/}
    {/*</PicWrapper>*/}

    <Info>
      <NewBadge>{capitalize(props.car_type? props.inventory_type : "used")}</NewBadge>

      <Title>
        <Name target="__blank" href={'/vdp/'+props.vin}>
            {
                cutString(getName(props), 35)
            }
        </Name>
        <Certified />
      </Title>

      <Details>
                {transmission ? transmission + ", " : ""}
                {miles? number(miles) + " mi, " : ""}
                {parseInt(cityMiles)}/{parseInt(highwayMiles)} MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        {/*<Deal>Great Deal!</Deal>*/}
        {/*<Like />*/}
          <ShareBtn>
              <Share title={getName(props)} link={'/vdp/' + props.vin} />
          </ShareBtn>
      </PriceRow>
        {(stats.price ? calculateDelta(stats.price.mean, price, "price") : "")}
      {/*<Average>{currency(874)} less than market average</Average>*/}

      {false ?
      <Features>
        <Bluetooth />
        <Cam />
        <Wheels />
        <Geo />
        <Air />
        <Brake />
        <Keyless />
      </Features> :
      null
      }

    </Info>
    { reviews && rating &&
      <Seller
        name={dealer.name}
        city={dealer.city}
        state={dealer.state}
        distance={24}
        rating={rating.overall_rating}
        reviews={reviews.overall_reviews}
        website={website}
        vdpUrl={vdpUrl}
      />
    }
  </Car>
