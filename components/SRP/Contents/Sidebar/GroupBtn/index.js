import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import Collapsible from '../Collapsible'

const StyledFlexCol = styled(FlexCol)`
  padding: 0 0.5em;
  ${mediaMax.laptop`
    padding: 0 0.3em;
  `}
`

const Btn = styled.button`
  border: 1px solid ${colors.softblue};
  border-radius: 0.5em;
  color: ${colors.softblue};
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 300;
  padding: 0.3em 1em;
  ${mediaMax.largeTablet`
    font-size: 0.7em;
  `}
  ${mediaMax.middleLaptop`
    font-size: 0.7em;
  `}
  ${mediaMax.middleLaptop`
    font-size: 0.7em;
    padding: 0.3em 0.5em;
  `}

  &:hover {
    background-color: ${colors.softblue};
    color: ${colors.white};
  }

  &.selected {
    background-color: ${colors.softblue};
    color: ${colors.white};
  }
`

class GroupBtn extends Component {
  constructor (props) {
    super(props)

    this.props = props
    this.updateCarType = this.props.updateCarType

    this.label = this.props.label
    this.buttons = this.props.buttons
    this.selectedValue = ''
  }

  handleSelectClick (index, value) {
    this.selectedValue = value
    this.updateCarType(value)

    this.setState({
      selected: value
    })
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <FlexRow>
          {this.buttons.map(function (item, index) {
            return (
              <StyledFlexCol key={index}>
                <Btn value={item.value} key={index} className={this.props.sessionSearch.filters.car_type === item.value ? 'selected' : ''} onClick={() => this.handleSelectClick.bind(this)(index, item.value)}>
                  {item.label}
                </Btn>
              </StyledFlexCol>
            )
          }.bind(this))}
        </FlexRow>
      </Collapsible>
    )
  }
}

export default GroupBtn
