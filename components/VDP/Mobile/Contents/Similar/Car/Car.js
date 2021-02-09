import Seller from './Seller'
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
  Deal,
  Average,
  PicWrapper
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
  Share,
  Soon
} from './Icons'

import { ellipsis, currency, number } from '%/format'

export default ({
  dealer,
  distance,
  rating,
  reviews,
  website,
  name,
  price,
  picture,
   transmission,
  miles,
  cityMiles,
  highwayMiles,
  vdpUrl
}) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{ellipsis(name)}</Name>
        <Certified />
      </Title>

      <Details>{transmission}, {number(miles)} mi, {parseInt(cityMiles)}/{parseInt(highwayMiles)} MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        {/*<Deal>Great Deal!</Deal>*/}
        <Like />
        <Share />
      </PriceRow>

      <Average>{currency(874)} less than market average</Average>

      { false ?
      <Features>
        <Bluetooth />
        <Cam />
        <Wheels />
        <Geo />
        <Air />
        <Brake />
        <Keyless />
      </Features> :
      null }

      <PicWrapper>
        {picture
            ? <img src={picture} />
            : <Soon />
        }
      </PicWrapper>
    </Car>
    {reviews && rating &&
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
  </Wrapper>
