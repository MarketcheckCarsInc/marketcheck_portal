import styled from 'styled-components'
import { em, rem } from 'polished'
import { colors } from '%/styles'

import { H4 } from '~/general'
import { Column, Row, Container } from '~/layout'

import Brands from './Brands'
import ViewMore from './ViewMore'

const Makers = styled.div`
  padding: ${em(40)} 0 ${em(50)};
  background-color: ${colors.softgray};
  text-align: center;
  color: ${colors.softblue};
`

const M4 = styled(H4)`
  margin-bottom: ${rem(40)};
`

export default () =>
  <Makers>
    <Container>
      <Row>
        <Column laptop={{ cols: 10, offset: 1 }}>
          <M4>Popular Makers</M4>
        </Column>
      </Row>
      <Brands />
      <ViewMore />
    </Container>
  </Makers>
