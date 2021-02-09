import styled from 'styled-components'
import SingleChart from './SingleChart.js'

const ChartsWrapper = styled.div`
  position: relative;
`

export default (props) =>
  <ChartsWrapper>

    {props.modelPopularity.map((item, key) => {
      return <SingleChart value={item.left} remaining={item.right} we={item.text} key={key} />
    })}

  </ChartsWrapper>
