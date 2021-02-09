import {
  Name,
  Seller,
  External,
  Dot,
  Location,
  LocText,
  Stars,
  Star,
  Badge,
  Rating,
  Reviews,
  Button
} from './Components.js'

import {number} from '%/format'
import { stars as starsArray } from '%/logic'

export default ({
  name,
  location,
  distance,
  rating,
  reviews,
  website,
  vdpUrl
}) =>
  <Seller>
      {console.log(location)}
    <Name href={vdpUrl + "?utm_campaign=vdp_deeplink&utm_medium=referral&utm_source=marketcheck.com"} target='_blank'>
      {name}
      <External width='10' />
    </Name>
    <Location>
      <LocText>{location != 'undefined' ? location : "US"}</LocText>
      <Dot />
      <LocText faded >{number(distance)} miles</LocText>
    </Location>

    {false ? (
      <Rating>
        <Stars>
          {starsArray(rating).map((e, i) =>
            <Star key={i} full={e.full} />
          )}
        </Stars>
        <Badge>{rating}</Badge>
        <Reviews href={website}>{number(reviews)} Reviews</Reviews>
      </Rating>) : 
      null
    }

    {/*<Button>Request Best Price</Button>*/}
  </Seller>
