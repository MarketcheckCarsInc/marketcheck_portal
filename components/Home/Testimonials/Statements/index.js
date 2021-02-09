import Statement from './Statement'
import styled from 'styled-components'

const Statements = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default () =>
  <Statements>
    <Statement
      face='/static/img/home/t1.png'
      name='Jonathan Marvel'
      model='2014 Subaru Forester'
      opinion='Light years difference in options and comfort. - Awesome!'
    />
    <Statement
      face='/static/img/home/t2.png'
      name='Aaron Mavericks'
      model='2014 Chevrolet Impala'
      opinion='Love the styling of it definitely one the sexiest cars on the road.'
    />
    <Statement
      face='/static/img/home/t3.png'
      name='Adalberto Adams'
      model='2013 Dodge Journey'
      opinion='Blind spots!!!!! Ughhhh With the two far back seats in the up right position.'
    />
  </Statements>
