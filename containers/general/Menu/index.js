import React from 'react'
import autobind from 'class-autobind'
import Menu from '~/general/Menu'
import InnerMenu from '~/general/Menu/InnerMenu'

class MenuContainer extends React.Component {
  constructor () {
    super(...arguments)
    this.state = { active: false }
    autobind(this)
  }

  componentDidMount () {
    this.bindScroll()
  }

  componentWillUnmount () {
    this.unbindScroll()
  }

  bindScroll () {
    window.addEventListener('scroll', this.handleScroll)
  }

  unbindScroll () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const height = this.menu.clientHeight
    const windowTop = window.pageYOffset

    const hasScrolledPastHeight = windowTop > height
    return this.setState({active: hasScrolledPastHeight})
  }

  render () {
    let { active } = this.state
    return (
      <Menu innerRef={el => { this.menu = el }} active={active}>
        <InnerMenu />
      </Menu>
    )
  }
}

export default MenuContainer
