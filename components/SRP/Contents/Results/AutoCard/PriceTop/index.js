import React, { Component } from 'react'
import styled from 'styled-components'
import {mediaMax, mediaMin} from '%/styles/mixins'
import {colors} from '%/styles'
import {currency} from '%/format'

const Container = styled.div`
  padding: 15px 30px;
  display: none;
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const PriceRow = styled(Flex)`
  ${mediaMin.desktop`
    display: none;
  `}

  svg {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }
`

const Price = styled.h4`
  font-size: 26px;
  line-height: 31.2px;
  margin-right: 7px;
  ${mediaMax.largeTablet`
    font-size: 26px;
  `}
`

const NewBadge = styled.span`
  color: ${colors.green};
  display: inline-block;
  font-size: 13px;
  line-height: 15.6px;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid currentColor;
  text-align: center;
  margin-bottom: 10px;
  ${mediaMax.largeTablet`
    font-size: 13px;
    padding: 3px 10px;
  `}
`

const Deal = styled(NewBadge)`
  font-size: 12px;
  line-height: 14.4px;
  padding: 4px 7px;
  margin-bottom: 0;
  margin-right: 25px;
  color: ${colors.white};
  background: ${colors.green};
  ${mediaMax.largeTablet`
    font-size: 12px;
  `}
`

const Average = styled.h6`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.green};
  margin-bottom: 5px;
  ${mediaMin.desktop`
    display: none;
  `}
  ${mediaMax.largeTablet`
    font-size: 14px;
  `}
`

class PriceTop extends Component {
    constructor (props) {
        super(props)
    }

    calculatePriceDelta(price, meanPrice) {
        return currency(1000)
    }


    render() {
        return (
            <Container>
                <PriceRow>
                    <Price>{currency(this.props.data.price)}</Price>
                    <Deal>Great Deal!</Deal>
                </PriceRow>
                <Average>{this.calculatePriceDelta(this.props.data.price, this.props.stats.price.mean)} less than market average</Average>
            </Container>
        )
    }

}

export default PriceTop