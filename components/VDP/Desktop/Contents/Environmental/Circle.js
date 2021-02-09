import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend
} from 'recharts'

import { colors } from '%/styles'
import ArrMaker from './ArrMaker.js'
import CustoLegend from './CustoLegend.js'

const Circle = ({
  score,
  color,
  text
}) =>
  <ResponsiveContainer height={320} >
    <PieChart>
      <defs>
        <linearGradient id={`${color}-${score}`}x2='0%' y2='100%'>
          <stop offset='0' stopColor={colors[color]} stopOpacity='0.6' />
          <stop offset='0.5' stopColor={colors.white} stopOpacity='0.35' />
        </linearGradient>
      </defs>
      <circle
        cx='50%'
        cy='42%'
        r='125'
        opacity='0.15'
        fill={`url(#${color}-${score})`}
        transform='translate(0 -1)'
      />
      <Pie
        data={ArrMaker(score)}
        nameKey='name'
        dataKey='value'
        outerRadius='100%'
        innerRadius='95%'
        fill={colors.chartgray}
        stroke='none'
        activeIndex={0}
        activeShape={{ fill: colors[color] }}
        startAngle={180}
        endAngle={0}
      />
      <Legend
        content={<CustoLegend score={score} text={text} color={color} />}
        wrapperStyle={{ bottom: 193 }}
      />
    </PieChart>
  </ResponsiveContainer>

export default Circle
