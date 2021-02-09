import styled from 'styled-components'
import React from 'react'

const Label = styled.text`
  color: #19212b;
  font-size: 14px;
  line-height: 1;
  fill-opacity: 0.56;
  transform: translateX(-50%);
`

class LabelWrapper extends React.Component {
  state = {
    elWidth: 0
  }

  componentDidMount () {
    const el = this.label
    const Bbox = el.getBBox()
    const elWidth = Bbox.width
    this.setState({elWidth})
  }

  render () {
    const { width, remaining, height, value } = this.props
    const { elWidth } = this.state
    const total = value + remaining
    const percentage = Math.round(remaining / total * 100)
    return (
      <Label
        x={width - elWidth / 2}
        y={height * 4.5}
        innerRef={label => { this.label = label }}
      >
        {percentage}%
      </Label>
    )
  }
}

export default LabelWrapper
