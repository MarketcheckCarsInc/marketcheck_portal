import { injectGlobal } from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const CustomSlickStyles = () =>
  injectGlobal`
    .slick-dots {
      text-align: center;
      font-size: 0;
      line-height: 0;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 30px;
    }

    .slick-dots li {
      display: inline-block;
      margin: 0 4px;
      position: relative;
      line-height: 0;
      font-size: 0;
    }

    .slick-dots li button {
      background: none;
      padding: 6px;
      line-height: 0;
      font-size: 0;
      width: 13px;
      height: 13px;
      ${mediaMax.laptop`
        width: 10px;
        height: 10px;
      `}
    }

    .slick-dots li button::before {
      width: 13px;
      height: 13px;
      content: '';
      background: ${colors.white};
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: none;
      opacity: 0.5;
      ${mediaMax.laptop`
        width: 10px;
        height: 10px;
      `}
    }

    .slick-dots li.slick-active button::before {
      background-color: ${colors.white};
      opacity: 1;
    }
  `
export default CustomSlickStyles
