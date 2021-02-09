import styled from 'styled-components'
import { em } from 'polished'
import { percentage, mediaMax } from '%/styles/mixins'

const CardContainer = styled.div`
  padding: 0 ${em(9)};
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};
  ${mediaMax.laptop`
    max-width: 50%;
    flex-basis: 50%;
    margin-bottom: ${em(30)};
  `}
  ${mediaMax.tablet`
    max-width: 100%;
    flex-basis: 100%;
  `}
`
export default CardContainer
