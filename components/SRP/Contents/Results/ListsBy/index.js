import React, {Component} from 'react'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

const listOne = [
  '2013 Toyota Fortuner',
  '2014 Toyota Fortuner',
  '2015 Toyota Fortuner',
  '2016 Toyota Fortuner',
  '2017 Toyota Fortuner'
]

const listTwo = [
  'Under 10k miles',
  'Under 20k miles',
  'Under 75k miles',
  'Under 100k miles',
  'Under 150k miles'
]

const listThree = [
  'Black',
  'Red',
  'Silver',
  'White',
  'Blue'
]

const Container = styled.div`
  display: block;
  ${mediaMax.phone`
    display: none;
  `}
  ${mediaMax.laptop`
    margin-bottom: 1em;
  `}
`

const Title = styled.h2`
  color: ${colors.softblue};
  font-size: 0.8em;
  margin-bottom: 1.5em;
  ${mediaMax.desktop`
    font-size: 0.65em;
  `}
`

const List = styled.div`
  display: block;
`

const ListItem = styled.a`
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font-size: 0.9em;
  margin-bottom: 1em;
  ${mediaMax.desktop`
    font-size: 0.8em;
  `}
`

const CustomLastCol = styled(FlexCol)`
  ${mediaMax.largeTablet`
    display: none;
  `}
`

class ListsBy extends Component {
  render () {
    return (
      <Container>
        <FlexRow>
          <FlexCol>
            <Title>TOYOTA FORTUNER BY YEAR</Title>
            <List href="#">
              {listOne.map(function (item, index) {
                return <ListItem key={index}>{item}</ListItem>
              })}
            </List>
          </FlexCol>
          <FlexCol>
            <Title>TOYOTA FORTUNER BY MILEAGE</Title>
            <List href="#">
              {listTwo.map(function (item, index) {
                return <ListItem key={index}>{item}</ListItem>
              })}
            </List>
          </FlexCol>
          <FlexCol>
            <Title>TOYOTA FORTUNER BY COLOR</Title>
            <List href="#">
              {listThree.map(function (item, index) {
                return <ListItem key={index}>{item}</ListItem>
              })}
            </List>
          </FlexCol>
          <CustomLastCol>
            {''}
          </CustomLastCol>
        </FlexRow>
      </Container>
    )
  }
}

export default ListsBy
