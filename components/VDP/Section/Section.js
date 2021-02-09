import {
  Section,
  Title,
  Summary
} from './Components'

import {
  Container,
  FlexRow,
  FlexCol
} from '~/layout'

export default ({ title, summary, center, children, ...props }) =>
  <Section className={props.className} id={props.id} name={props.id}>
    <Container>
      <FlexRow justify='center' wrap >
        <FlexCol cols={center ? 12 : 3}>
          <Title center={center}>{title}</Title>
          {summary && <Summary center={center}>{summary}</Summary>}
        </FlexCol>

        <FlexCol cols={center ? 12 : 9}>
          {children}
        </FlexCol>
      </FlexRow>
    </Container>
  </Section>
