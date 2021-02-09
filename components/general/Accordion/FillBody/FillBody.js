import styled from 'styled-components'
import { colors, grid } from '%/styles'
import { rgba, rem } from 'polished'

const halfGutter = rem(grid.gutter / 2)

const checkPadding = props => props.noPadding
  ? null
  : `padding: ${rem(20)} ${halfGutter};`

const checkBgc = props => {
  return props.blue
    ? rgba(colors.blue, 0.09)
    : props.customBackground
      ? props.customBackground
      : colors.white
}

const FillBody = styled.div`
  ${checkPadding}
  background-color: ${checkBgc};
  width: calc(100% + ${rem(grid.gutter)});
  margin-top: ${props => props.first ? `-${rem(20)}` : '0'};
  margin-left: -${halfGutter};
  color: ${props => props.customColor ? props.customColor : 'inherit'};
`

export default FillBody
