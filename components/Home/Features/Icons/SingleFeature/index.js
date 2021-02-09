import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const SingleFeature = styled.div`
  position: relative;
  text-align: center;

  & > svg {
    width: ${rem(100)};
    margin-bottom: ${rem(30)};
  }

  ${mediaMax.desktop`margin-bottom: ${rem(30)};`}
`

const FeatureTitle = styled.h6`
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${19 / 16};
  margin-bottom: ${em(15, 16)};
  color: ${colors.black};
`

const FeatureText = styled.p`
  font-size: ${rem(14)};
  line-height: ${22 / 14};
  color: #5f7d8c;
  max-width: ${rem(170)};
  margin: 0 auto;
`

export default ({
  title,
  text,
  children
}) =>
  <SingleFeature>
    { children }
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureText>{text}</FeatureText>
  </SingleFeature>
