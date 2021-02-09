import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

import { Scroll } from '~/layout'
import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'
import { animateScroll as scroll } from 'react-scroll'

const TitleButton = styled(Button)`
  margin: 0 ${rem(13)};
`

const Title = styled.div`
  margin-bottom: ${rem(120)};
  text-align: center;
  color: ${colors.black};
  ${mediaMax.desktop`margin-bottom: ${rem(100)};`}
  ${mediaMax.laptop`margin-bottom: ${rem(80)};`}
  ${mediaMax.tablet`margin-bottom: ${rem(60)};`}
  ${mediaMax.phablet`margin-bottom: ${rem(40)};`}
`

export default () =>
  <Title>
    <H1>All Cars, One Place!</H1>
    <P>We invite you to browse through over 7,000,000 used and new cars, trucks, SUVs, and RVs with photos, prices and detailed vehicle information.</P>
    <FlexRow align='center' justify='center'>
      <TitleButton primary href='javascript:;' onClick={ () => { scroll.scrollToTop(100); }}>Get Started</TitleButton>
    </FlexRow>
  </Title>
