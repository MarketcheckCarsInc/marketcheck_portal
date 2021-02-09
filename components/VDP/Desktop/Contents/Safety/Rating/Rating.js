import { Rating, Stars, Star, Name } from './Components.js'
import { stars as starsArray } from '%/logic'

export default ({ stars, name, total = 5 }) =>
  <Rating>
    <Stars>
      {starsArray(stars, total).map((e, i) =>
        <Star key={i} full={e.full} />
      )}
    </Stars>
    <Name>{name}</Name>
  </Rating>
