import styled from 'styled-components'
import { rem, em } from 'polished'

const Heading = styled.h2`
  font-size: ${rem(27)};
  line-height: ${32.4 / 27};
  margin-bottom: ${em(10, 27)};
  font-weight: 700;
`

export default Heading
