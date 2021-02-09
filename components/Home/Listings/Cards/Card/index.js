import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '%/styles'
import { currency } from '%/format'

import CardContainer from './Container'
import Image from './Image'
import Info from './Info'
import NewBadge from './NewBadge'
import Name from './Name'
import Location from './Location'
import Price from './Price'
import Difference from './Difference'
import Seller from './Seller'

const Card = styled.a`
  display: block;
  background: ${colors.white};
  box-shadow: 0 2px 10px 2px ${rgba('#000', 0.15)};
  text-align: center;
  transform: translateZ(0);

  &:hover,
  &:focus {
    box-shadow: 0 2px 30px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.025);
  }
`

export default ({
  image,
  newCar,
  name,
  location,
  price,
  difference,
  seller,
  sellerUrl
}) =>
  <CardContainer>
    <Card href={sellerUrl} title={name}>
      <Image src={image} alt={name} />
      <Info>
        { newCar ? <NewBadge>New</NewBadge> : null }
        <Name>{ name }</Name>
        <Location>{ location }</Location>
        <Price>{ currency(price) }</Price>
        <Difference>{ currency(difference) } less than market average</Difference>
        <Seller>{seller}</Seller>
      </Info>
    </Card>
  </CardContainer>
