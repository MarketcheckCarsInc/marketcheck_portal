import React from 'react'
import Body from './Body'
import CloseButton from './CloseButton'
import Header from './Header'
import Title from './Title'
import Toggle from './Toggle'
import Wrapper from './Wrapper'
import { Close, More } from './Icons'
import { Collapse } from 'react-collapse'
import autobind from 'class-autobind'

class Accordion extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      open: !!this.props.open
    }
    autobind(this)
  }

  toggleAccordion (e) {
    e.preventDefault()
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { title, children, blue, noPadding } = this.props
    const { open } = this.state
    return (
      <Wrapper open={open} className={this.props.className}>
        <Header open={open} onClick={this.toggleAccordion} >
          <Title>{title}</Title>
          <Toggle open={open}href='#'><More /></Toggle>
        </Header>
        <Collapse isOpened={open}>
          <Body blue={blue} noPadding={noPadding} >
            {children}
            <CloseButton onClick={this.toggleAccordion}>
              <Close />
            </CloseButton>
          </Body>
        </Collapse>
      </Wrapper>
    )
  }
}

export default Accordion
