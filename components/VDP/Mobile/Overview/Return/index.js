import styled from 'styled-components'
import Prev from './prev.svg'
import { em } from 'polished'
import { mediaMin } from '%/styles/mixins'

const Return = styled.a`
  display: block;
  width: ${em(33)};
  height: ${em(38)};
  margin-right: ${em(15)};
  ${mediaMin.laptop`
    display: none;
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`

export default (props) =>
  <Return {...props}><Prev /></Return>
