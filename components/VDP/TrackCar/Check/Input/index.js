import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'checkbox',
  id: props => props.hash
})`
  display: none;
`

export default Input
