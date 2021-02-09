import styled from 'styled-components'
import { colors } from '%/styles'
import { rgba } from 'polished'

export const PriceHeader = styled.h1`
  font-size: 64px;
  text-align: center;
  font-weight: 700;
  color: #414c56;
  margin-bottom: 6px;
`

export const Money = styled.span`
  color: ${colors.softblue};
`

export const FuelExpense = styled.h6`
  font-size: 14px;
  text-align: center;
  color: ${rgba('#1F2630', 0.56)};
  margin-bottom: 25px;
`

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #d6d6d6;
  margin-bottom: 20px;
`
