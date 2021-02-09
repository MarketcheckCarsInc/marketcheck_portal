import styled from 'styled-components'
import { rem } from 'polished'
import { mediaMax } from '%/styles/mixins'

import Face from './Face'
import Name from './Name'
import CarModel from './CarModel'
import Rating from './Rating'
import Opinion from './Opinion'

const Statement = styled.div`
  padding: 0 ${rem(30)};
  max-width: ${1 / 3 * 100}%;
  flex-basis: ${1 / 3 * 100}%;
  text-align: center;
  ${mediaMax.tablet`
    max-width: 50%;
    flex-basis: 50%;
    margin-bottom: ${rem(40)};
  `}
  ${mediaMax.phablet`
    max-width: 100%;
    flex-basis: 100%;
    margin-bottom: ${rem(30)};
  `}
`

export default ({
  face,
  name,
  model,
  opinion
}) =>
  <Statement>
    <Face src={face} alt={name} />
    <Name>{ name }</Name>
    <CarModel>{ model }</CarModel>
    <Rating />
    <Opinion>{ opinion }</Opinion>
  </Statement>
