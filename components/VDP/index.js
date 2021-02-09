import Head from 'next/head'
import { LayoutSecondary } from '~/layout'
import TrackCar from './TrackCar'
import Desktop from './Desktop'
import Mobile from './Mobile'
import FontsHOC from '@/HOC/Fonts'

const VDP = (props) => {
	const pageTitle = () => {
		let title = ''

		if (props.heading) {
			title = props.heading + ' in ' +
					(props.city  ? props.city + ', ': ' ') +
					(props.state  ? props.state + ' ': ' ')
		} else {
			title = title + (props.year ? props.year + ' ' : ' ')
			title = title + (props.make ? props.make + ' ' : ' ')
			title = title + (props.model ? props.model + ' ' : ' ')
			title = title + (props.exterior_color  ? props.exterior_color + ' ' : ' ')
			title = title + (props.city ? props.city + ', ' : ' ')
			title = title + (props.state ? props.state + ' ' : ' ')
		}

		return title
	}

	return (
		  <LayoutSecondary>
			<Head>
				<title>{pageTitle()}</title>
		    </Head>
		    <Mobile {...props} />
		    <Desktop {...props} />
		    {/*<TrackCar {...props} />*/}
		  </LayoutSecondary>)
}

export default FontsHOC(VDP)
