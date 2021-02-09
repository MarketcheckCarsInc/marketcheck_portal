import SVG from './logo.svg'
import styled from 'styled-components'

import { mediaMax } from '%/styles/mixins'

const Logo = styled(SVG)`
  width: 145px;
  ${mediaMax.laptop`
    width: 100px;
  `}
`

export default Logo
