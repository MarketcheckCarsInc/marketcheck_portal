import CircleGraphWrapper from './CircleGraphsWrapper'
import ChartMaker from './ChartMaker.js'

export default (props) =>
  <CircleGraphWrapper>
    <ChartMaker days={props.dom} text='This Car' />
    <ChartMaker days={Number(props.localAverage)} text='Local Average' />
    <ChartMaker days={Number(props.nationalAverage)} text='National Average' />
  </CircleGraphWrapper>
