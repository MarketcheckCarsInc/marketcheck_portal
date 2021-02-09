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
  value,
  resaleValue,
  timeValue
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
    {resaleValue[0] &&
    <SimilarLabel
      dotColor='blue'
      modelName={resaleValue[0].name}
      value={resaleValue[0][timeValue]}
    />
    }
    {resaleValue[1] &&
    <SimilarLabel
      dotColor='orange'
      modelName={resaleValue[1].name}
      value={resaleValue[1][timeValue]}
    />
    }
    {resaleValue[2] &&
    <SimilarLabel
      dotColor='green'
      modelName={resaleValue[2].name}
      value={resaleValue[2][timeValue]}
    />
    }
  </SimilarWrapper>
