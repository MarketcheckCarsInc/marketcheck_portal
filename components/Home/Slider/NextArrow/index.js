import styled from 'styled-components'
import Next from './next.svg'

import { em } from 'polished'
import { align } from '%/styles/mixins'

const NextArrow = styled.button`
  width: ${em(25)};
  position: absolute;
  display: block;
  ${align('vertical')};
  z-index: 1;
  cursor: pointer;
  right: ${em(40)};
`

export default (props) => <NextArrow {...props} ><Next /></NextArrow>
