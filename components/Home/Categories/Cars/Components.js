import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'
import { mediaMin } from '%/styles/mixins'

export const Car = styled.a`
  text-align: center;
  cursor: pointer;
  display: block;
  color: ${colors.black};
  padding: ${rem(20)} 0;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`

export const CarPic = styled.img`
  display: block;
  margin: 0 auto ${rem(60)};
`

export const CarTitle = styled.h5`
  font-size: ${rem(16)};
  line-height: ${19 / 16};
`

