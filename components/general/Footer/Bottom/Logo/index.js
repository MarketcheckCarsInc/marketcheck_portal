import styled from 'styled-components'
import logo from './logo.svg'

import { em } from 'polished'

const Logo = styled(logo)`
  max-width: ${em(145)};
  margin-bottom: ${em(15)};
  fill: currentColor;

  & > [fill] {
    fill: currentColor;
  }
`

export default () => <a href='#'><Logo /></a>
