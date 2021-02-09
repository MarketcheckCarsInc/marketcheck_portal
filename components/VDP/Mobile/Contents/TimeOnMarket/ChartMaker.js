import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend
} from 'recharts'

import { colors } from '%/styles'
import CustoLegend from './CustoLegend.js'
import daysArray from './seedData.js'

const ChartMaker = ({ days, text }) =>
  <ResponsiveContainer width='100%' height={165} >
    <PieChart margin={{ top: 30 }}>
      <Pie
        data={daysArray(days)}
        nameKey='name'
        dataKey='value'
        outerRadius={80}
        innerRadius={60}
        fill='#dae0e8'
        activeIndex={1}
        activeShape={{ fill: colors.blue }}
        startAngle={90}
        endAngle={450}
      />
      <Legend content={<CustoLegend days={days} text={text} />} wrapperStyle={{ bottom: 65 }} />
    </PieChart>
  </ResponsiveContainer>

export default ChartMaker
