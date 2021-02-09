import Wrapper from './Wrapper'
import { Container, FlexRow, FlexCol } from '~/layout'
import Heading from './Heading'
import Form from './Form'
import Email from './Email'
import Submit from './Submit'
import Check from './Check'

export default () =>
  <Wrapper>
    <Form>
      <Container>
        <FlexRow wrap>

          <FlexCol laptop={{ cols: 3, offset: 1 }}>
            <Heading>Track This Car</Heading>
          </FlexCol>

          <FlexCol laptop={{ cols: 4 }}>
            <Email placeholder='Enter your email address' />
          </FlexCol>

          <FlexCol laptop={{ cols: 4 }}>
            <Check text='Get similar listing alerts' />
            <Check text='Notify me when price drops for this car' />
            <Submit>Set Alerts</Submit>
          </FlexCol>

        </FlexRow>
      </Container>
    </Form>
  </Wrapper>
