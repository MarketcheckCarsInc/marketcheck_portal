import React, { Component } from 'react'
import autobind from 'class-autobind'
import CheckWrapper from './CheckWrapper'
import Input from './Input'
import Label from './Label'
import Text from './Text'
import Checked from './checked.svg'
import Unchecked from './unchecked.svg'

import { randomNumber } from '%/format'

class Check extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      hash: undefined
    }
    autobind(this)
  }

  componentDidMount () {
    this.setState({
      hash: randomNumber()
    })
  }

  render () {
    const { text } = this.props
    const { hash } = this.state
    return (
      <CheckWrapper>
        <Input hash={hash} />
        <Label hash={hash}>
          <Unchecked />
          <Checked />
          <Text>{text}</Text>
        </Label>
      </CheckWrapper>
    )
  }
}

export default Check
