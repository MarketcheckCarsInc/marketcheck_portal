import React, { Component } from 'react'
import AveragesOverTimeDesktop from '~/VDP/Desktop/Contents/AveragesOverTime/AveragesOverTime'
import AveragesOverTimeMobile from '~/VDP/Mobile/Contents/AveragesOverTime/AveragesOverTime'
import fetch from 'isomorphic-fetch'
import Aux from 'react-aux'
import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'
import Loading from 'react-loading-animation'

const Desktop = styled(AveragesOverTimeDesktop)`
  display: none;
  ${mediaMin.laptop`
    display: block;
  `}
`

const Mobile = styled(AveragesOverTimeMobile)`
  display: block;
  ${mediaMin.laptop`
    display: none;
  `}
`

class AveragesOverTimeContainer extends Component {
  constructor () {
    super()

    this.trendsFetch = this.trendsFetch.bind(this)

    this.state = {
      trends: []
    }
  }

  trendsFetch (url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      }).then(data => {
        if (data.trends) {
          // Convert number strings to actual numbers in Obj
          for (var i = 0; i < data.trends.length; i++) {
            var obj = data.trends[i]
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
                obj[prop] = parseInt(+obj[prop])
              }
            }
          }

          data.trends.forEach(item => {
            item['name'] = item['month'] + '/' + item['year']
          })

          let overTimemiles = 0
          let averageOverTimeMiles = 0
          const trendsResponse = data.trends
          data.trends.map((car) => {
            overTimemiles += car.miles
            averageOverTimeMiles = overTimemiles / trendsResponse.length
          })
          // console.log(JSON.stringify(data.trends, null, 2));
          this.setState({ trends: data.trends.reverse() })
        }
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  componentDidMount () {

    this.trendsFetch(`https://${process.env.API_HOST}/v2/trends/car?api_key=${process.env.API_VAR}&vin=${this.props.vin}&car_type=${this.props.type? this.props.type : "used"}`)
  }

  render () {
    if (this.state.trends.length < 1) {
      return <Loading />
    }
    return (
      <Aux>
        <Desktop {...this.state} {...this.props} />
        <Mobile {...this.state} {...this.props} />
      </Aux>
    )
  }
}

export default AveragesOverTimeContainer
