import styled from 'styled-components'
import { align, mediaMin } from '%/styles/mixins'
import SVG from './caret.svg'
import { em } from 'polished'

const Caret = styled(SVG)`
  cursor: pointer;
  ${align('vertical')}
  right: ${em(10)};
  width: ${em(9)};
  fill: currentColor;
  ${mediaMin.desktop`
    right: ${em(20)};
  `}
`

export default Caret
