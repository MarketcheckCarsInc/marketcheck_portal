import styled from 'styled-components'
import { colors } from '%/styles'
import { stdBackground, mediaMax } from '%/styles/mixins'

const Slide = styled.div`
  ${stdBackground()}
  background-color: ${colors.softgray};
  background-image: url(${props => props.image ? props.image : './defaultSlide.jpg' });
  min-height: 190px;
  height: 190px;
  transition: 0.3s;
  ${mediaMax.desktop`
    min-height: 183px;
    height: 183px;
  `}
  ${mediaMax.largeTablet`
    margin-top: 15px;
    min-height: 220px;
    height: 220px;
  `}
  ${mediaMax.phone`
    min-height: 160px;
    height: 160px;
  `}

  .slick-active & {
    min-height: 190px;
    height: 190px;
    margin-top: 0;
    ${mediaMax.desktop`
      min-height: 183px;
      height: 183px;
    `}
    ${mediaMax.largeTablet`
      min-height: 250px;
      height: 250px;
    `}
    ${mediaMax.phone`
      min-height: 190px;
      height: 190px;
    `}
  }
`
export default Slide
