import Section from '~/VDP/Section'
import Charts from './Charts.js'

export default ({ environmentalScores }) =>
  <Section title='Environmental Friendliness' summary='Based upon EPA guidelines for measuring pollutants'>
    {Object.keys(environmentalScores).length > 1 && <Charts {...environmentalScores} />}
  </Section>
