import styled from 'styled-components'
import { rgba } from 'polished'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

const gradient = `linear-gradient( ${rgba(colors.black, 0.2)}, transparent )`

const Menu = styled.nav`
  background: ${props => props.active ? colors.blue : gradient};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
  z-index: 5;
`
Menu.propTypes = {
  active: PropTypes.bool
}

export default Menu
