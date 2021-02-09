import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const Container = styled.div`
  background-color: ${colors.bordergray};
  padding: 1em;
  ${mediaMin.phone`
    display: none;
  `}
`

const Text = styled.span`
  font-weight: 300;
  font-size: 0.9em;
`

export default ({total}) =>
  <Container>
    <Text>{total} Matching Vehicles Found</Text>
  </Container>
