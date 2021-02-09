import styled from 'styled-components'
import { FlexRow, OutContainer } from '~/layout'
import { mediaMax } from '%/styles/mixins'
import Wrapper from './Wrapper'
import Sidebar from './Sidebar'
import Results from './Results'

const StyledFlexRow = styled(FlexRow)`
  ${mediaMax.phone`
    display: block;
  `}
`

export default (props) =>
  <Wrapper>
    <OutContainer>
      <StyledFlexRow>
        <Sidebar {...props} />
        <Results {...props} />
      </StyledFlexRow>
    </OutContainer>
  </Wrapper>
