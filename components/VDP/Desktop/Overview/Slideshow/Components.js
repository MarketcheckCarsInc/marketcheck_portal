import Next from './next.svg'
import Prev from './prev.svg'
import styled from 'styled-components'
import { align, size } from '%/styles/mixins'

const PreviousButton = styled.button`
  ${size('66px')};
  position: absolute;
  display: block;
  ${align('vertical')};
  z-index: 1;
  cursor: pointer;
  left: 1px;
`

const NextButton = styled.button`
  ${size('66px')};
  position: absolute;
  display: block;
  ${align('vertical')};
  z-index: 1;
  cursor: pointer;
  right: 1px;
`

export const NextArrow = props =>
  <NextButton {...props}>
    <Next />
  </NextButton>

export const PreviousArrow = props =>
  <PreviousButton {...props}>
    <Prev />
  </PreviousButton>
