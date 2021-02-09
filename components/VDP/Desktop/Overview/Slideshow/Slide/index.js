import styled from 'styled-components'
import { colors } from '%/styles'
import { stdBackground } from '%/styles/mixins'

const Slide = styled.div`
  ${stdBackground()}
  background-color: ${colors.softgray};
  background-image: url(${props => props.image.replace("?impolicy=resize&w=650", "")});
  transition: 0.3s;
  min-height: 540px;
  height: 540px;
`
export default Slide
