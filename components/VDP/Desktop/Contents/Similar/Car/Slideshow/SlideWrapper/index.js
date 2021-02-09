import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'

const SliderWrapper = styled.div`
  display: inline-block;
  height: 190px;
  margin-right: 1.5em;
  vertical-align: top;
  width: 355px;
  ${mediaMax.desktop`
    height: 183px;
    margin-right: 1em;
    width: 250px;
  `}
  ${mediaMax.laptop`
    margin-right: 1em;
    width: 200px;
  `}
  ${mediaMax.middleLaptop`
    margin-right: 1em;
    width: 120px;
  `}
  ${mediaMax.largeTablet`
    height: 250px;
    margin-right: 0;
    max-width: 100%;
    width: 1000px;
  `}
  ${mediaMax.phone`
    height: 190px;
    margin-right: 0;
    max-width: 100%;
    width: 1000px;
  `}

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    display: none !important;
  }
`

export default SliderWrapper
