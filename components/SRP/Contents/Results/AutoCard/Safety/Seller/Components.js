import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { colors } from '%/styles'

export const Seller = styled.div`
  display: inline-block;
  border-left: 1px solid ${colors.bordergray};
  padding-left: 1.5em;
  padding-right: 5em;
  text-align: left;
  ${mediaMax.srpDesktop`
    left: auto;
    padding-left: 1em;
    padding-right: 1em;
  `}
  ${mediaMax.desktop`
    left: auto;
    padding-left: 1em;
    padding-right: 2em;
  `}
  ${mediaMax.laptop`
    left: auto;
    padding-left: 0.5em;
    padding-right: 0.5em;
  `}
  ${mediaMax.largeTablet`
    border: none;
    padding: 0;
    padding-bottom: 2em;
  `}
`

export const External = ({ width = 10.15, ...rest }) =>
  <svg width={width} height={width} viewBox='0 0 10.16 10.15' {...rest} >
    <path d='M9.34,10.15H0V.81H4.64v1H1V9.15H8.34V5.54h1ZM5.79,5.06l-.71-.71L8.44,1H7.09V0h3.07V3h-1V1.7Z' fill='currentColor' />
  </svg>

export const Name = styled.a`
  display: inline-block;
  font-size: 14px;
  line-height: 21.6px;
  color: ${colors.softblue};
  margin-bottom: 10px;
  ${mediaMax.desktop`
    font-size: 13px;
    margin-bottom: 5px;
  `}
  ${mediaMax.largeTablet`
    font-size: 14px;
    margin-bottom: 10px;
  `}

  svg {
    margin-left: 10px;
  }
`

export const Dot = ({ width = 3, fill = 'currentColor', ...rest }) =>
  <svg width={width} height={width} viewBox='0 0 10 10' {...rest} fill={fill} >
    <circle cx='50%' cy='50%' r='5' />
  </svg>

export const Location = styled.h6`
  font-size: 14px;
  line-height: 16.8px;
  color: #232a35;
  margin-bottom: 10px;
  ${mediaMax.desktop`
    font-size: 12px;
    margin-bottom: 5px;
  `}
  ${mediaMax.largeTablet`
    font-size: 14px;
    margin-bottom: 10px;
  `}

  svg {
    opacity: 0.46;
    margin: 5px 8px;
  }
`

export const LocText = styled.span`
  opacity: ${props => props.faded ? '0.46' : '0.72'};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const Badge = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  padding: 5px 10px;
  color: #fff;
  background-color: #eaa10f;
  margin: 0 5px;
  border-radius: 20px;
  vertical-align: middle;
  ${mediaMax.desktop`
    font-size: 10px;
  `}
  ${mediaMax.largeTablet`
    font-size: 12px;
  `}
`

export const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0 2px;
  }
`

export const Star = ({ full }) =>
  <svg xmlns='http://www.w3.org/2000/svg' width='13.64' height='12.97' viewBox='0 0 13.64 12.97'>
    {full
      ? <polygon points='6.82 0 8.57 4.75 13.64 4.95 9.66 8.09 11.03 12.97 6.82 10.16 2.6 12.97 3.98 8.09 0 4.95 5.06 4.75 6.82 0' fill='#EAA10F' />
      : <path d='M6.82,2.16,7.87,5,8,5.48l.5,0,3,.12L9.2,7.5l-.39.31.14.48.82,2.92L7.24,9.53l-.42-.28-.42.28L3.88,11.22,4.7,8.3l.14-.48L4.44,7.5,2.06,5.62l3-.12.5,0L5.77,5,6.82,2.16M6.82,0,5.06,4.75,0,5,4,8.09,2.6,13l4.21-2.81L11,13,9.66,8.09l4-3.14-5.06-.2L6.82,0Z' fill='#EAA10F' />
    }
  </svg>

export const Reviews = styled.h4`
  font-size: 14px;
  color: ${colors.softblue};
  ${mediaMax.desktop`
    font-size: 11px;
  `}
  ${mediaMax.largeTablet`
    font-size: 14px;
  `}
`

export const Button = styled.a`
  font-size: 13px;
  line-height: 15.6px;
  color: #fff;
  background: ${colors.green};
  text-align: center;
  padding: 10px 12px;
  display: inline-block;
  border-radius: 4px;
  ${mediaMax.srpDesktop`
    font-size: 12px;
    padding: 6px 10px;
  `}
  ${mediaMax.desktop`
    font-size: 11px;
    padding: 5px 10px;
  `}
  ${mediaMax.largeTablet`
    font-size: 13px;
    padding: 10px 12px;
  `}
`
