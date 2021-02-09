import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import { colors } from '%/styles'
import Label from './Label.js'
import arrMaker from './arrMaker.js'

export default ({
  value,
  remaining,
  color,
  more
}) =>
  <ResponsiveContainer height={30}>
    <BarChart data={arrMaker(value, remaining)} layout='vertical' margin={{ top: 0, bottom: 20, left: 0, right: 0 }} barSize={6} >
      <XAxis type='number' domain={['dataMin', 'dataMax']} hide />
      <YAxis type='category' hide />
      <Bar
        // label={<Label remaining={remaining} />}
        stackId='a'
        dataKey='value'
        fill={more ? colors.chartgray : colors[color]}
      />
      <Bar
        stackId='a'
        dataKey='remaining'
        fill={more ? colors[color] : colors.chartgray}
      />
      {/*<Tooltip />*/}
    </BarChart>
  </ResponsiveContainer>
