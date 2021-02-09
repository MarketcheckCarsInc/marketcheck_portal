import styled from 'styled-components'
import { em } from 'polished'

const Image = styled.img`
  display: block;
  width: 100%;
  max-height: ${em(190)};
  object-fit: cover;
`

export default Image
