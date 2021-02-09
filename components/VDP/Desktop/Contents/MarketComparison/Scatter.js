import { colors } from '%/styles'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
    CartesianGrid
} from 'recharts'

import ChartWrapper from './ChartWrapper'

export default (props) => {
    return (
        <ChartWrapper>
          <ResponsiveContainer width='90%' height={240}>
            <ScatterChart>
              <YAxis
                dataKey='y'
                name='Price'
                type='number'
                domain={['auto', 'auto']}
                tickCount={6}
              />
              <XAxis
                dataKey='x'
                name='Miles'
                domain={['auto', 'auto']}
                type='number'
                tickCount={6}
              />
              <Scatter
                name='Similar Cars'
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
    )
}
