import styled from 'styled-components'
import { rem } from 'polished'

import Title from './Title'
import Cars from './Cars'
import { Container, Column, Row } from '~/layout'

const Categories = styled.div`
  padding-top: ${rem(50)};
`

export default () =>
  <Categories>
    <Container>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }}>
          <Title />
        </Column>
      </Row>
      <Cars />
    </Container>
  </Categories>
