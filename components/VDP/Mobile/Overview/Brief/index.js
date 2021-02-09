import styled from 'styled-components'
import {rem, em} from 'polished'

const Brief = styled.p`
  font-size: ${rem(14)};
  line-height: ${24 / 14};
  color: #515760;
  margin-bottom: ${em(12)};
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
`

export default Brief
