import React, { Component } from 'react'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import CarData from './CarData'

const data = [
  {
    thumbnail: '/static/img/vdp/car.jpg',
    name: '2017 Toyota Fortuner Silver',
    price: 12000
  },
  {
    thumbnail: '/static/img/vdp/car.jpg',
    name: '2017 Toyota Fortuner Silver',
    price: 12000
  },
  {
    thumbnail: '/static/img/vdp/car.jpg',
    name: '2017 Toyota Fortuner Silver',
    price: 12000
  }
]

const Container = styled.div`
  margin-bottom: 3em;
  ${mediaMax.phone`
    display: none;
  `}
`

const Card = styled.div`
  box-shadow: 0 0 4px ${colors.gray};
`

const Title = styled.h2`
  color: ${colors.softblue};
  font-size: 0.8em;
  font-weight: 300;
  margin-bottom: 1em;
`

const Thumbnail = styled.img`
  display: block;
`

class Recommended extends Component {
  render () {
    return (
      <Container>
        <Title>RECOMMENDED CARS BASED ON YOUR SEARCH</Title>
        <FlexRow>
          {data.map(function (item, index) {
            return (
              <FlexCol key={index}>
                <Card>
                  <Thumbnail src={item.thumbnail} />
                  <CarData data={item} />
                </Card>
              </FlexCol>
            )
          })}
        </FlexRow>
      </Container>
    )
  }
}

export default Recommended
