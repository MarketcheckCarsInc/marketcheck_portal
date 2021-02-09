import {
  H6,
  SimilarWrapper,
  Flex,
  Column
} from './SimilarComponents.js'

import SimilarLabel from './SimilarLabel.js'

export default ({
  leftText,
  rightText,
  dotColor,
  modelName,
  value
}) =>
  <SimilarWrapper>
    <Flex>
      {leftText &&
      <Column>
        <H6>{leftText}</H6>
      </Column>
      }
      <Column right >
        <H6>{rightText}</H6>
      </Column>
    </Flex>
    <SimilarLabel
      dotColor='blue'
      modelName='2017 Toyota Camry'
      value={14345}
    />
    <SimilarLabel
      dotColor='orange'
      modelName='2017 Ford Mustang'
      value={14345}
    />
    <SimilarLabel
      dotColor='green'
      modelName='2017 Ford Mustang'
      value={14345}
    />
  </SimilarWrapper>
