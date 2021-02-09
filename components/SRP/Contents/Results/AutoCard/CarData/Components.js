import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

export const Wrapper = styled.div`
  display: inline-block;
  padding: 15px 0;
  vertical-align: top;
  ${mediaMax.largeTablet`
    display: block;
    padding: 15px 30px;
  `}

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
  border: 1px solid ${colors.green};
  text-align: center;
  margin-bottom: 10px;
  ${mediaMax.srpDesktop`
    font-size: 11px;
    padding: 1px 8px;
  `}
  ${mediaMax.largeTablet`
    font-size: 13px;
    padding: 3px 10px;
  `}
`

export const Features = styled.div`
  display: flex;
  align-items: center;
  color: #9baab2;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;

    [fill] {
      fill: currentColor;
      stroke: currentColor;
    }

    [stroke] {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`

export const Name = styled.a`
  font-size: 18px;
  line-height: 21.6px;
  ${mediaMax.srpDesktop`
    font-size: 16px;
    line-height: 20px;
  `}
  ${mediaMax.desktop`
    font-size: 14px;
    line-height: 18px;
  `}
  ${mediaMax.largeTablet`
    font-size: 18px;
    line-height: 28px;
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

export const Details = styled.h6`
  font-size: 14px;
  line-height: 24px;
  color: #515760;
  margin-bottom: 5px;
  ${mediaMax.srpDesktop`
    font-size: 13px;
  `}
  ${mediaMax.desktop`
    font-size: 12px;
  `}
  ${mediaMax.largeTablet`
    font-size: 14px;
    margin-bottom: 10px;
  `}
`

export const PriceRow = styled(Flex)`
  ${mediaMax.largeTablet`
    display: none;
  `}

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
    font-size: 24px;
  `}
  ${mediaMax.desktop`
    font-size: 22px;
  `}
`

export const Deal = styled(NewBadge)`
  font-size: 12px;
  line-height: 14.4px;
  padding: 4px 7px;
  margin-bottom: 0;
  margin-right: 25px;
  color: ${colors.white};
  background: ${colors.green};
  ${mediaMax.srpDesktop`
    font-size: 11px;
    margin-right: 15px;
  `}
  ${mediaMax.desktop`
    font-size: 10px;
    margin-right: 15px;
  `}
`

export const Average = styled.h6`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.green};
  margin-bottom: 5px;
  ${mediaMax.srpDesktop`
    font-size: 12px;
  `}
  ${mediaMax.desktop`
    font-size: 11px;
  `}
  ${mediaMax.largeTablet`
    display: none;
  `}
`


export const Dom = styled.h6`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 5px;
  ${mediaMax.srpDesktop`
    font-size: 12px;
  `}
  ${mediaMax.desktop`
    font-size: 11px;
  `}
  ${mediaMax.largeTablet`
    display: none;
  `}
`
