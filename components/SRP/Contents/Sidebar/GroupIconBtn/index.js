import React, { Component } from 'react'
import styled from 'styled-components'
import { capitalize, uppercase } from '%/format'
import Collapsible from '../Collapsible'

import SvgKeyIcon from './key-icon.svg'
import SvgFsboIcon from './fsbo-icon.svg'

const StyledKeyIcon = styled(SvgKeyIcon)`
  height: 28px;
  margin-bottom: 0.5em;
  width: 28px;
`

const StyledFsboIcon = styled(SvgFsboIcon)`
  height: 28px;
  margin-bottom: 0.5em;
  width: 28px;
`

const Btn = styled.button`
  cursor: pointer;
  margin: ${props => props.margin ? props.margin : 0};
  text-align: center;
`

const Label = styled.span`
  display: block;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`

class GroupIconBtn extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label

    this.labelOne = this.props.labelOne
    this.labelTwo = this.props.labelTwo

    this.state = {
      selected: null
    }
  }

  handleSelectClick (value) {
    this.setState({
      selected: value
    })

    this.props.updateSuperState(value)
  }

  render () {
    return (
      <Collapsible label={this.label}>
        {this.props.items[0] !== undefined && this.props.items ?
        <Btn margin='0 1.5em 0 0' onClick={() => this.handleSelectClick.bind(this)(this.props.items[0].item)}>
          <StyledKeyIcon />
          <Label>{capitalize(this.props.items[0].item)}</Label>
        </Btn>
        : null
        }
        {this.props.items[1] !== undefined && this.props.items ?
        <Btn margin='0 0 0 1.5em' onClick={() => this.handleSelectClick.bind(this)(this.props.items[1].item)}>
          <StyledFsboIcon />
          <Label>{uppercase(this.props.items[1].item)}</Label>
        </Btn>
        : null
        }
      </Collapsible>
    )
  }
}

export default GroupIconBtn
