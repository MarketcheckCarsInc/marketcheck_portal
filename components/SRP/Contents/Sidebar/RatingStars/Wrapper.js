import React, { Component } from 'react'
import { Rating, Stars, Star } from './Components.js'
import { stars as starsArray } from '%/logic'

class Wrapper extends Component {
  constructor (props) {
    super(props)

    this.stars = this.props.stars
    this.total = this.props.total
    this.name = this.props.name

    this.state = {
      starsSelected: this.stars
    }
  }

  starClicked (key) {
    this.setState({
      starsSelected: (key + 1)
    })
  }

  render () {
    return (
      <Rating>
        <Stars>
          {starsArray(this.state.starsSelected, this.total).map((e, i) =>
            <Star key={i} full={e.full} onClick={() => this.starClicked.bind(this)(i)} />
          )}
        </Stars>
      </Rating>
    )
  }
}

export default Wrapper
