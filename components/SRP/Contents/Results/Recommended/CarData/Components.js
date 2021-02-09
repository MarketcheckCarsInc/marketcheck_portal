import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { colors } from '%/styles'

export const Wrapper = styled.div`
  display: inline-block;
  padding: 15px;
  vertical-align: top;

  & + & {
    border-top: 1px solid #ccc;
  }
`

export const Car = styled.div`
  position: relative;
`

export const NewBadge = styled.span`
  color: ${colors.green};
  display: inline-block;
  font-size: 13px;
  line-height: 15.6px;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid currentColor;
  text-align: center;
  margin-bottom: 10px;
`

export const Name = styled.h3`
  font-size: 18px;
  line-height: 21.6px;
  ${mediaMax.srpDesktop`
    font-size: 16px;
  `}
  ${mediaMax.desktop`
    font-size: 13px;
  `}
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Flex)`
  svg {
    min-width: 13px;
    height: 15px;
    margin-left: 7px;
  }
`

export const PriceRow = styled(Flex)`
  svg {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }
`

export const Price = styled.h4`
  font-size: 26px;
  line-height: 31.2px;
  margin-right: 7px;
  ${mediaMax.srpDesktop`
    font-size: 22px;
    line-height: 28px;
  `}
  ${mediaMax.desktop`
    font-size: 18px;
    line-height: 24px;
  `}
`

export const Drew = styled.a`
  display: inline-block;
  font-size: 14px;
  line-height: 21.6px;
  color: ${colors.softblue};
  margin-bottom: 10px;
  ${mediaMax.srpDesktop`
    font-size: 12px;
    line-height: 19px;
  `}
  ${mediaMax.desktop`
    font-size: 11px;
    line-height: 18px;
  `}

  svg {
    margin-left: 10px;
  }
`
