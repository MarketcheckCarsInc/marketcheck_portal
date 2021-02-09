import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'

import Contents from './Contents'
import Overview from './Overview'
import Navigation from './Navigation'

const Desktop = styled.section`
  display: none;
  ${mediaMin.laptop`
    display: block;
    padding-top: 60px;
  `}
`

export default props =>
  <Desktop>
    <Navigation {...props} />
    <Overview {...props} />
    <Contents {...props} />
  </Desktop>
