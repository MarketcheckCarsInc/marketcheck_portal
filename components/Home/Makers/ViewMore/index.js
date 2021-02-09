import styled from 'styled-components'
import Icon from './caret.svg'

import { rem, em } from 'polished'

const ViewMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rem(14)};
  line-height: ${17 / 14};
`

const Caret = styled(Icon)`
  width: ${em(10, 14)};
  margin-left: ${em(8, 14)};
`

export default () =>
  <ViewMore href='#' title='View More'>
    View More
    <Caret />
  </ViewMore>
