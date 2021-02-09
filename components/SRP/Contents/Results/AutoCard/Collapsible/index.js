import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'

const Container = styled.div`
  display: block;
`

const Content = styled.div`
  background-color: ${colors.white};
  height: 0;
  transform: scaleY(0);

  &.close {
    height: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.5s ease;
  }

  &.open {
    height: 100%;
    transform-origin: top;
    transform: scaleY(1);
    transition: all 0.5s ease;
  }
`

class Collapsible extends Component {
  render () {
    return (
      <Container>
        <Content className={this.props.open ? 'open' : 'close'}>
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

export default Collapsible
