import React, { Component } from 'react'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { colors } from '%/styles'
import Safety from './Safety'
import CarData from './CarData'
import Slideshow from './Slideshow'
import Collapsible from './Collapsible'
import MoreInfo from './MoreInfo'
import SvgHeartIcon from './heart.svg'
import SvgShareIcon from './share.svg'
import SvgArrowIcon from './arrow.svg'
import PriceTop from './PriceTop'
import Share from './CarData/ShareComponent'
import { cutString, currency, capitalize } from '%/format'

const Card = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 0 4px ${colors.gray};
  height: auto;
  position: relative;
  margin-bottom: 1.5em;
  max-height: inherit;
  transition: all 0.5s ease;

  &.close {
    height: auto;
    max-height: max-content;
    transition: all 0.5s ease;
  }

  &.open {
    height: auto;
    max-height: max-content;
    transition: all 0.5s ease;
  }
`

const Container = styled.div`
  border-bottom: 1px solid ${colors.bordergray};
  display: flex;
  justify-content: space-between;
  position: relative;
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const InnerContainer = styled.div`
  max-width: 100%;
`

const HeartBtn = styled.button`
  cursor: pointer;
  position: absolute;
  right: 2em;
  top: 0.5em;
  z-index: 9999999;
  ${mediaMax.largeTablet`
    top: 1.5em;
    right: 3em;
  `}

  svg {
    height: 16px;
    width: 16px;
  }
`

const ShareBtn = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  z-index: 9999999;
  ${mediaMax.largeTablet`
    top: 1.5em;
    right: 1em;
  `}

  svg {
    height: 16px;
    width: 16px;
  }
`

const ViewMore = styled.button`
  border-top: 1px solid ${colors.bordergray};
  border-left: 1px solid ${colors.bordergray};
  border-top-left-radius: 1em;
  bottom: 0;
  cursor: pointer;
  padding: 0.5em 1em;
  position: absolute;
  right: 0;
  ${mediaMax.srpDesktop`
    font-size: 14px;
  `}
`

const Text = styled.span`
  display: inline-block;
  color: ${colors.softblue};
  font-size: 0.9em;
  margin-right: 0.5em;
  vertical-align: middle;
`

const ArrowBtn = styled.span`
  display: inline-block;
  vertical-align: middle;

  svg {
    height: 12px;
    width: 12px;
  }

  &.open svg {
    transform: rotate(180deg);
  }

  &.close svg {
    transform: rotate(0);
  }
`

class AutoCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  getName () {
      const name = this.props.data.build.year + " " +
                  this.props.data.build.make + " " +
                  this.props.data.build.model + " " +
                  (this.props.data.exterior_color ? this.props.data.exterior_color : '')

      return name
  }

  handleOpenClick () {
    if (this.state.open) {
      this.setState({
        open: false
      }, function () {
      })
    } else {
      this.setState({
        open: true
      }, function () {
      })
    }
  }

  render () {
    return (
      <Card className={this.state.open ? 'open' : 'close'}>
        <Container>
            {/*{console.log(this.props)}*/}
          <PriceTop data={this.props.data} stats={this.props.stats} />
          <InnerContainer>
            <Slideshow data={this.props.data} />
            { this.props.data.build ? <CarData {...this.props}  data={this.props.data} /> : null }
          </InnerContainer>
          <Safety data={this.props.data} />

          {/*<HeartBtn>*/}
            {/*<SvgHeartIcon />*/}
          {/*</HeartBtn>*/}
          <ShareBtn>
            <Share title={this.getName()} link={'/vdp/' + this.props.data.vin} />
          </ShareBtn>
          <ViewMore onClick={this.handleOpenClick.bind(this)}>
            <Text>View More</Text>
            <ArrowBtn className={this.state.open ? 'open' : 'close'}>
              <SvgArrowIcon />
            </ArrowBtn>
          </ViewMore>
        </Container>

        <Collapsible open={this.state.open}>
          { this.props.data.build ? <MoreInfo data={this.props.data} /> : null }
        </Collapsible>
      </Card>
    )
  }
}

export default AutoCard
