import Card from './Card'
import styled from 'styled-components'

import cars from './cars'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default () =>
  <Cards>
    {cars.map((car, index) =>
      <Card
        key={index + car.name}
        image={car.image}
        newCar={car.newCar}
        name={car.name}
        location={car.location}
        price={car.price}
        difference={car.difference}
        seller={car.seller}
        sellerUrl={car.sellerUrl}
      />
    )}
  </Cards>
