import styled from 'styled-components'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis
} from 'recharts'

import data from './seedData.js'
import { colors } from '%/styles'

const LineWrapper = styled.div`
  margin-bottom: 30px;
`

export default () =>
  <LineWrapper>
    <ResponsiveContainer height={100}>
      <LineChart data={data} margin={{ left: 2, right: 0, top: 0, bottom: 2 }}>
        <XAxis
          dataKey='name'
          mirror
          tick={false}
          padding={{ left: 8, right: 8 }}
          stroke={colors.chartAxis}
        />
        <YAxis
          domain={['dataMin', 'dataMax']}
          mirror
          tick={false}
          padding={{ top: 8, bottom: 8 }}
          stroke={colors.chartAxis}
        />
        <Line dataKey='a'
          stroke={colors.blue}
          strokeWidth={2}
          dot={{ fill: colors.blue, stroke: 'none' }}
        />
        <Line dataKey='b'
          stroke={colors.orange}
          strokeWidth={2}
          dot={{ fill: colors.orange, stroke: 'none' }}
        />
        <Line dataKey='c'
          stroke={colors.green}
          strokeWidth={2}
          dot={{ fill: colors.green, stroke: 'none' }}
        />
      </LineChart>
    </ResponsiveContainer>
  </LineWrapper>
