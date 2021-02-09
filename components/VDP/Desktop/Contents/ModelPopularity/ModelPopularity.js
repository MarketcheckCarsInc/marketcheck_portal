import Section from '~/VDP/Section'
import LineCharts from './LineCharts.js'

export default ({ modelPopularity }) =>
  <Section id='popularityContainer' title='Model Popularity' summary='Based upon Days-on-Market ( DOM )'>
    {modelPopularity.length > 1 && <LineCharts modelPopularity={modelPopularity} />}
  </Section>
