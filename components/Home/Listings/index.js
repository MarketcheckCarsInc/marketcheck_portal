import styled from 'styled-components'
import { em } from 'polished'
import Title from './Title'
import Cards from './Cards'

import { Container, Column, Row } from '~/layout'

const Listings = styled.div`
  padding: ${em(50)} 0;
`

export default () =>
  <Listings>
    <Container>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }}>
          <Title />
        </Column>
      </Row>
      <Cards />
    </Container>
  </Listings>
