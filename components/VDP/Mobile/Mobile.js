import styled from 'styled-components'
import { mediaMin } from '%/styles/mixins'

import Contents from './Contents'
import Overview from './Overview'

const Mobile = styled.section`
  display: block;
  ${mediaMin.laptop`
    display: none;
  `}
`

export default (props) => {
	return (
		  <Mobile>
		    <Overview {...props} />
		    <Contents {...props} />
		  </Mobile>)
}
