import { Button } from '~/general'
import styled from 'styled-components'
import { rem } from 'polished'
import { mediaMin } from '%/styles/mixins'

const SubButton = Button.withComponent('button')

const Submit = styled(SubButton).attrs({
  type: 'submit'
})`
  display: block;
  appearance: none;
  font-size: ${rem(11)};
  max-width: ${rem(88)};
  line-height: ${13.35 / 11.12};
  margin: ${rem(17)} auto 0;
  text-align: center;
  padding: ${rem(10)} ${rem(12)};
  min-width: auto;
  ${mediaMin.laptop`
  margin-left: 0;
  `}
`

export default Submit
