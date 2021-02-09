import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'

const TitleButton = styled(Button)`
  margin: 0 ${rem(13)};
`

const Title = styled.div`
  margin-bottom: ${rem(90)};
  text-align: center;
  color: ${colors.black};
  ${mediaMax.laptop`margin-bottom: ${rem(80)};`}
  ${mediaMax.tablet`margin-bottom: ${rem(60)};`}
  ${mediaMax.phablet`margin-bottom: ${rem(40)};`}
`

export default () =>
  <Title>
    <H1>Hear what they say</H1>
    <P>We invite you to browse through over 8,500,000 used and new cars, trucks, SUVs, and RVs with photos, prices and detailed vehicle information.</P>
    <FlexRow align='center' justify='center'>
      <TitleButton href='#'>See More</TitleButton>
    </FlexRow>
  </Title>
