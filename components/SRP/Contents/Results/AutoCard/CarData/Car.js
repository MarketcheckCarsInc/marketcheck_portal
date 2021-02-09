import { cutString, currency, capitalize } from '%/format'
import Share from './ShareComponent'
import {colors} from '%/styles'

import {
  Car,
  Wrapper,
  NewBadge,
  Features,
  Name,
  Title,
  Details,
  PriceRow,
  Price,
  ModalContainer,
  Deal,
  Average,
  Dom
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
  Like
} from './Icons'

const calculateDelta = (stats, price) => {
    let delta = 0
    let mean = Math.round(stats.price.mean)
    if(mean != null && price != null){
      delta = price - mean
    }

    if(delta < 0) {
        return (<Average>{currency(Math.abs(delta))} less than market average</Average>)
    }else if (delta > 0){
            return (<Average style={{color: colors.red }} >{currency(delta)} more than market average</Average>)
    }else{
        return (<Average ></Average>)
    }

}

export default (props) => {
  return (
    <Wrapper>
      <Car>
        <NewBadge>{capitalize(props.filters.car_type)}</NewBadge>

        <Title>
          <Name target="__blank" href={props.data.vdp_url.includes("?") ? props.data.vdp_url + "&utm_campaign=vdp_deeplink&utm_medium=referral&utm_source=marketcheck.com" : props.data.vdp_url + "?utm_campaign=vdp_deeplink&utm_medium=referral&utm_source=marketcheck.com"}>
          {
            cutString(
              (
                props.data.build.year + " " +
                props.data.build.make + " " +
                props.data.build.model + " " +
                (props.data.exterior_color ? props.data.exterior_color : '')
              ), 35
            )
          }
          </Name>
          {props.data.is_certified && props.data.is_certified == 1 ? <Certified /> : null }
        </Title>

        <Details>
        {
          (props.data.build.transmission ? props.data.build.transmission : '') + " " +
          (props.data.miles ? props.data.miles + "mi., " : '') +
          (props.data.build.city_miles ? props.data.build.city_miles.substring(0,2) : '') +
          "/" +
          (props.data.build.highway_miles ? props.data.build.highway_miles.substring(0,2) + " MPG*" : '')
        }
        </Details>

        <PriceRow>
          <Price>{currency(props.data.price)}</Price>
          {/*<Deal>Great Deal!</Deal>*/}
          {/*<Like />*/}
          <Share title={
                cutString(
                  (
                    props.data.build.year + " " +
                    props.data.build.make + " " +
                    props.data.build.model + " " +
                    (props.data.exterior_color ? props.data.exterior_color : '')
                  ), 35
                )
              }

              link={'/vdp/' + props.data.vin}
          />
        </PriceRow>
          {calculateDelta(props.stats, props.data.price)}
          <Dom>{props.data.dom_active} {props.data.dom_active>1 ? 'days' : 'day'} on market</Dom>
        {false ? (
          <Features>
            <Bluetooth />
            <Cam />
            <Wheels />
            <Geo />
            <Air />
            <Brake />
            <Keyless />
          </Features>
        ) :
          null
        }
      </Car>
    </Wrapper>
  )
}
