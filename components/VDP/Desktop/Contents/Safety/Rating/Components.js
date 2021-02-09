import styled from 'styled-components'

export const Rating = styled.div`
  margin: 0 auto 40px;
  text-align: center;
`

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin: 0 2px;
  }
`

export const Name = styled.h6`
  font-size: 12px;
  line-height: 2;
  opacity: 0.56;
`

export const Star = ({ full }) =>
  <svg xmlns='http://www.w3.org/2000/svg' width='13.64' height='12.97' viewBox='0 0 13.64 12.97'>
    {full
      ? <polygon points='6.82 0 8.57 4.75 13.64 4.95 9.66 8.09 11.03 12.97 6.82 10.16 2.6 12.97 3.98 8.09 0 4.95 5.06 4.75 6.82 0' fill='#115baa' />
      : <path d='M6.82,2.16,7.87,5,8,5.48l.5,0,3,.12L9.2,7.5l-.39.31.14.48.82,2.92L7.24,9.53l-.42-.28-.42.28L3.88,11.22,4.7,8.3l.14-.48L4.44,7.5,2.06,5.62l3-.12.5,0L5.77,5,6.82,2.16M6.82,0,5.06,4.75,0,5,4,8.09,2.6,13l4.21-2.81L11,13,9.66,8.09l4-3.14-5.06-.2L6.82,0Z' fill='#115baa' />
    }
  </svg>
