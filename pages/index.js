import React from 'react'
import { initGA, logPageView } from '%/ga'
import Home from '@/Home'
import FontsHOC from '@/HOC/Fonts'

class Index extends React.Component {
    constructor(props) {
    super(props)
    this.setVin = this.setVin.bind(this)
    this.state = {
        vin: ''
    }
}

    setVin () {
        //console.log(this.props.url.query.vin)
        //console.log(this)
        // this.urlParams.vin = value
        if(this.props.url.query.vin) {
            this.setState({
                vin: this.props.url.query.vin
            }, () => {
                window.location.href = "/vdp/" + this.props.url.query.vin;
            })
        }

    }

  componentDidMount () {
    this.setVin()
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return <Home />
  }
}

export default FontsHOC(Index)
