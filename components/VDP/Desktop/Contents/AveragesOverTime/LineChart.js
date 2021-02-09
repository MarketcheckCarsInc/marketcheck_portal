import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  Legend,
  XAxis,
  YAxis
} from 'recharts'

import { colors } from '%/styles'

import { data } from './seedData'

import LineChartWrapper from './LineChartWrapper.js'

export default ({ dataTrend }) =>

  <LineChartWrapper>
    <ResponsiveContainer width='100%' height={200}>
      <AreaChart data={dataTrend} margin={{ bottom: 25 }}>
        <XAxis hide dataKey='name' />
        <YAxis hide />
        <Tooltip />
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={colors.green} stopOpacity={0.15} />
            <stop offset='95%' stopColor={colors.green} stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={colors.blue} stopOpacity={0.15} />
            <stop offset='95%' stopColor={colors.blue} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type='natural'
          dataKey='price'
          stroke={colors.blue}
          dot={false}
          legendType='circle'
          fillOpacity={1}
          fill='url(#colorPv)'
          name='Price'
        />
        <Area
          type='natural'
          dataKey='miles'
          stroke={colors.green}
          dot={false}
          legendType='circle'
          fillOpacity={1}
          fill='url(#colorUv)'
          name='Miles'
        />
        <Legend iconSize={8} wrapperStyle={{ bottom: 0 }} />
      </AreaChart>
    </ResponsiveContainer>
  </LineChartWrapper>
