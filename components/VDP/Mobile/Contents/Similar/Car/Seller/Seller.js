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
  website,
  vdpUrl
}) =>
  <Seller>
    <Name href={website} target='_blank'>
      {name}
      <External />
    </Name>
    <Location>
      <LocText>{city}, {state}</LocText>
      <Dot />
      <LocText faded >{number(distance)} miles</LocText>
    </Location>

    <Flex>
      {/*<Rating>*/}
        {/*<Stars>*/}
          {/*{starsArray(rating).map((e, i) =>*/}
            {/*<Star key={i} full={e.full} />*/}
          {/*)}*/}
        {/*</Stars>*/}
        {/*<Badge>{rating}</Badge>*/}
      {/*</Rating>*/}
      {/*<Reviews href={website}>{number(reviews)} Reviews</Reviews>*/}
    </Flex>
    <Flex>
      <Button href={vdpUrl} target='_blank'>View on dealer website</Button>
      {false ? 
        <More>View More <Caret /></More> :
        null }
    </Flex>
  </Seller>
