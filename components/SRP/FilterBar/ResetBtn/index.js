import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'

const ResetBtn = styled.button`
  cursor: pointer;
  display: inline-block;
`

const Text = styled.a`
  color: ${colors.blue};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
  ${mediaMax.largeTablet`
    font-size: ${em(11)};
  `}

  &:hover {
    text-decoration: underline;
  }
`

export default ({
  name,
  resetBtn
}) =>
  <ResetBtn onClick={resetBtn}>
    <Text>{ name }</Text>
  </ResetBtn>
