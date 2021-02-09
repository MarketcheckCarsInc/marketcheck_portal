import React, { Component } from 'react'

import Collapsible from '../Collapsible'
import Wrapper from './Wrapper.js'

class RatingStars extends Component {
  constructor (props) {
    super(props)
    this.label = this.props.label
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <Wrapper stars={0} name='Overall' />
        <Wrapper stars={0} name='Overall' />
        <Wrapper stars={0} name='Overall' />
      </Collapsible>
    )
  }
}

export default RatingStars
