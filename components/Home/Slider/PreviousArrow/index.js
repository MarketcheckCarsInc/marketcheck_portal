import styled from 'styled-components'
import Previous from './previous.svg'

import { em } from 'polished'
import { align } from '%/styles/mixins'

const PreviousArrow = styled.button`
  width: ${em(25)};
  position: absolute;
  display: block;
  ${align('vertical')};
  z-index: 1;
  cursor: pointer;
  left: ${em(40)};
`

export default (props) => <PreviousArrow {...props} ><Previous /></PreviousArrow>
