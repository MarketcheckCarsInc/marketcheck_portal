import {
  Flex,
  Column,
  Text,
  Dot
} from './SimilarComponents.js'
import { currency } from '%/format'
import { colors } from '%/styles'

export default ({
  dotColor,
  modelName,
  value
}) =>
  <Flex>
    <Column>
      <Flex noMargin >
        <Dot fill={colors[dotColor]} />
        <Text>{modelName}</Text>
      </Flex>
    </Column>
    <Column right >
      <Text>{currency(value)}</Text>
    </Column>
  </Flex>
