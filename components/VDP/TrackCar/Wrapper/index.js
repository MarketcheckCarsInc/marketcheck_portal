import styled from 'styled-components'
import { colors } from '%/styles'
import { em } from 'polished'
import { mediaMin } from '%/styles/mixins'

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: ${em(20)} 0 ${em(15)};
  ${mediaMin.laptop`
    padding-top: 62px;
    padding-bottom: 49px;
  `}
`

export default Wrapper
