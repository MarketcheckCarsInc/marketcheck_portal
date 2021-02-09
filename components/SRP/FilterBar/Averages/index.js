import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'

const Averages = styled.div`
  display: inline-block;
  margin-right: 2em;
`

const Label = styled.span`
  color: ${colors.gray};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  margin-right: 1em;
  vertical-align: middle;
  ${mediaMax.desktop`
    font-size: ${em(11)};
  `}
`

const Value = styled.span`
  color: ${colors.black};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
  ${mediaMax.desktop`
    font-size: ${em(11)};
  `}
`

export default ({
  label,
  miles
}) =>
  <Averages>
    <Label>{ label }</Label>
    <Value>{ miles }</Value>
  </Averages>
