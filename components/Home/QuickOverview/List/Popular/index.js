import Brand from './Brand'
import Details from './Details'
import { currency, number } from '%/format'

export default ({
  brand,
  listings,
  startingPrice,
  link
}) =>
  <div>
    <Brand title={brand} href={link}>{brand}</Brand>
    <Details>{ number(listings) } listings starting at { currency(startingPrice) }</Details>
  </div>
