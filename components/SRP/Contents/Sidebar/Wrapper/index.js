import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const Wrapper = styled.div`
  background-color: ${colors.white};
  border-right: 1px solid ${colors.bordergray};
  ${mediaMax.phone`
    border: none;
  `}
`

export default Wrapper
