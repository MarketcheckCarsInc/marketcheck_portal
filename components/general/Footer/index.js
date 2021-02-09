import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { em, rgba } from 'polished'

import { Container, Row, Column } from '~/layout'

import Top from './Top'
import Bottom from './Bottom'

const Footer = styled.footer`
  background-color: ${colors.darkblue};
  color: ${rgba(colors.white, 0.56)};
  padding-top: ${em(35)}; 
  padding-bottom: ${em(55)};
  ${mediaMax.laptop`
    padding-top: ${em(20)};
    padding-bottom: ${em(25)};
  `}
`

export default () =>
  <Footer>
    <Container>
      <Row>
        <Column laptop={{ cols: 10, offset: 1 }}>
          {/*<Top />*/}
          <Bottom />
        </Column>
      </Row>
    </Container>
  </Footer>
