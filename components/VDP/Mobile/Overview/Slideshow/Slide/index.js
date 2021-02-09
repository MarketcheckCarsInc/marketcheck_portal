import styled from 'styled-components'
import { colors } from '%/styles'
import { stdBackground, mediaMin } from '%/styles/mixins'

const Slide = styled.div`
  ${stdBackground()}
  background-color: ${colors.softgray};
  background-image: url(${props => props.image});
  min-height: 130px;
  height: 130px;
  margin-top: 6px;
  transition: 0.3s;
  ${mediaMin.tablet`
    min-height: 300px;
    height: 300px;
  `}
  ${mediaMin.laptop`
    min-height: 540px;
    height: 540px;
    margin-top: 0;
  `}

  .slick-active & {
    min-height: 140px;
    height: 140px;
    margin-top: 0;
    ${mediaMin.tablet`
      min-height: 310px;
      height: 310px;
    `}
    ${mediaMin.laptop`
      min-height: 540px;
      height: 540px;
    `}
  }
`
export default Slide
