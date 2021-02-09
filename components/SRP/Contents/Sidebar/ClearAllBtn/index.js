import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const Container = styled.div`
  padding: 1em 0;
  ${mediaMin.largeTablet`
    display: none;
  `}
`

const Btn = styled.a.attrs({
  href: '#'
})`
  color: ${colors.softblue};
  font-size: 0.9em;
  font-weight: 300;
`

export default ({props}) =>
  <Container>
    <Btn>Clear All</Btn>
  </Container>
