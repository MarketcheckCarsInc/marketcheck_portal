import styled from 'styled-components'
import { colors } from '%/styles'
import { FillBody } from '~/general/Accordion'
import { mediaMax } from '%/styles/mixins'

export const Car = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px rgba(51,51,51,0.14);
  margin-bottom: 20px;

  &:first-child {
    margin-top: 50px;
  }
`

export const Info = styled.div`
  max-width: ${380 / 1050 * 100}%;
  flex-basis: ${380 / 1050 * 100}%;
  padding: 10px 25px;
`

export const NewBadge = styled.span`
  color: ${colors.green};
  display: inline-block;
  font-size: 13px;
  line-height: 15.6px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid currentColor;
  text-align: center;
  margin-bottom: 10px;
`

export const Features = styled.div`
  display: flex;
  align-items: center;
  color: #9baab2;
  margin-bottom: 20px;

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
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Flex)`
  margin-bottom: 9px;

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
  margin-bottom: 12px;
`

export const PriceRow = styled(Flex)`
  margin-bottom: 10px;

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
`

export const Deal = styled(NewBadge)`
  font-size: 12px;
  line-height: 14.4px;
  padding: 4px 7px;
  margin-bottom: 0;
  margin-right: 25px;
  color: ${colors.white};
  background: ${colors.green};
`

export const Average = styled.h6`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.green};
  margin-bottom: 12px;
`

export const PicWrapper = styled(FillBody)`
  padding: 0;
  max-width: ${352 / 1050 * 100}%;
  flex-basis: ${352 / 1050 * 100}%;

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ShareBtn = styled.button`
  cursor: pointer;
  right: 0.5em;
  top: 0.5em;
  z-index: 9999999;
  ${mediaMax.largeTablet`
    top: 1.5em;
    right: 1em;
  `}

  svg {
    height: 16px;
    width: 16px;
  }
`