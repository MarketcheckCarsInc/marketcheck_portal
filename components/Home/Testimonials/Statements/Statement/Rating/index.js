import Icon from './stars.svg'
import styled from 'styled-components'
import { rem } from 'polished'

const Stars = styled(Icon)`
  display: block;
  width: ${rem(65)};
  margin-right: ${rem(5)};
`

const Num = styled.h6`
  font-size: ${rem(16)};
  line-height: ${19 / 16};
  font-weight: 500;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(25)};
`

export default () =>
  <Rating>
    <Stars />
    <Num>5.0</Num>
  </Rating>
