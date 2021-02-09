import styled from 'styled-components'

export const Section = styled.section`
  padding: 50px 0;

  & + & {
    border-top: 1px solid #d6d6d6;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 300;
  margin-bottom: 12px;
  ${props => props.center && `
  text-align: center;
  `}
`

export const Summary = styled.p`
  font-size: 14px;
  line-height: 28px;
  opacity: 0.56;
  ${props => props.center && `
  text-align: center;
  `}
`
