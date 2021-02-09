import styled from 'styled-components'

import { mediaMin, percentage } from '%/styles/mixins'
import { em } from 'polished'

const BrandColumn = styled.div`
  padding: ${em(2.5)};
  max-width: 100%;
  flex-basis: 100%;
  ${mediaMin.phablet`
    max-width: ${percentage(1, 2)};
    flex-basis: ${percentage(1, 2)};
  `}
  ${mediaMin.laptop`
    max-width: ${percentage(1, 5)};
    flex-basis: ${percentage(1, 5)};
  `}
`

const Brand = styled.a`
  background-color: #ebefef;
  height: ${em(135)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  display: block;
  margin: auto;
`

export default ({
  img,
  link
}) =>
  <BrandColumn>
    <Brand href={link}>
      <Image src={img} />
    </Brand>
  </BrandColumn>
