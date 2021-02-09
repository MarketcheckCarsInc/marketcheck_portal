import styled from 'styled-components'
import { em } from 'polished'
import { mediaMax } from '%/styles/mixins'

const Info = styled.div`
  padding: ${em(30)} ${em(65)};
  ${mediaMax.desktop`
    padding: ${em(30)};
  `}
`

export default Info
