import styled from 'styled-components'

const Toggle = styled.a`
  display: ${props => props.open ? 'none' : 'block'};
  width: 20px;
  height: 20px;
  margin-left: auto;

  svg {
    width: 20px;
    height: 20px;
  }
`

export default Toggle
