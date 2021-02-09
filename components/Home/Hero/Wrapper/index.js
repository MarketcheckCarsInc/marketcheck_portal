import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import PropTypes from 'prop-types'
import { hiDPI } from 'polished'

const backgroundImage = props => {
  return props.image
    ? `url(${props.image})`
    : 'none'
}

const retinaImage = props => {
  return props.imageRetina
    ? `url(${props.imageRetina})`
    : props.image
      ? `url(${props.image})`
      : 'none'
}

const Wrapper = styled.header`
  background-color: ${colors.gray};
  background-image: ${backgroundImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 750px;
  color: ${colors.white};
  padding: 60px 0;
  text-align: center;
  position: relative;
  ${mediaMax.tablet`min-height: 100vh;`}
  /* stylelint-disable */
  ${hiDPI(1.3)} {
    background-image: ${retinaImage};
  }
`

Wrapper.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Wrapper
