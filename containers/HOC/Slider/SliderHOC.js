import React from 'react'

import SliderStyles from './SliderStyles'
import CustomSlickStyles from './CustomStyles'

const SliderHOC = WrappedSlider => {
  return class SliderHOC extends React.Component {
    constructor (props) {
      super(props)
      this.state = { alive: false }
    }

    componentDidMount () {
      this.setState({ alive: true })
    }

    componentWillMount () {
      SliderStyles()
      CustomSlickStyles()
    }

    render () {
      let { alive } = this.state
      return alive
        ? <WrappedSlider {...this.props} />
        : null
    }
  }
}
export default SliderHOC
