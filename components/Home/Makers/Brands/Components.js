import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, em } from 'polished'
import { mediaMin } from '%/styles/mixins'
import { percentage } from '%/styles/mixins'

export const Brands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${em(40)};
  max-width: ${percentage(10.5, 12)};
  margin-left: auto;
  margin-right: auto;
`

export const BrandColumn = styled.div`
  padding: ${em(2.5)};
  max-width: 100%;
  flex-basis: 100%;
  ${mediaMin.phablet`
    max-width: ${percentage(1, 2)};
    flex-basis: ${percentage(1, 2)};
  `}
  ${mediaMin.laptop`
    max-width: ${percentage(1, 5)};
    flex-basis: ${percentage(1, 5)};
  `}
`

export const Brand = styled.a`
  background-color: #ebefef;
  height: ${em(135)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  display: block;
  margin: auto;
`
