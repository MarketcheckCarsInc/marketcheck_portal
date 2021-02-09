import Section from '~/VDP/Section'
import { Table } from '~/general'
import Aux from 'react-aux'

export default (props) =>
  <Section title='The Competition' summary='Similar cars currently for sale' className={props.className} {...props}>
    {props.competition &&
      <Aux>
        <Table data={props.competition.current_car} currentCar headings={['Current Car Model', 'Price', 'Mileage', 'Avg. Market Value']} />
        <Table data={props.competition.same_car_models} headings={['Same Car Model', 'Avg. Price', 'Avg. Mileage', 'Avg. Market Value']} />
        <Table data={props.competition.similar_car_models} headings={['Similar Car Models', 'Avg. Price', 'Avg. Mileage', 'Avg. Market Value']} />
      </Aux>
    }
  </Section>
