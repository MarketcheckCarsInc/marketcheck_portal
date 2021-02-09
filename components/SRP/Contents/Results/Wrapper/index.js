import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const Wrapper = styled.div`
  ${mediaMax.phone`
    background-color: ${colors.bordergray};
  `}
`

export default Wrapper
