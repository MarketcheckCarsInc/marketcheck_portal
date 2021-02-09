import styled from 'styled-components'
import { colors } from '%/styles'

export const Seller = styled.div`
  margin-bottom: 40px;
  text-align: center;
`

export const External = ({ width = 10.15, ...rest }) =>
  <svg width={width} height={width} viewBox='0 0 10.16 10.15' {...rest} >
    <path d='M9.34,10.15H0V.81H4.64v1H1V9.15H8.34V5.54h1ZM5.79,5.06l-.71-.71L8.44,1H7.09V0h3.07V3h-1V1.7Z' fill='currentColor' />
  </svg>

export const Name = styled.a`
  font-size: 18px;
  line-height: 21.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.softblue};
  margin-bottom: 20px;

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  svg {
    opacity: 0.46;
    margin: 0 8px;
  }
`

export const LocText = styled.span`
  opacity: ${props => props.faded ? '0.46' : '0.72'};
`

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

export const Badge = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 1;
  padding: 5px 10px;
  color: #fff;
  background-color: #eaa10f;
  margin-left: 5px;
  border-radius: 20px;
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
  line-height: 16.8px;
  color: ${colors.softblue};
  margin-bottom: 15px;
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
`
