import styled from 'styled-components'

export const H6 = styled.h6`
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 5px;
`

export const SimilarWrapper = styled.div`
  margin-bottom: 25px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${props => !props.noMargin && `margin-bottom: 15px;`}
`

export const Column = styled.div`
  ${props => props.right && `
    text-align: right;
    margin-left: auto;
  `}
`

export const Text = styled.span`
  display: block;
  opacity: 0.54;
  font-size: 14px;
  margin-left: 15px;
`

export const Dot = ({ fill = '#000' }) =>
  <svg viewBox='0 0 14 14' width='14px' height='14px'>
    <circle cx='50%' cy='50%' r='7' fill={fill} />
  </svg>
