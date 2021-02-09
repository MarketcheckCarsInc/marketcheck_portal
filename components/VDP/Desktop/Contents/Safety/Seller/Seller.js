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
  website
}) =>
  <Seller>
    <Name href={website} target='_blank'>
      {name}
      <External width='17' />
    </Name>
    <Location>
      <LocText>{location}</LocText>
      <Dot />
      <LocText faded >{number(distance)} miles</LocText>
    </Location>

    <Rating>
      <Stars>
        {starsArray(rating).map((e, i) =>
          <Star key={i} full={e.full} />
        )}
      </Stars>
      <Badge>{rating}</Badge>
    </Rating>

    <Reviews href={website} target='_blank'>{number(reviews)} Reviews</Reviews>
    <Button href={website} target='_blank'>Request Best Price</Button>
  </Seller>
