import React, { Component } from 'react'
import styled from 'styled-components'

import SliderStyle from 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

import { colors } from '%/styles'

import Collapsible from '../Collapsible'

const Range = Slider.Range

const Control = styled(Range)`
  ${SliderStyle};

  .rc-slider-step {
    background-color: ${colors.softblue};
    width: ${props => (props.value / props.max) * 100}%;
  }
`

const Miles = styled.span`
  display: block;
  padding-top: 1em;
  text-align: right;
`

class InputRange extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.min = this.props.min
    this.max = this.props.max
    this.value = this.props.value
    this.step = this.props.step

    this.state = {
      bound: this.value,
      value: [this.value]
    }
  }

  onBoundChange = (e) => {
    this.setState({ bound: + e.target.value })
  }

  onSliderChange = (value) => {
    this.setState({
      value
    })

    this.props.updateSuperState(value)
  }

  handleApply = () => {
    const { bound } = this.state

    this.setState({ value: [bound] })
  }

  componentWillReceiveProps () {
    if (this.props.resetState) {
      this.setState({
        bound: this.props.value,
        value: [this.props.value]
      })
    }
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <Control
          range
          min={this.min}
          max={this.max}
          value={this.state.value}
          step={this.step}
          onChange={this.onSliderChange.bind(this)}
          trackStyle={[{ backgroundColor: colors.softblue }]}
          handleStyle={[{ backgroundColor: colors.softblue, border: 'none' }]}
          railStyle={{ backgroundColor: colors.bordergray }} />
        <Miles>
          {this.state.value} miles
        </Miles>
      </Collapsible>
    )
  }
}

export default InputRange
