import {
  Car,
  Wrapper,
  NewBadge,
  Name,
  Title,
  PriceRow,
  Price,
  Drew
} from './Components.js'

import SvgCertified from './certified.svg'

import { currency } from '%/format'

export default ({
  data
}) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{data.name}</Name>
        <SvgCertified />
      </Title>

      <Drew href='#' target='_blank'>
        Drew International Auto Sales
      </Drew>

      <PriceRow>
        <Price>{currency(data.price)}</Price>
      </PriceRow>
    </Car>
  </Wrapper>
