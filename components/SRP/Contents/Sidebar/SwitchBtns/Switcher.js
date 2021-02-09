import React from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`

const Switch = styled.input.attrs({
  type: 'checkbox'
})`
  & {
    cursor: pointer;
    position: absolute;
    opacity: 0;
  }

  & + div {
    vertical-align: middle;
    width: 40px;
    height: 20px;
    border-radius: 999px;
    background-color: ${colors.gray};
    transition-duration: 0.4s;
    transition-property: background-color, box-shadow;
    cursor: pointer;
  }

  & + div span {
    position: absolute;
    font-size: 2rem;
    color: white;
    margin-top: 12px;
  }

  & + div span:nth-child(1) {
    margin-left: 15px;
  }

  & + div span:nth-child(2) {
    margin-left: 55px;
  }

  &:checked + div {
    width: 30px;
    background-position: 0 0;
    background-color: #3b89ec;
  }

  & + div {
    width: 30px;
    height: 10px;
  }

  &:checked + div {
    background-color: ${colors.gray};
  }

  & + div > div {
    float: left;
    width: 15px;
    height: 15px;
    border-radius: inherit;
    background: ${colors.hardblue};
    transition-timing-function: cubic-bezier(1, 0, 0, 1);
    transition-duration: 0.4s;
    transition-property: transform, background-color;
    pointer-events: none;
    margin-top: -2px;
    margin-left: -1px;
  }

  &:checked + div > div {
    transform: translate3d(20px, 0, 0);
    background-color: ${colors.softblue};
  }

  &.bigswitch.switch + div > div {
    width: 44px;
    height: 44px;
    margin-top: 1px;
  }

  &:checked + div > div {
    transform: translate3d(16px, 0, 0);
  }
`

class Switcher extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isChecked: null
    }
  }

  componentWillMount () {
    this.setState({ isChecked: this.props.isChecked })
  }

  render () {
    return (
      <Container>
        <label>
          <Switch ref={'switch'} checked={this.state.isChecked} onChange={this._handleChange} className={'switch'} />
          <div>
            <span><g className='icon icon-toolbar grid-view' /></span>
            <span><g className='icon icon-toolbar ticket-view' /></span>
            <div />
          </div>
        </label>
      </Container>
    )
  }

  _handleChange () {
    this.setState({ isChecked: !this.state.isChecked })
  }
}

export default Switcher
