import styled from 'styled-components'
import { colors } from '%/styles'
import { em, rgba } from 'polished'

const BottomWrapper = styled.div`
  position: relative;
  border-top: 0px solid ${rgba(colors.white, 0.2)};
  padding-top: ${em(30)};
  margin-top: ${em(30)};
`

// const BottomWrapper = styled.div`
//   position: relative;
//   border-top: 1px solid ${rgba(colors.white, 0.2)};
//   padding-top: ${em(30)};
//   margin-top: ${em(30)};
// `

export default BottomWrapper
