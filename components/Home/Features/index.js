import styled from 'styled-components'
import { em } from 'polished'
import { Container, Row, Column } from '~/layout'
import Title from './Title'
import Icons from './Icons'

const Features = styled.div`
  padding: ${em(60)} 0;
`

export default () =>
  <Features>
    <Container>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }} phablet={{ cols: 10, offset: 1 }}>
          <Title />
          <Icons />
        </Column>
      </Row>
    </Container>
  </Features>
