import { colors } from '%/styles'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Tooltip,
  Legend,
  XAxis,
  YAxis
} from 'recharts'

import ChartWrapper from './ChartWrapper'

export default (props) =>
  <ChartWrapper>
    <ResponsiveContainer width='90%' height={240}>
      <ScatterChart>
        <YAxis
          dataKey='y'
          name='Price'
          type='number'
          domain={['auto', 'auto']}
          tickCount={4}
        />
        <XAxis
          dataKey='x'
          name='Miles'
          domain={['auto', 'auto']}
          type='number'
          tickCount={4}
        />
        <Scatter
          name='Similar Carts'
          data={props.scatterSimilar}
          fill={colors.blue}
        />
        <Scatter
          name='National Average'
          data={props.scatterNational}
          fill={colors.green}
        />
        <Scatter
          name='Your Car'
          data={props.scatterYourCar}
          fill={colors.red}
        />
        <Tooltip cursor={{strokeDasharray: '3 3'}} />
        <Legend />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartWrapper>
