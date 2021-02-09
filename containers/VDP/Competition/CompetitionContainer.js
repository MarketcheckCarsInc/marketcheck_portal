import React, { Component } from 'react'
import CompetitionDesktop from '~/VDP/Desktop/Contents/Competition/Competition'
import CompetitionMobile from '~/VDP/Mobile/Contents/Competition/Competition'
import fetch from 'isomorphic-fetch'
import Aux from 'react-aux'
import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'

const Desktop = styled(CompetitionDesktop)`
  display: none;
  ${mediaMin.laptop`
    display: block;
  `}
`

const Mobile = styled(CompetitionMobile)`
  display: block;
  ${mediaMin.laptop`
    display: none;
  `}
`

class CompetitionContainer extends Component {
  constructor () {
    super()

    // this.similarFetch = this.similarFetch.bind(this);
    this.competitionFetch = this.competitionFetch.bind(this)

    this.state = {
      competition: []
    }
  }

  competitionFetch (url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      }).then(competition => {
        // console.log(competition)
        this.setState({ competition })
      })
  }

  componentDidMount () {
    this.competitionFetch(`https://${process.env.API_HOST}/v2/competition/car?vin=1FA6P8CF2H5279752&api_key=${process.env.API_VAR}`)
  }

  render () {
    if (this.state.competition.length < 1) {
      return <h2>No Similar Cars Found</h2>// <Loading />
    }
    return (
      <Aux>
        <Desktop {...this.state} {...this.props} />
        <Mobile {...this.state} {...this.props} />
      </Aux>
    )
  }
}

export default CompetitionContainer
