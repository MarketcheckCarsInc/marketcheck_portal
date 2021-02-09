import styled from 'styled-components'
import { em, rem } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'

const TitleButton = styled(Button)`
  margin: 0 ${em(13)};
`

const Title = styled.div`
  margin-bottom: ${em(70)};
  text-align: center;
  color: ${colors.black};
  ${mediaMax.tablet`margin-bottom: ${rem(60)};`}
  ${mediaMax.phablet`margin-bottom: ${rem(40)};`}
`

export default () =>
  <Title>
    <H1>Popular Listings</H1>
    <P>We analysw millions of Used and New car listings from thousands of car dealers all across US to provide you with the most accurate market view of the cars market</P>
    <FlexRow align='center' justify='center'>
      <TitleButton href='#'>See More</TitleButton>
    </FlexRow>
  </Title>
