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
  Button,
  Flex,
  More,
  Caret
} from './Components.js'

import {number} from '%/format'
import { stars as starsArray } from '%/logic'

export default ({
  name,
  city,
  state,
  distance,
  rating,
  reviews,
  website
}) =>
  <Seller>
    <Name href={website} target='_blank'>
      {name ? name : website}
      <External />
    </Name>
    <Location>
      <LocText>{city ?  city + "," : ""} {state ? state + "," : ""}}</LocText>
      <Dot />
      <LocText faded >{number(distance)} miles</LocText>
    </Location>

    <Flex>
      <Rating>
        <Stars>
          {starsArray(rating).map((e, i) =>
            <Star key={i} full={e.full} />
          )}
        </Stars>
        <Badge>{rating}</Badge>
      </Rating>
      <Reviews href={website}>{number(reviews)} Reviews</Reviews>
    </Flex>
    <Flex>
      {/*<Button>Request Best Price</Button>*/}
      <More>
        View More
        <Caret />
      </More>
    </Flex>
  </Seller>
