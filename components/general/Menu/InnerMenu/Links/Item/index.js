import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'

const Item = styled.div`
  margin-right: ${props => props.logo ? '65px' : '40px'};
  ${mediaMax.desktop`
    margin-right: ${props => props.logo ? '45px' : '20px'};
  `}
  ${mediaMax.tablet`
    margin-right: 0;
    display: ${props => props.logo ? 'block' : 'none'};
  `}
`

export default Item
